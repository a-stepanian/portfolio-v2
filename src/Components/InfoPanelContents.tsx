import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { PiX, PiXThin } from "react-icons/pi";
import Projects from "./portfolio/Projects";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import { useEffect, useRef } from "react";
import { experience } from "../data";

const InfoPanelContents = () => {
  const { btnClicked, updateBtnClicked, colorScheme, activeTab } = useAppContext();

  // useEffect(() => {
  //   const container = document.querySelector("section.open-tall");
  //   const updateToc = () => {
  //     experience.forEach(job => {
  //       let jobElement = document?.getElementById(job.id);

  //       if (!jobElement) return;

  //       let elementTop = jobElement.getBoundingClientRect()?.top;

  //       if (elementTop < 200) {
  //         document.querySelector(`.${job.id}-button`)?.classList?.add("active");
  //         document.querySelector(`.${job.companyKey}-h3`)?.classList?.add("active");
  //       } else {
  //         document.querySelector(`.${job.id}-button`)?.classList?.remove("active");
  //         document.querySelector(`.${job.companyKey}-h3`)?.classList?.remove("active");
  //       }

  //       if (activeTab.includes("independent-button")) {
  //         document.querySelector(".independent-h3")?.classList?.add("active");
  //         document.querySelector(".independent-button")?.classList?.add("active");
  //         document.querySelector(".psu-h3")?.classList?.remove("active");
  //         document.querySelector(".psu-button")?.classList?.remove("active");
  //       } else if (activeTab.includes("psu-button")) {
  //         document.querySelector(".psu-h3")?.classList?.add("active");
  //         document.querySelector(".psu-button")?.classList?.add("active");
  //         document.querySelector(".independent-h3")?.classList?.remove("active");
  //         document.querySelector(".independent-button")?.classList?.remove("active");
  //       } else {
  //         document.querySelector(".psu-h3")?.classList?.remove("active");
  //         document.querySelector(".psu-button")?.classList?.remove("active");
  //         document.querySelector(".independent-h3")?.classList?.remove("active");
  //         document.querySelector(".independent-button")?.classList?.remove("active");
  //       }
  //     });
  //   };
  //   container?.addEventListener("scroll", updateToc);
  //   return () => container?.removeEventListener("scroll", updateToc);
  // }, []);

  return (
    <Wrapper className={`open-tall ${colorScheme.blackColor === "#29222a" ? "glow" : ""}`}>
      <div className="contents-button-wrapper">
        <button type="button" onClick={() => updateBtnClicked("")} aria-label="Close" title="Close">
          <PiX className="close-icon" />
        </button>
      </div>
      {btnClicked === "portfolio" && <Projects />}
      {btnClicked === "contact" && <Contact />}
      {btnClicked === "background" && <Experience />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${props => props.theme.infoPanelContentsBackground};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: ${props => props.theme.primaryColor} ${props => props.theme.blackColor};
  .contents-button-wrapper {
    display: none;
  }
  @media (min-width: 768px) {
    position: absolute;
    bottom: calc((100vh - 200px) / 2);
    height: auto;
    width: auto;
    left: 300px;
    right: 20px;
    top: unset;
    height: 0;
    border-width: ${props => props.theme.lineWidth};
    border-style: ${props => props.theme.lineStyle};
    border-color: ${props => props.theme.primaryColor};
    border-radius: ${props => props.theme.panelRadius};
    .title {
      color: white;
      background-color: black;
      font-size: 8rem;
    }
    .contents-button-wrapper {
      display: block;
      position: sticky;
      top: 0;
      display: flex;
      justify-content: flex-end;
      button {
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        border: none;
        border-radius: ${props => props.theme.infoPanelContentsCloseRadius};
        transition: 0.1s;
        background-color: ${props => (props.theme.siteBg === "#29222a" ? "#29222a" : "#746177")};
        z-index: 1;
        margin-top: 16px;
        margin-right: 16px;
        .close-icon {
          font-size: 1.4rem;
          color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#eee")};
          transition: 0.1s;
        }
        &:hover {
          background-color: #29222a;
          cursor: pointer;
          .close-icon {
            font-size: 1.4rem;
            filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
          }
        }
      }
    }
  }
`;

export default InfoPanelContents;
