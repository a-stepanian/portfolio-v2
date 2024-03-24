import styled from "styled-components";
import { experience } from "../../data";
import OnlineSchool from "./OnlineSchool";
import Job from "./Job";
import School from "./School";

const Experience = () => {
  return (
    <Wrapper>
      <section className="work-history-container">
        <div className="experience-wrapper">
          {experience.map((job, index) => {
            return <Job key={index} job={job} />;
          })}
          <OnlineSchool />
          <School />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  .circuit-wrapper {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    svg {
      color: ${props => props.theme.blackColor};
      font-size: 100vw;
      opacity: 0.3;
      filter: blur(5px);
      margin: -4vw -1vw;
      transition: 0.5s;
    }
  }
  .work-history-container {
    max-width: 100%;
    display: flex;

    .experience-wrapper {
      width: 100%;
    }
  }

  @media (min-width: 480px) {
    .circuit-wrapper {
      svg {
        opacity: 0.2;
      }
    }
  }
  @media (min-width: 768px) {
    .circuit-wrapper {
      top: calc(-2vw);
      left: calc(-2vw);
      height: calc(100% + 2vw);
      width: calc(100% + 2vw);
      svg {
        color: ${props => props.theme.blackColor};
        font-size: calc(100vw - 220px);
        opacity: 0.15;
        filter: blur(2px);
      }
    }
    .work-history-container {
      flex-direction: row-reverse;
      .experience-wrapper {
        width: calc(100vw - 20rem);
      }
    }
  }

  @media (min-width: 992px) {
    .work-history-container {
      padding: 0 5%;
      justify-content: center;
      .experience-wrapper {
        max-width: 40rem;
      }
    }
  }
`;

export default Experience;
