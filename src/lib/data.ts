import React from "react";

export const links = [
  {
    name: "Home",
  },
  {
    name: "Skills",
  },
  {
    name: "Experience",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
] as const;

export const experiencesData = [
  {
    title: "React Js Developer",
    company: "Tata Consultancy Services Pvt Ltd",
    from: "Aug 2023",
    to: "Present",
    description: [
      "Developed and maintained responsive web applications using React.js and Typescript, resulting in improved user experience.",
      "Utilized version control system Git for code management and collaborated effectively with team members using Agile methodologies.",
      "Implemented state management solutions such as Redux and Context Api for efficient data flow and seamless user experiences.",
      "Been a part of code reviews and refactored codebase to improve performance, scalability, and maintainability.",
      "Implemented responsive design principles, making applications accessible across various devices and screen sizes.",
      "Collaborated with cross-functional teams to deliver high-quality solutions within tight deadlines.",
      "Utilized code-splitting techniques to improve the website’s loading speed and optimize resource utilization.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Money App",
    description: `Led the transformation of a legacy system into a modern, responsive React JS based
      website, enhancing overall performanceanduser experience.Conducted a comprehensive analysis of the existing codebase to identify legacy components and dependencies.Developed a migration strategy, breaking down the transition
      into manageable phases to minimize downtime andensureasmoothtransition.`,
    from: "Jan 2023",
    to: "Present",
    tags: [
      "React",
      "TypeScript",
      "Scss",
      "Javascript(ES6+)",
      "HTML5",
      "CSS3",
      "RestFul API's",
      "GitLab",
    ],
  },
  {
    title: "TurnOver Dashboard",
    description: `The portal serves as a central hub for the database teams, providing them with the essentials
      information and data.The dashboardactsasa valuable resource for the DB teams to manage and monitor their workflow
      efficiently.`,
    from: "Sept 2021",
    to: "Dec 2023",
    tags: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Axios",
      "React Testing Library",
      "GitHub",
    ],
  },
  {
    title: "PortFolio",
    description: "My own portfolio website",
    from: "Apr 2024",
    to: "May 2024",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "HTML5",
      "CSS3",
      "GitHub",
    ],
  },
] as const;

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML5",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      },
      {
        name: "TailwindCss",
        image: "https://www.drupal.org/files/project-images/screenshot_361.png",
      },
      {
        name: "SASS/SCSS",
        image:
          "https://caffeinecreations.ca/uploads/blog/_1200x630_crop_center-center_82_none/sass-logo-new.png?mtime=1571250877",
      },
      {
        name: "Axios",
        image:
          "https://blog.openreplay.com/images/integrating-axios-with-react-hooks/images/hero.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "GitLab",
        image:
          "https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFNi8oEe3Wd_duKIjeHPLebMrC-3fB5vlqr9fn8y2oOcX9_uEAP3j9mFQGA5u-5s2DEw&usqp=CAU",
      },
      {
        name: "Jira",
        image: "https://logowik.com/content/uploads/images/jira3124.jpg",
      },
    ],
  },
];
