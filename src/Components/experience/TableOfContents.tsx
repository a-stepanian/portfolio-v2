import styled from "styled-components";
import { experience } from "../../data";
import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { Fragment, useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";

const TableOfContents = () => {
  const { activeTab, updateActiveTab } = useAppContext();

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

      if (activeTab.includes("independent-button")) {
        document.querySelector(".independent-h3")?.classList?.add("active");
        document.querySelector(".independent-button")?.classList?.add("active");
        document.querySelector(".psu-h3")?.classList?.remove("active");
        document.querySelector(".psu-button")?.classList?.remove("active");
      } else if (activeTab.includes("psu-button")) {
        document.querySelector(".psu-h3")?.classList?.add("active");
        document.querySelector(".psu-button")?.classList?.add("active");
        document.querySelector(".independent-h3")?.classList?.remove("active");
        document.querySelector(".independent-button")?.classList?.remove("active");
      } else {
        document.querySelector(".psu-h3")?.classList?.remove("active");
        document.querySelector(".psu-button")?.classList?.remove("active");
        document.querySelector(".independent-h3")?.classList?.remove("active");
        document.querySelector(".independent-button")?.classList?.remove("active");
      }
    });
  }, [activeTab]);

  let used: string[] = [];

  return (
    <Wrapper>
      <div className="scrolling-window">
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
                  updateActiveTab(job.id);
                }}>
                {activeTab === job.id ? <VscDebugBreakpointData /> : <VscDebugBreakpointDataUnverified />}
                <span>{job.title}</span>
              </button>
            </Fragment>
          );
        })}
        <h2>Education</h2>
        <h3 className="independent-h3">Independent Studies</h3>
        <button
          className="scroll-button independent-button"
          type="button"
          onClick={() => updateActiveTab("independent-button")}>
          {activeTab === "independent-button" ? <VscDebugBreakpointData /> : <VscDebugBreakpointDataUnverified />}
          <span>Courses</span>
        </button>
        <h3 className="psu-h3">Penn State University</h3>
        <button className="scroll-button psu-button" type="button" onClick={() => updateActiveTab("psu-button")}>
          {activeTab === "psu-button" ? <VscDebugBreakpointData /> : <VscDebugBreakpointDataUnverified />}
          <span>
            B.S. Industrial Engineering
            <br />
            &gt; Six Sigma Minor
          </span>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;
  @media (min-width: 768px) {
    transform: scale(0);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 999;
    height: calc(100vh - 200px);
    width: 304px;
    overflow: hidden;
    padding: 4px 0;
    animation: scaleIn 0.3s forwards linear 1.2s;
    opacity: 0.5;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
    .scrolling-window {
      padding: 16px;
      overflow-y: auto;
      scrollbar-color: ${props => props.theme.primaryColor} ${props => props.theme.blackColor};
    }
    @keyframes scaleIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    /* &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.primaryColor};
      box-shadow: 0 0 5px ${props => props.theme.primaryColor};
      border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
      width: 8px;
      background-color: transparent;
      border-radius: 4px;
    } */
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
  }
`;

export default TableOfContents;
