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
    display: flex;
    .experience-wrapper {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .work-history-container {
      transform: translateY(-54px);
    }
  }
`;

export default Experience;
