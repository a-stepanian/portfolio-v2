import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { PiXThin } from "react-icons/pi";
import { useRef } from "react";
import Projects from "./portfolio/Projects";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";

const InfoPanelContents = () => {
  const { btnClicked, updateBtnClicked, colorScheme } = useAppContext();

  const scrollTarget = useRef<HTMLDivElement>(null);

  if (btnClicked === "") {
    scrollTarget?.current?.scrollIntoView();
  }

  return (
    <Wrapper className={`open-tall ${colorScheme.blackColor === "#29222a" ? "glow" : ""}`}>
      <div ref={scrollTarget}></div>
      <div className="contents-button-wrapper">
        <button type="button" onClick={() => updateBtnClicked("")} aria-label="Close" title="Close">
          <PiXThin className="close-icon" />
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
  .contents-button-wrapper {
    display: none;
  }
  p {
    color: ${props => props.theme.primaryColor};
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
        background-color: #29222a;
        z-index: 1;
        margin-top: 16px;
        margin-right: 16px;
        .close-icon {
          font-size: 1.4rem;
          color: ${props => props.theme.primaryColor};
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
