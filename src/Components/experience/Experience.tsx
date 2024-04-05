import styled from "styled-components";
import { experience } from "../../data";
import OnlineSchool from "./OnlineSchool";
import Job from "./Job";
import School from "./School";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const Experience = () => {
  return (
    <Wrapper>
      <aside className="table-of-contents-wrapper">
        <div className="table-of-contents">
          <h2>Work History</h2>
          <h3 className="active">Clarity Ventures</h3>

          <h4 className="active">
            <VscDebugBreakpointDataUnverified />
            Front End Developer
          </h4>
          <h3>United States Gypsum (USG)</h3>
          <h4>
            <VscDebugBreakpointDataUnverified />
            Engineering And Mill Manager
          </h4>
          <h4>
            <VscDebugBreakpointDataUnverified />
            Engineering And Operations Manager
          </h4>
          <h4>
            <VscDebugBreakpointDataUnverified />
            Reliability And Project Engineer
          </h4>
          <h2>Education</h2>
          <h3>Penn State University</h3>
          <h4>
            <VscDebugBreakpointDataUnverified />
            B.S. Industrial Engineering
          </h4>
          <h4>
            <VscDebugBreakpointDataUnverified />
            Six Sigma Minor
          </h4>
        </div>
      </aside>
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
  .table-of-contents-wrapper {
    display: none;
  }
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

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    .table-of-contents-wrapper {
      position: relative;
      display: block;
      .table-of-contents {
        padding-left: 12px;
        position: sticky;
        height: 300px;
        top: calc(50% - 150px);
        display: flex;
        flex-direction: column;
        h3,
        h4 {
          color: ${props => props.theme.primaryColor};
          opacity: 0.5;
        }
        h2 {
          font-size: 14px;
          &:last-of-type {
            margin-top: 12px;
          }
          opacity: 0.5;
        }
        h3 {
          font-size: 14px;
          &:nth-of-type(2) {
            margin-top: 12px;
          }
        }
        h4 {
          display: flex;
          align-items: center;
          font-size: 14px;
          svg {
            font-size: 24px;
          }
        }
      }
    }
    .table-of-contents-wrapper .table-of-contents .active {
      opacity: 1;
    }
  }
`;

export default Experience;
