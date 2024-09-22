import { TActiveTab } from "./AppContext";

export type TProject = {
  id: string;
  title: string;
  description: string;
  builtWith: string[];
  url: string;
  videoUrl?: string;
  thumbnail: string;
  repo: string;
  repo2?: string;
};

export type TExperience = {
  id: TActiveTab;
  company?: string;
  companyKey?: string;
  location?: string;
  stateImg?: string;
  companyUrl?: string;
  logo?: string;
  title?: string;
  date?: string;
  description?: string[];
};

const data: TProject[] = [
  {
    id: "7",
    title: "Apply Yourself",
    description:
      "Full stack MERN app that helps you to manage the job application status and gain insights to your application process.",
    builtWith: ["MongoDB", "Express.js", "React", "Node.js", "styled-components", "charts.js", "bcrypt"],
    url: "https://client-apply-yourself.netlify.app/",
    videoUrl: "/portfolio-v2/images/applyyourselfsm.mp4",
    thumbnail: "apply.png",
    repo: "https://github.com/a-stepanian/apply-yourself-client",
    repo2: "https://github.com/a-stepanian/apply-yourself-server"
  },
  {
    id: "6",
    title: "MenuWeb",
    description: "A CMS that allows a user to create basic websites.",
    builtWith: ["React", "React-Router", "React-Bootstrap"],
    url: "https://menu-site-builder.netlify.app/",
    videoUrl: "/portfolio-v2/images/menuwebsm.mp4",
    thumbnail: "apply.png",
    repo: "https://github.com/a-stepanian/restaurant-site-builder"
  },
  // {
  //   id: "5",
  //   title: "BookWorm",
  //   description: "Full stack CRUD application to join a club, add books, and leave reviews.",
  //   builtWith: ["Javascript", "EJS Templating", "css", "MongoDB", "Express", "Node", "Open Library API"],
  //   url: "https://evening-shore-85582.herokuapp.com/",
  //   thumbnail: "bookshelf.png",
  //   repo: "https://github.com/a-stepanian/BookShelf"
  // },
  {
    id: "1",
    title: "BeerSource",
    description: "Find local breweries or brew your own with recipes",
    builtWith: ["React", "React-Router", "Javascript", "css", "Open Brewery API", "Mapbox API", "Unsplash API"],
    url: "https://beersource.netlify.app/",
    thumbnail: "beersource.png",
    repo: "https://github.com/a-stepanian/beersource"
  },
  {
    id: "2",
    title: "All The Views",
    description: "Discover the hidden gems of the PNW",
    builtWith: ["React", "React-Router", "styled-components", "html", "css"],
    url: "https://all-the-views.netlify.app/",
    thumbnail: "alltheviews.png",
    repo: "https://github.com/a-stepanian/all-the-views"
  },
  {
    id: "3",
    title: "Wallpaper Finder",
    description: "Search for high quality wallpapers for your device",
    builtWith: ["React", "TypeScript", "css", "Unsplash API"],
    url: "https://minimal-wallpaper-finder.netlify.app/",
    thumbnail: "wallpaperfinder.png",
    repo: "https://github.com/a-stepanian/wallpaper-finder"
  }
  // {
  //   id: "4",
  //   title: "just the weather",
  //   description: "Just the weather, none of the ads.  Disclaimer: Forecast is only as accurate as the API data.",
  //   builtWith: ["React", "TypeScript", "styled-components", "OpenWeatherMapAPI", "WeatherAPI"],
  //   url: "https://just-the-weather.netlify.app/",
  //   thumbnail: "justtheweather.png",
  //   repo: "https://github.com/a-stepanian/just-weather"
  // }
];

export default data;

