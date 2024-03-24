import styled from "styled-components";

const OnlineSchool = () => {
  const webDevSkills = [
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

  const gitSkills = [
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

  const reactSkills = [
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

  const fcc1Skills = [
    "HTML5",
    "Basic CSS",
    "Applied Visual Design",
    "Applied Accessibility",
    "Responsive Web Design Principles",
    "CSS Flexbox & Grid"
  ];

  const fcc2Skills = [
    "Basic fundamental programing concepts with Javascript",
    "ES6",
    "RegEx",
    "Debugging",
    "Basic Data Structures",
    "Basic & Intermediate Algorithm Scripting",
    "OOP & Functional Programming"
  ];

  return (
    <Wrapper>
      <header className="school-header">
        <div className="title-company">
          <h3>Independent Courses</h3>
        </div>
      </header>
      <div className="courses">
        <p className="course">React Tutorial and Projects Course</p>
        <div className="certificate-wrapper">
          <img src="/portfolio-v2/images/react.jpg" alt="React Course Certificate of Completion" loading="lazy" />
        </div>
        <ul>
          {reactSkills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <div className="line"></div>

        <p className="course">The Git and Github Bootcamp</p>
        <div className="certificate-wrapper">
          <img
            src="/portfolio-v2/images/gitbootcamplarge.png"
            alt="Web Developer Bootcamp Certificate of Completion"
            loading="lazy"
          />
        </div>
        <ul>
          {gitSkills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <div className="line"></div>

        <p className="course">The Web Developer Bootcamp</p>
        <div className="certificate-wrapper">
          <img
            src="/portfolio-v2/images/webdevcertificatelarge.png"
            alt="Web Developer Bootcamp Certificate of Completion"
            loading="lazy"
          />
        </div>
        <ul>
          {webDevSkills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <div className="line"></div>

        <p className="course">JavaScript Algorithms and Data Structures</p>
        <div className="certificate-wrapper">
          <img src="/portfolio-v2/images/fcc2.png" alt="Free code camp certificate" loading="lazy" />
        </div>
        <ul>
          {fcc2Skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <div className="line"></div>

        <p className="course">Responsive Web Design</p>
        <div className="certificate-wrapper">
          <img src="/portfolio-v2/images/fcc1.png" alt="Free code camp certificate" loading="lazy" />
        </div>
        <ul>
          {fcc1Skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: ${props => props.theme.primaryColor};
  .school-header {
    position: sticky;
    top: 10px;
    height: 6.6rem;
    z-index: 1;
    background: ${props => props.theme.blackColor};
    padding-right: 7.5rem;
    padding-left: 0.3rem;
    .title-company {
      padding: 0.5rem 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    h3 {
      margin-top: 0.5rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }
  .courses {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .course {
    width: 100%;
    text-align: center;
    padding: 7.5rem 0.5rem 2.5rem;
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
  .certificate-wrapper {
    margin: 0 5%;
    width: 90%;
    max-width: 400px;
    box-shadow: 3px 3px 8px black;
    img {
      width: 100%;
    }
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    li {
      margin-right: 2rem;
      font-size: 0.8rem;
    }
  }

  .line {
    width: 90%;
  }

  /* ------------- */
  /* MEDIA QUERIES */
  /* ------------- */

  @media (min-width: 480px) {
    .school-header {
      h3 {
        margin-top: 0.4rem;
        font-size: 1.9rem;
        line-height: 1.8rem;
      }
    }
    ul {
      .duty {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border-right: none;
    .school-header {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
      display: flex;
      justify-content: center;
      h3 {
        font-size: 2.4rem;
        line-height: 2rem;
      }
    }
  }

  @media (min-width: 992px) {
    .school-header {
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default OnlineSchool;
