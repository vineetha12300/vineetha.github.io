import { techSkills } from "./techSkills";
const moment = require("moment");
const {
  angular,
  gcp,
  sass,
  javascript,
  python,
  nodejs,
  npm,
  sql,
  azure,
  postgresSql,
  express,
  aws,
  css3,
  mongodb,
  yarn,
  docker,
  reactjs,
  html5,
  jira,
  typescript,
  redux,
  bootstrap,
  karma,
  materialUI,
  ngrx,
  git,
} = techSkills;

const skills = {
  data: [
    {
      fileName: "FrontEndImg",
      title: "Frontend Development",
      skills: [
        "⚡ Building responsive, dynamic, and user-friendly web applications using React and Angular",
        "⚡ Developing complex UI components using modern design principles like Material UI, Bootstrap, and SCSS",
        "⚡ Implementing state management techniques using Redux, React Hooks, and Context API",
        "⚡ Creating reusable components for large-scale applications to ensure maintainability and scalability",
        "⚡ Ensuring cross-browser compatibility and responsiveness across different devices",
        "⚡ Following best practices for accessibility (ADA compliance) and performance optimization using tools like Axe DevTools",
      ],
      softwareSkills: [
        html5,
        css3,
        sass,
        javascript,
        typescript,
        reactjs,
        angular,
        redux,
        npm,
        yarn,
        bootstrap,
        karma,
        materialUI,
        ngrx,
      ],
    },
    {
      fileName: "FullStackImg",
      title: "Full Stack Development",
      skills: [
        "⚡ Developing scalable web applications with complex architectures using Angular, React, and Node.js",
        "⚡ Building robust backends using Node.js, Express, and Java Spring Boot",
        "⚡ Utilizing REST APIs and GraphQL for seamless communication between frontend and backend",
        "⚡ Implementing advanced design patterns such as Chain of Responsibility and Decorator for optimized performance",
        "⚡ Managing databases like MongoDB, PostgreSQL, and Redis for high-performance applications",
      ],
      softwareSkills: [
        html5,
        css3,
        javascript,
        reactjs,
        angular,
        nodejs,
        express,

        mongodb,
        postgresSql,
      ],
    },
    {
      fileName: "CloudInfraImg",
      title: "Cloud Infra-Architecture",
      skills: [
        "⚡ Managing and deploying applications on AWS, Azure, and GCP cloud platforms",
        "⚡ Setting up and maintaining CI/CD pipelines for continuous integration and deployment",
        "⚡ Hosting and maintaining websites on virtual machines with database integrations using Docker",
      ],
      softwareSkills: [aws, gcp, azure, docker, mongodb, postgresSql],
    },
  ],
};

let experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "With over 5 years of professional experience, I have worked in various roles across different domains, from web development to cloud infrastructure, solving complex problems and delivering high-quality, scalable applications. I have also been involved in mentoring and leading teams to build and maintain mission-critical systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer (Contract)",
          company: "PwC Canada",
          company_url: "",
          logo_path: "",
          start_date: "2024-11",
          end_date: "",
          duration: "Nov 2024 - Present",
          location: "Toronto (Remote)",
          skills: [reactjs, nodejs, angular, sql, azure, python, jira, git],
          descriptions: [
            "⚡Participated in the full SDLC using Agile (SCRUM), ensuring smooth sprint deliveries and on-time project releases.",
            "⚡Designed and implemented an enterprise-grade Document Management Application with ReactJS, TypeScript, Redux delivering a responsive, user-friendly UI that improved usability and adoption.",
            "⚡Developed and secured RESTful APIs in Spring Boot for document upload, retrieval, metadata indexing, and version control, improving backend reliability and system scalability.",
            "⚡Enhanced performance by 30% through Redis caching and optimized PostgreSQL queries, reducing database load and response times for frequently accessed data.",
            "⚡Integrated MSAL (Azure AD) for authentication and Single Sign-On (SSO), enforcing secure role-based access control across modules.",
            "⚡Deployed containerized microservices using Docker and Azure Kubernetes Service (AKS), ensuring fault tolerance, high availability, and seamless scalability in production.",
            "⚡Incorporated Checkmarx vulnerability scans into CI/CD pipelines, enabling early detection and remediation of security issues, strengthening application security.",
            "⚡Implemented unit and integration testing with JUnit and Mockito and collaborated with QA engineers to expand test coverage in Jenkins pipelines, reducing release-related defects by 25%.",
            "⚡Used Git/GitHub for version control, managing code changes through branching, pull requests, and peer reviews.",
          ],
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer ",
          company: "Wipro India",
          company_url: "https://www.wipro.com/",
          logo_path: "",
          start_date: "2021-07",
          end_date: "2024-09",
          duration: "2021-07 - 2024-09",
          location: "Hyderabad, India",
          skills: [reactjs, nodejs, angular, sql, docker, python, jira, git],
          descriptions: [
            "⚡ Developed health insurance web applications using Angular (frontend) and Spring Boot (backend), improving system functionality and user experience.",
            "⚡ Built secure APIs with Spring Security & JWT, ensuring HIPAA compliance and role-based access control.",
            "⚡ Created multi-step onboarding workflows with Angular Reactive Forms, achieving 99.9% accuracy in data.",
            "⚡ Optimized RESTful integrations between frontend and backend services, reducing API failures by 20%.",
            "⚡ Configured CI/CD pipelines with Jenkins & GitHub Actions, reducing release cycle time by 40%.",
            "⚡ Deployed containerized microservices on AWS EKS with Docker and Kubernetes, leveraging S3 for storage and Lambda for serverless processing, ensuring reliability, scalability, and high availability.",
            "⚡ Integrated Kafka-based messaging to enable reliable real-time communication between distributed microservices, improving data consistency and scalability.",
            "⚡ Reduced production bugs by 30% by improving code quality through rigorous unit and integration.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Developer Intern",
          company: "Aspire Vision",
          company_url: "",
          logo_path: "",
          start_date: "2021-01",
          end_date: "2021-06",
          duration: "Jan 2021 - June 2021",
          location: "Hyderabad, India",
          skills: [angular, nodejs, reactjs, mongodb, sql, jira, git],
          descriptions: [
            "⚡Assisted in developing Spring Boot microservices for financial transaction processing systems.",
            "⚡Implemented reusable Angular components, improving frontend efficiency and consistency.",
            "⚡Wrote SQL queries and optimized database performance for Oracle 11g, reducing response times.",
            "⚡Created and executed JUnit & Mockito unit tests contributing to higher code coverage.",
            "⚡Gained hands-on exposure to Docker, Kubernetes, and Jenkins CI/CD pipelines.",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

const dateComparison = function (a, b) {
  const date1 = moment(a.start_date, "MMM YYYY").isValid()
    ? moment(a.start_date, "MMM YYYY").format("YYYYMMDD")
    : "";
  const date2 = moment(b.start_date, "MMM YYYY").isValid()
    ? moment(b.start_date, "MMM YYYY").format("YYYYMMDD")
    : "";
  return date2 - date1;
};
experience.sections.map((section) => {
  section.experiences.sort(dateComparison);
  section.experiences.forEach((exp) => {
    exp.duration = `${moment(exp.start_date, "MMM YYYY").format(
      "MMM YYYY"
    )} - ${exp.end_date ? moment(exp.end_date).format("MMM YYYY") : "Present"}`;
  });
  return section;
});

export { skills, experience };
