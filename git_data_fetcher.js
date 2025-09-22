const openSource = {
  githubConvertedToken: "",
  githubUserName: "vineetha12300",
};

const fetch = require("node-fetch");
const fs = require("fs");

const query_pr = {
  query: `
	query {
	  user(login: "${openSource.githubUserName}"){
	    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
	      mergedBy {
	          avatarUrl
	          url
	          login
	      }
	      createdAt
	      number
        changedFiles
	      additions
	      deletions
        baseRepository {
	          name
	          url
	          owner {
	            avatarUrl
	            login
	            url
	          }
	        }
      }
    }
	}
}
	`,
};

const query_issue = {
  query: `query{

		user(login: "${openSource.githubUserName}") {
    issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      	id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }

	}`,
};

const query_org = {
  query: `query{
	user(login: "${openSource.githubUserName}") {
	    repositoriesContributedTo(last: 100){
	      totalCount
	      nodes{
	        owner{
	          login
	          avatarUrl
	          __typename
	        }
	      }
	    }
	  }
	}`,
};

const query_pinned_projects = {
  query: `
	query {
    user(login: "vineetha12300") {
      id
      repositories(first: 50) {
        edges {
          node {
            id
            name
            createdAt
            isPrivate
            isFork
            isEmpty
            description
            descriptionHTML
            languages(first: 50) {
              nodes {
                name
                id
                color
              }
              totalCount
            }
            openGraphImageUrl
            projectsUrl
          }
        }
      }
      createdAt
      url
    }
  }
  
	`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pr),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"];

    let open = 0;
    let closed = 0;
    let merged = 0;
    for (let i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["state"] === "OPEN") open++;
      else if (cropped["data"][i]["state"] === "MERGED") merged++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching the Pull Request Data.\n");
    fs.writeFile(
      "./src/shared/opensource/pull_requests.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(error));

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_issue),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["issues"]["nodes"];

    let open = 0;
    let closed = 0;
    for (let i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["closed"] === false) open++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching the Issues Data.\n");
    fs.writeFile(
      "./src/shared/opensource/issues.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(error));

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_org),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const orgs = data["data"]["user"]["repositoriesContributedTo"]["nodes"];
    const newOrgs = { data: [] };
    for (let i = 0; i < orgs.length; i++) {
      const obj = orgs[i]["owner"];
      if (obj["__typename"] === "Organization") {
        let flag = 0;
        for (let j = 0; j < newOrgs["data"].length; j++) {
          if (JSON.stringify(obj) === JSON.stringify(newOrgs["data"][j])) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          newOrgs["data"].push(obj);
        }
      }
    }

    console.log("Fetching the Contributed Organization Data.\n");
    fs.writeFile(
      "./src/shared/opensource/organizations.json",
      JSON.stringify(newOrgs),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pinned_projects),
})
  .then((response) => response.text())
  .then((txt) => {
    // console.log("txtxtxtxtxtx",txt)
    const data = JSON.parse(txt);
    // console.log(txt);
    const projects = data["data"]["user"]["repositories"]["edges"];
    const newProjects = { data: [] };
    for (let i = 0; i < projects.length; i++) {
      const obj = projects[i]["node"];
      const langobjs = obj["languages"]["nodes"];
      const newLangobjs = [];
      for (let j = 0; j < langobjs.length; j++) {
        if (langobjs[j]["name"] in languages_icons) {
          newLangobjs.push({
            name: langobjs[j]["name"],
            iconifyClass: languages_icons[langobjs[j]["name"]],
          });
        }
      }
      obj["languages"] = newLangobjs;
      newProjects["data"].push(obj);
    }

    console.log("Fetching the Pinned Projects Data.\n");
    fs.writeFile(
      "./src/shared/opensource/projects.json",
      JSON.stringify(newProjects),
      function (err) {
        if (err) {
          console.log(
            "Error occured in pinned projects 1",
            JSON.stringify(err)
          );
        }
      }
    );
  })
  .catch((error) =>
    console.log("Error occured in pinned projects 2", JSON.stringify(error))
  );
