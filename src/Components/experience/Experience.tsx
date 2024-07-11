import styled from "styled-components";
import { experience } from "../../data";
import OnlineSchool from "./OnlineSchool";
import Job from "./Job";
import School from "./School";
import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { useEffect, useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("claritymid");

  useEffect(() => {
    document.getElementById(activeTab)?.scrollIntoView({ behavior: "smooth" });
    experience.forEach(job => {
      if (job.id === activeTab) {
        document.querySelector(`.${job.id}-h3`)?.classList?.add("active");
        document.querySelector(`.${job.id}-button`)?.classList?.add("active");
      } else {
        document.querySelector(`.${job.id}-h3`)?.classList?.remove("active");
        document.querySelector(`.${job.id}-button`)?.classList?.remove("active");
      }
    });
  }, [activeTab]);

  let used: string[] = [];

  return (
    <Wrapper>
      <aside className="table-of-contents-wrapper">
        <div className="table-of-contents">
          <h2>Work History</h2>
          {experience.map((job, index) => {
            let active = index === 0 ? "active" : "";
            if (!used.includes(job?.company ?? "")) used.push(job?.company ?? "");
            return (
              <>
                {!used.includes(job?.company ?? "_") && <h3 className={`${job.id}-h3 ${active}`}>{job.company}</h3>}
                <button
                  className={`scroll-button ${job.id}-button ${active}`}
                  type="button"
                  onClick={() => setActiveTab(job.id)}>
                  {job.id === activeTab ? <VscDebugBreakpointData /> : <VscDebugBreakpointDataUnverified />}
                  {job.title}
                </button>
              </>
            );
          })}
          <h2>Education</h2>
          <button className="scroll-button" type="button" onClick={() => console.log("clicked")}>
            <h3 onClick={() => console.log("clicked")}>Penn State University</h3>
            <VscDebugBreakpointDataUnverified />
            B.S. Industrial Engineering
          </button>
          <button className="scroll-button" type="button" onClick={() => console.log("clicked")}>
            <h3 onClick={() => console.log("clicked")}>Penn State University</h3>
            <VscDebugBreakpointDataUnverified />
            Six Sigma Minor
          </button>
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
    /* }

  @media (min-width: 1200px) { */
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
        h4,
        button {
          font-weight: bold;
          color: ${props => props.theme.primaryColor};
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
        }
        h4 {
          display: flex;
          align-items: center;
          font-size: 14px;
          svg {
            font-size: 24px;
          }
        }
        .scroll-button {
          border: none;
          padding: 1rem;
          background: transparent;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .table-of-contents-wrapper .table-of-contents .active {
      text-shadow: 0 0 8px #92eedc75;
    }
  }
`;

export default Experience;
