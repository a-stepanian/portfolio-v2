import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { PiXThin } from "react-icons/pi";
import { useRef } from "react";
import Projects from "./portfolio/Projects";

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

  const leftOffset =
    text === "background" ? "48.5px" : text === "portfolio" ? "98.5px" : text === "contact" ? "48.5px" : "198.5px";

  return (
    <Wrapper>
      <div ref={scrollTarget}></div>
      <div className="button-wrapper">
        <button type="button" onClick={() => updateBtnClicked("")}>
          <PiXThin className="close-icon" />
        </button>
      </div>
      <div className="panel-header">
        <h1>{text === "background" ? "background info" : text === "contact" ? "Let's Connect" : text}</h1>
      </div>
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  box-shadow: inset 0 0 5px #c69749;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding: 0 1rem 1rem;
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
  .panel-header {
    padding: 1.5rem 0 0;
    display: flex;
    justify-content: space-between;
    h1 {
      color: ${props => props.theme.primaryColor};
      font-size: 2rem;
      font-weight: 100;
      margin-bottom: 1rem;
    }
  }
  .button-wrapper {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-end;
    button {
      height: 40px;
      transform: translateX(24px);
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      border: none;
      border-radius: 3px;
      background: none;
      transition: 0.1s;
      .close-icon {
        font-size: 1.2rem;
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
    padding: 2rem;
    position: fixed;
    top: -180px;
    left: 250px;
    right: 20px;
    height: calc(100vh - 50px);
    border: 2px solid ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.panelBg};
    border-radius: 3px;
    .button-wrapper {
      button {
        border-radius: 3px;
        background: none;
        transition: 0.1s;
        .close-icon {
          font-size: 1.8rem;
          color: ${props => props.theme.primaryColor};
        }
        &:hover {
          cursor: pointer;
          .close-icon {
            font-size: 2.4rem;
            filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
          }
        }
      }
    }
  }
`;

export default InfoPanelContents;
