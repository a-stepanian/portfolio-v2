import styled from "styled-components";
import { experience } from "../../data";
import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { Fragment, useEffect, useState } from "react";

const TableOfContents = () => {
  const [activeTab, setActiveTab] = useState<string>("claritymid");

  useEffect(() => {
    document.getElementById(activeTab)?.scrollIntoView({ behavior: "smooth" });
    experience.forEach(job => {
      if (job.id === activeTab) {
        document.querySelector(`.${job.id}-button`)?.classList?.add("active");
      } else {
        document.querySelector(`.${job.id}-button`)?.classList?.remove("active");
      }

      if (activeTab.includes(job?.companyKey ?? "_")) {
        document.querySelector(`.${job.companyKey}-h3`)?.classList?.add("active");
      } else {
        document.querySelector(`.${job.companyKey}-h3`)?.classList?.remove("active");
      }
    });
  }, [activeTab]);

  let used: string[] = [];

  return (
    <Wrapper>
      <h2>Work History</h2>
      {experience.map((job, index) => {
        let active = index === 0 ? "active" : "";
        return (
          <Fragment key={job.id}>
            {!used.includes(job?.company ?? "_") && used.push(job?.company ?? "") && (
              <h3 className={`${job.companyKey}-h3`}>{job.company}</h3>
            )}
            <button
              className={`scroll-button ${job.id}-button`}
              type="button"
              onClick={() => {
                setActiveTab(job.id);
              }}>
              {activeTab === job.id ? <VscDebugBreakpointData /> : <VscDebugBreakpointDataUnverified />}
              <span>{job.title}</span>
            </button>
          </Fragment>
        );
      })}
      <h2>Education</h2>
      <h3 className="psu-h3">Independent Studies</h3>
      <button className="scroll-button psu-ie-button" type="button" onClick={() => setActiveTab("psu-ie-button")}>
        <VscDebugBreakpointDataUnverified />
        <span>Courses</span>
      </button>
      <h3 className="psu-h3">Penn State University</h3>
      <button className="scroll-button psu-min-button" type="button" onClick={() => setActiveTab("psu-min-button")}>
        <VscDebugBreakpointDataUnverified />
        <span>
          B.S. Industrial Engineering
          <br />
          &gt; Six Sigma Minor
        </span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;
  @media (min-width: 768px) {
    filter: blur(100px);
    transform: scale(0);
    animation: appearSlowly 0.3s forwards linear 1.1s;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    z-index: 999;
    height: calc(100vh - 200px);
    width: 250px;
    h2 {
      font-size: 14px;
      color: #777;
      text-decoration: underline;
      &:last-of-type {
        margin-top: 12px;
      }
    }
    h3 {
      opacity: ${props => (props.theme.siteBg === "#29222a" ? "0.7" : "0.8")};
      font-size: 12px;
      margin-top: 8px;
      font-weight: bold;
      color: ${props => props.theme.primaryColor};
    }
    .scroll-button {
      font-weight: bold;
      color: ${props => props.theme.primaryColor};
      border: none;
      padding: 4px;
      background: transparent;
      display: flex;
      justify-content: start;
      align-items: center;
      opacity: ${props => (props.theme.siteBg === "#29222a" ? "0.7" : "0.8")};
      svg {
        font-size: 18px;
        width: 30px;
      }
      span {
        font-size: 14px;
        text-align: left;
        width: calc(100% - 30px);
      }
      &:hover:not(.active) {
        cursor: pointer;
        opacity: 0.9;
        text-decoration: underline;
      }
    }
    .active {
      color: ${props => (props.theme.siteBg === "#29222a" ? "" : "black")};
      text-shadow: ${props => (props.theme.siteBg === "#29222a" ? "0 0 4px #29ad9391" : "none")};
      opacity: 1;
    }
    @keyframes appearSlowly {
      0% {
        filter: blur(100px);
        transform: scale(0);
      }
      100% {
        filter: blur(0);
        transform: scale(1);
      }
    }
  }
`;

export default TableOfContents;