export const experience: TExperience[] = [
  {
    id: "claritymid",
    company: "Clarity Ventures, Inc.",
    companyKey: "clarity",
    location: "Austin, TX (remote)",
    stateImg: "tx.png",
    companyUrl: "https://www.clarity-ventures.com/",
    logo: "cv.png",
    title: "Front-End Developer",
    date: "2024-present",
    description: [
      "Work directly with the CEO to design and develop a custom CMS from scratch for internal and client use.",
      "Integrate AI features into the CMS to automate content creation and enhance results with user feedback.",
      "Build back-end endpoints as needed to support various front-end features of the CMS."
    ]
  },
  {
    id: "clarityjr",
    company: "Clarity Ventures, Inc.",
    companyKey: "clarity",
    location: "Austin, TX (remote)",
    stateImg: "tx.png",
    companyUrl: "https://www.clarity-ventures.com/",
    logo: "cv.png",
    title: "Jr. Front-End Developer",
    date: "2022-2024",

    description: [
      "Led the front-end development process for multiple concurrent client projects from discovery to production.",
      "Selected by the CEO to be the sole developer for the company's marketing website, working directly on high-visibility projects to improve our marketing employee efficiency and improve SEO / performance.",
      "Provided support on legacy codebase projects by rapidly ramping up to fix bugs and build new features."
    ]
  },
  {
    id: "usgrainier",
    company: "United States Gypsum",
    companyKey: "usg",
    location: "Rainier, OR",
    stateImg: "or.png",
    companyUrl: "https://www.usg.com/",
    logo: "usglogobw.bmp",
    title: "Engineering and Mill Manager",
    date: "2020 - 2021",
    description: [
      "Manage the safety, development, productivity and engagement of 36 employees comprised of PLC Programmers, electricians, engineers, and other plant staff.",
      "Define and implement the long-term capital strategy of the plant and execute over $4MM in project work.",
      "Evaluate improvement efforts to improve profitability of the facility and grow the business."
    ]
  },
  {
    id: "usgchamblee",
    company: "United States Gypsum",
    companyKey: "usg",
    location: "Chamblee, GA",
    stateImg: "ga.png",
    companyUrl: "https://www.usg.com/",
    logo: "usglogobw.bmp",
    title: "Engineering and Operations Manager",
    date: "2017 - 2020",
    description: [
      "Managed the safety, development, productivity and engagement of 27 employees.",
      "Ran trials and reformulated Dry Joint compound products to save over $300,000 annually.",
      "Increased Dry Joint efficiency 5% YTD in 2020 over 2019 by keeping employees focused and engaged.",
      "Strategically reduced annual maintenance material spending by 41% ($174,000) in 2018.",
      "Reduced energy consumption by 35%, saving the facility $90,000 annually.",
      "Installed new automation equipment to improve safety and reduce Sherwin Williams product delay by 24%."
    ]
  },
  {
    id: "usgbaltimore",
    company: "United States Gypsum",
    companyKey: "usg",
    location: "Baltimore, MD",
    stateImg: "md.png",
    companyUrl: "https://www.usg.com/",
    logo: "usglogobw.bmp",
    title: "Reliability and Project Engineer",
    date: "2013 - 2017",
    description: [
      "Lead the implementation of Lean Management in the Joint Treatment and Loading Departments.",
      "Facilitated production efficiency improvement projects and trained associates to lead their own projects.",
      "Lead numerous reliability and process improvement projects throughout the plant.",
      "Conducted training and mentored employees on problem solving techniques.",
      "Oversaw the equipment reliability and maintenance program for a multi-departmental production facility.",
      "Planned and executed multiple concurrent capital investment projects on time and under budget."
    ]
  },
  {
    id: "manitowocpa",
    company: "Manitowoc",
    companyKey: "manitowoc",
    location: "Shady Grove, PA",
    stateImg: "md.png",
    companyUrl: "https://www.manitowoc.com/",
    logo: "manitowoc.bmp",
    title: "Manufacturing Engineer Intern",
    date: "2012",
    description: [
      "Combined multiple product lines into a single production line to increase throughput.",
      "Implement 5S and other organizational techniques to improve workplace efficiency.",
      "Trial new technology to speed up a key manufacturing bottleneck."
    ]
  }
];

