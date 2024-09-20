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
  .work-history-container {
    max-width: 100%;
    display: flex;
    .experience-wrapper {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .work-history-container {
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

  @media (min-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`;

export default Experience;
