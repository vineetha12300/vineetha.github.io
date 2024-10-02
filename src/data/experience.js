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
  git
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
        ngrx
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
        "⚡ Hosting and maintaining websites on virtual machines with database integrations using Docker"
      ],
      softwareSkills: [
        aws,
        gcp,
        azure,
        docker,
       
        mongodb,
        postgresSql,
       
      ],
    },
  ],
};


let experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "With over 6 years of professional experience, I have worked in various roles across different domains, from web development to cloud infrastructure, solving complex problems and delivering high-quality, scalable applications. I have also been involved in mentoring and leading teams to build and maintain mission-critical systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "KnowledgeFarms Venture Pvt",
          company_url: "",
          logo_path: "",
          start_date: "June 2023",
          end_date: "July 2024",
          duration: "Jun 2023 - July 2023",
          location: "Toronto (Remote)",
          skills: [reactjs, nodejs, angular, sql, aws, python, jira,git],
          descriptions: [
            "⚡ Improved performance by implementing lazy loading, code splitting, and memoization to reduce load times.",
            "⚡ Collaborated with backend teams to consume RESTful APIs, ensuring smooth integration with Angular services and HTTPClient.",
            "⚡ Wrote unit tests and end-to-end tests using React Testing Library and Cypress, increasing overall code quality and reliability.",
            "⚡ Handled asynchronous operations using Promises, Async/Await, and Event Emitters, ensuring non-blocking, fast processing in Node.js applications.",
            "⚡ Collaborated closely with Business Analysts, stakeholders, and cross-functional teams to gather and translate business requirements into technical solutions, ensuring alignment with project goals and user needs.",
            "⚡ Implemented RxJS for reactive programming and handling asynchronous data streams efficiently.",
            "⚡ Implemented middleware for logging, validation, and security checks, improving code organization and maintainability.",
          ],
          color: "#0879bf",
        },
        {
          title: "Senior Software Developer",
          company: "ThinkBridge",
          company_url: "https://www.thinkbridge.in/",
          logo_path: "thinkbridge.jpg",
          start_date: "January 2022",
          end_date: "April 2023",
          duration: "Jan 2022 - Apr 2023",
          location: "Pune, India",
          skills: [reactjs, nodejs, angular, sql, docker, python, jira,git],
          descriptions: [
            "⚡ Led the UI/UX design and development for new product offerings using React and Angular, implementing best practices for a scalable architecture, which resulted in a 30% improvement in front-end build performance.",
            "⚡ Successfully migrated legacy AngularJS applications to Angular 12 and 14, reducing development time by 30% by creating reusable component libraries to ensure design consistency across multiple projects.",
            "⚡ Developed and optimized React-based UI components with a focus on reusability, performance, and accessibility, utilizing Redux for state management and React Hooks (useState, useEffect, useMemo) for dynamic UIs.",
            "⚡ Integrated ADA compliance measures using Axe DevTools, improving accessibility by 35% and ensuring inclusivity for a wider user base.",
            "⚡ Coordinated with cross-functional teams, including UX designers, product managers, and back-end developers, to streamline project delivery, reducing time-to-market by 15%.",
            "⚡ Developed RESTful APIs using Node.js (Express) and integrated with SQL databases to handle efficient data processing and management, ensuring smooth operation of front-end systems.",
            "⚡ Mentored junior developers and led code reviews, ensuring adherence to high coding standards, resulting in improved code quality and team productivity.",
          ],
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "Project Tree",
          company_url: "https://www.linkedin.com/company/project-tree/",
          logo_path: "projecttree.jpg",
          start_date: "March 2021",
          end_date: "December 2021",
          duration: "Mar 2021 - Dec 2021",
          location: "Surat, India",
          skills: [
            angular,
            nodejs,
            reactjs,
            mongodb,
            sql,
            jira,
            git
          ],
          descriptions: [
            "⚡ Developed and maintained multiple web applications using Angular and React, ensuring optimal performance, scalability, and user experience across a variety of platforms.",
            "⚡ Designed and implemented an admin panel with role-based authentication in Angular, incorporating Angular Observables for real-time data updates, improving security and user management.",
            "⚡ Integrated OKTA for third-party authentication (OAuth), enhancing security and adding support for multi-factor authentication.",
            "⚡ Worked on improving back-end data handling by integrating MongoDB and Redis for caching and faster data retrieval, reducing API lookup times by 15%.",
            "⚡ Developed RESTful APIs using Node.js and Express to efficiently handle complex data interactions, reducing server response times and improving the overall application performance.",
            "⚡ Implemented Test-Driven Development (TDD) using Karma, Jasmine, and Protractor for testing Angular components, improving code quality and ensuring reliability.",
            "⚡ Collaborated with UX teams, business users, and back-end developers to deliver user-centric features and ensure seamless front-end and back-end integration.",
          ],
          color: "#9b1578",
        },
        {
          title: "Associate Software Developer",
          company: "ScrumStart",
          company_url: "https://www.srk.one/",
          logo_path: "scrumstart.png",
          start_date: "June 2017",
          end_date: "February 2021",
          duration: "Jun 2017 - Feb 2021",
          location: "Surat, India",
          skills: [angular, nodejs, mongodb,git,jira],
          descriptions: [
            "⚡ Developed enterprise solutions in Angular for clients in the capital market, delivering scalable and maintainable applications that aligned with business objectives and user needs.",
            "⚡ Implemented complex Angular data structures and used RxJS Observables for real-time updates, improving the reactivity and responsiveness of the application.",
            "⚡ Built interactive data visualizations, including bar graphs and charts, using libraries such as ng2-charts, ngx-charts, and D3.js, which significantly improved reporting and data insights for end-users.",
            "⚡ Developed reusable Angular components and a component library to ensure design consistency across projects, reducing development time by 30% and enhancing maintainability.",
            "⚡ Integrated backend services using Node.js (Express) and MongoDB, developing RESTful APIs to support high user loads and complex data queries, resulting in a smooth and efficient user experience.",
            "⚡ Implemented complex data grids with AG Grid to handle large datasets, optimizing performance and improving user interaction within the application.",
            "⚡ Built scalable backend solutions using Redis and ElasticSearch, improving search capabilities and data indexing, which enhanced application performance and user satisfaction.",
          ],
          color: "#fc1f20",
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