export const education = [
  {
    id: "psu",
    company: "The Pennsylvania State University",
    schoolUrl: "https://www.psu.edu/",
    location: "State College, PA",
    date: "2008 - 2012",
    major: "B.S. Industrial Engineering",
    minor: "Six Sigma Minor",
    course: "",
    instructor: "",
    logo: "psulogo.bmp",
    relevantCourses: [
      {
        title: "CMPSC 200: Programming for Engineers with MATLAB",
        description:
          "This course introduces basic programming concepts including algorithm development, simple data types, number representation, control structures, functions, plotting, and basic numerical analysis techniques, all in the context of science and engineering. The course enables students to develop computer programs in a scientific programming language to solve simple engineering and science problems. The basic numerical analysis techniques covered in the course include matrix operations, systems of equations, solving equations, roots, curve fitting, interpolation, numerical integration, and numerical solutions of ordinary differential equations. Students analyze engineering and science problems, develop algorithms to solve those problems, implement their algorithms in an appropriate programming language, and produce informative output in both numerical and graphical form. The general programming concepts learned in the course are commonly found in most programming languages. The problem-solving skills learned in the course can then be utilized in upper-level engineering and science courses. This course includes an exploration of the conceptual and syntactical background needed for the successful completion of practical programming assignments. The course also includes an emphasis on the actual design and implementation of computer programs necessary for solving computational problems"
      },
      {
        title: "IE 330 Engineering Analytics",
        description:
          "The study and application of Computing, Information Technology and Analytics to Industrial Engineering. IE 330 Engineering Analytics (3) Engineering Analytics is a required course for all baccalaureate students in the Industrial Engineering major. It provides students with a quantitative background in descriptive analytics which deals with data mining, predictive analytics which deals with forecasting, and the use of Big Data in analysis. Examples of analytics will be presented in various industries including manufacturing, healthcare, and distribution. The students will learn to work in settings to make data-informed decisions from large data sets. Students taking this course should be familiar with differential and integral calculus, statistics, and basic computing."
      },
      {
        title: "IE 408 Cognitive Work Design",
        description:
          "Design and evaluation of cognitive work, including the human/computer interface, visual displays, software design, and automated system monitoring, with emphasis on human performance. I E 408 Cognitive Work Design (3)Cognitive Work Designis a senior level course offered in the Department of Industrial and Manufacturing Engineering. It is one of two courses which follow I E 327, Introduction to Work Design. This course focuses on the cognitive part of human factors and work design. It will be offered in fall and spring semesters. This course will enable students to design, implement, and evaluate human-computer interfaces according to principles outlined in foundational human-computer interaction readings. Students will be engaged in the active learning of design, programming, and usability concepts by way of building interfaces on the personal computer.Students taking this course should be familiar with computer programming and introduction to work design."
      }
    ]
  },
  {
    id: "washington",
    company: "udemy",
    schoolUrl: "https://www.udemy.com/",
    location: "Longview, WA",
    date: "2021 - 2022",
    major: "The Web Developer Bootcamp 2021/2022",
    minor: "",
    course: "The Web Developer Bootcamp 2021/2022",
    instructor: "Colt Steele",
    logo: "udemy.bmp",
    skills: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "Responsive Design",
      "JavaScript (all 2022 modern syntax, ES6, ES2018, etc.)",
      "Asynchronous JavaScript - Promises, async/await, etc.",
      "AJAX and single page apps",
      "Bootstrap 4 and 5 (alpha)",
      "SemanticUI",
      "Bulma CSS Framework",
      "DOM Manipulation",
      "Unix(Command Line) Commands",
      "NodeJS",
      "NPM",
      "ExpressJS",
      "Templating",
      "REST",
      "SQL vs. NoSQL databases",
      "MongoDB",
      "Database Associations",
      "Schema Design",
      "Mongoose",
      "Authentication From Scratch",
      "Cookies & Sessions",
      "Authorization",
      "Common Security Issues - SQL Injection, XSS, etc.",
      "Developer Best Practices",
      "Deploying Apps",
      "Cloud Databases",
      "Image Upload and Storage",
      "Maps and Geocoding"
    ]
  },
  {
    id: "washington",
    company: "udemy",
    schoolUrl: "https://www.udemy.com/",

    location: "Longview, WA",
    date: "2022",
    major: "The Git & Github Bootcamp",
    minor: "",
    course: "The Git & Github Bootcamp",
    instructor: "Colt Steele",
    logo: "udemy.bmp",
    skills: [
      "Understand how Git works behind the scenes",
      "Explain the difference Git objects: trees, blobs, commits, and annotated tags",
      "Master the essential Git workflow: adding & committing",
      "Work with Git branches",
      "Perform Git merges and resolve merge conflicts",
      "Use Git diff to reveal changes over time",
      "Master Git stashing",
      "Undo changes using git restore, git revert, and git reset",
      "Work with local and remote repositories",
      'Master collaboration workflows: pull requests, "fork & clone", etc.',
      "Squash, clean up, and rewrite history using interactive rebase",
      'Retrieve "lost" work using git reflogs',
      "Write custom and powerful Git aliases",
      "Mark releases and versions using Git tags",
      "Host static websites using Github Pages",
      "Create markdown READMEs",
      "Share code and snippets using Github Gists"
    ]
  },
  {
    id: "washington",
    company: "udemy",
    schoolUrl: "https://www.udemy.com/",

    location: "Longview, WA",
    date: "2022 - present",
    major: "React Tutorial and Projects Course (2022)",
    minor: "",
    course: "React Tutorial and Projects Course (2022)",
    instructor: "John Smigla",
    logo: "udemy.bmp"
  }
];

