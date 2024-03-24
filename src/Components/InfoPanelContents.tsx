import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { PiXThin } from "react-icons/pi";
import { useRef } from "react";
import Projects from "./portfolio/Projects";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";

interface IInfoPanelContentsProps {
  text: string;
}

const InfoPanelContents = (props: IInfoPanelContentsProps) => {
  const { text } = props;

  const { btnClicked, updateBtnClicked } = useAppContext();

  const scrollTarget = useRef<HTMLDivElement>(null);

  if (text === btnClicked) {
    scrollTarget?.current?.scrollIntoView();
  }

  const customBackground: string =
    text === "contact"
      ? "url('/portfolio-v2/images/red-bg-lg.jpg') center center / cover"
      : text === "background"
      ? "url('/portfolio-v2/images/portfolio-blue-bg-lg.png') center center / cover"
      : "";

  return (
    <Wrapper
      className={`info-panel-contents info-panel-contents-${text} open-tall`}
      style={{ background: customBackground }}>
      <div ref={scrollTarget}></div>
      <div className="button-wrapper">
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
  background: url("/portfolio-v2/images/portfolio-bg-lg.png") center center / cover;
  box-shadow: inset 0 0 20px ${props => props.theme.primaryColor};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
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
  }
  .button-wrapper {
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
      border-radius: 3px;
      transition: 0.1s;
      .close-icon {
        font-size: 1.4rem;
        color: ${props => props.theme.primaryColor};
        transition: 0.1s;
      }
      &:hover {
        cursor: pointer;
        .close-icon {
          font-size: 2rem;
          color: ${props => props.theme.primaryColor};
          filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
        }
      }
    }
  }
  p {
    color: ${props => props.theme.primaryColor};
  }
  @media (min-width: 768px) {
    position: fixed;
    bottom: calc(50vh);
    left: 250px;
    right: 20px;
    top: unset;
    height: 0;
    border: 2px solid ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.panelBg};
    border-radius: 3px;
    filter: drop-shadow(0 0 10px ${props => props.theme.primaryColor});
    .button-wrapper {
      button {
        margin-top: 16px;
        margin-right: 16px;
        background-color: #29222aaa;
        .close-icon {
          color: ${props => props.theme.primaryColor};
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
