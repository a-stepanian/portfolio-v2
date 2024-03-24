import styled from "styled-components";

const School = () => {
  // const school = [
  //   {
  //     id: "pennsylvania",
  //     company: "The Pennsylvania State University",
  //     schoolUrl: "https://www.psu.edu/",
  //     location: "State College, PA",
  //     date: "2008 - 2012",
  //     major: "B.S. Industrial Engineering",
  //     minor: "Six Sigma Minor",
  //     course: "",
  //     instructor: "",
  //     logo: "psulogo.bmp",
  //     relevantCourses: [
  //       {
  //         title: "CMPSC 200: Programming for Engineers with MATLAB",
  //         description:
  //           "This course introduces basic programming concepts including algorithm development, simple data types, number representation, control structures, functions, plotting, and basic numerical analysis techniques, all in the context of science and engineering. The course enables students to develop computer programs in a scientific programming language to solve simple engineering and science problems. The basic numerical analysis techniques covered in the course include matrix operations, systems of equations, solving equations, roots, curve fitting, interpolation, numerical integration, and numerical solutions of ordinary differential equations. Students analyze engineering and science problems, develop algorithms to solve those problems, implement their algorithms in an appropriate programming language, and produce informative output in both numerical and graphical form. The general programming concepts learned in the course are commonly found in most programming languages. The problem-solving skills learned in the course can then be utilized in upper-level engineering and science courses. This course includes an exploration of the conceptual and syntactical background needed for the successful completion of practical programming assignments. The course also includes an emphasis on the actual design and implementation of computer programs necessary for solving computational problems",
  //       },
  //       {
  //         title: "IE 330 Engineering Analytics",
  //         description:
  //           "The study and application of Computing, Information Technology and Analytics to Industrial Engineering. IE 330 Engineering Analytics (3) Engineering Analytics is a required course for all baccalaureate students in the Industrial Engineering major. It provides students with a quantitative background in descriptive analytics which deals with data mining, predictive analytics which deals with forecasting, and the use of Big Data in analysis. Examples of analytics will be presented in various industries including manufacturing, healthcare, and distribution. The students will learn to work in settings to make data-informed decisions from large data sets. Students taking this course should be familiar with differential and integral calculus, statistics, and basic computing.",
  //       },
  //       {
  //         title: "IE 408 Cognitive Work Design",
  //         description:
  //           "Design and evaluation of cognitive work, including the human/computer interface, visual displays, software design, and automated system monitoring, with emphasis on human performance. I E 408 Cognitive Work Design (3)Cognitive Work Designis a senior level course offered in the Department of Industrial and Manufacturing Engineering. It is one of two courses which follow I E 327, Introduction to Work Design. This course focuses on the cognitive part of human factors and work design. It will be offered in fall and spring semesters. This course will enable students to design, implement, and evaluate human-computer interfaces according to principles outlined in foundational human-computer interaction readings. Students will be engaged in the active learning of design, programming, and usability concepts by way of building interfaces on the personal computer.Students taking this course should be familiar with computer programming and introduction to work design.",
  //       },
  //     ],
  //   },
  // ];

  return (
    <Wrapper>
      <header className="school-header">
        <div className="title-company">
          <h3>The Pennsylvania State University</h3>
        </div>
      </header>
      <p className="major">B.S. Industrial Engineering</p>
      <div className="line"></div>
      <p className="minor">Six Sigma Minor</p>
      <div className="psu-seal">
        <img src="psucrestcutout.png" alt="The Pennsylvania State University Seal" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: ${props => props.theme.blackColor};
  background-color: var(--white-opaque);
  display: flex;
  flex-direction: column;
  align-items: center;
  .school-header {
    position: sticky;
    top: 6.95rem;
    width: 100%;
    height: 6.6rem;
    z-index: 1;
    background: ${props => props.theme.blackColor};
    padding-right: 6.5rem;
    padding-left: 0.3rem;
    border-bottom: var(--small-border);
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

  .major,
  .minor {
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
  }
  .line {
    width: 5rem;
    border-bottom: var(--small-border);
    margin-bottom: 1rem;
  }

  .major {
    padding: 8rem 0 1rem;
  }

  .psu-seal {
    padding: 5rem 5%;
    width: 70%;
    img {
      width: 100%;
    }
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      padding-bottom: 3rem;
      font-size: 0.8rem;
    }
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
    .psu-seal {
      width: 60%;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border: var(--small-border);
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

    ul {
      .duty {
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 992px) {
    border: var(--small-border);
    .school-header {
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default School;