export const webDevSkills = [
  "HTML5",
  "CSS3",
  "Responsive Design",
  "JavaScript (all 2022 modern syntax, ES6, ES2018, etc.)",
  "Asynchronous JavaScript - Promises, async/await, etc.",
  "AJAX and single page apps",
  "Bootstrap 4 and 5",
  "DOM Manipulation",
  "Unix(Command Line) Commands",
  "NodeJS",
  "NPM",
  "ExpressJS",
  "Templating",
  "REST",
  "SQL vs. NoSQL databases",
  "MongoDB",
  "Database Associations",
  "Schema Design",
  "Mongoose",
  "Authentication From Scratch",
  "Cookies & Sessions",
  "Authorization",
  "Common Security Issues - SQL Injection, XSS, etc.",
  "Developer Best Practices",
  "Deploying Apps",
  "Cloud Databases",
  "Image Upload and Storage",
  "Maps and Geocoding"
];

export const gitSkills = [
  "Understand how Git works behind the scenes",
  "Explain the difference Git objects: trees, blobs, commits, and annotated tags",
  "Master the essential Git workflow: adding & committing",
  "Work with Git branches",
  "Perform Git merges and resolve merge conflicts",
  "Use Git diff to reveal changes over time",
  "Master Git stashing",
  "Undo changes using git restore, git revert, and git reset",
  "Work with local and remote repositories",
  'Master collaboration workflows: pull requests, "fork & clone", etc.',
  "Squash, clean up, and rewrite history using interactive rebase",
  'Retrieve "lost" work using git reflogs',
  "Write custom and powerful Git aliases",
  "Mark releases and versions using Git tags"
];

export const reactSkills = [
  "JSX",
  "Props",
  "Hooks - useState, useEffect, useRef, useReducer, useContext, etc...",
  "Creating custom hooks",
  "Conditional Rendering",
  "React Router 6",
  "useNavigate",
  "Pagination on server and client side",
  "styled-components"
];

export const fcc1Skills = [
  "HTML5",
  "Basic CSS",
  "Applied Visual Design",
  "Applied Accessibility",
  "Responsive Web Design Principles",
  "CSS Flexbox & Grid"
];

export const fcc2Skills = [
  "Basic fundamental programing concepts with Javascript",
  "ES6",
  "RegEx",
  "Debugging",
  "Basic Data Structures",
  "Basic & Intermediate Algorithm Scripting",
  "OOP & Functional Programming"
];
