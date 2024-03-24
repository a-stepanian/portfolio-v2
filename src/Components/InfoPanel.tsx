import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { FaRegWindowClose } from "react-icons/fa";
import ThreeDimensions from "./ThreeDimensions";
import InfoPanelContents from "./InfoPanelContents";

interface IInfoPanelProps {
  text: string;
}

const InfoPanel = (props: IInfoPanelProps) => {
  const { text } = props;
  const { btnClicked } = useAppContext();

  const isOpen = text === btnClicked;

  const leftOffset =
    text === "background" ? "48.5px" : text === "contact" ? "148.5px" : text === "portfolio" ? "98.5px" : "";

  return (
    <Wrapper>
      <div className={`panel ${btnClicked} ${isOpen ? "open" : ""}`} style={{ left: leftOffset }}>
        {text !== "" && (
          <div className="info-panel-contents-wrapper">
            <InfoPanelContents text={text} />
            {text !== "" && <ThreeDimensions />}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .custom-green-bg {
    background: url("https://images.unsplash.com/photo-1585051256362-eb56bf4d5ea3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  }
  .panel {
    filter: drop-shadow(0 0 5px ${props => props.theme.primaryColor});
    position: fixed;
    top: 200px;
    bottom: 0;
    left: 48.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    opacity: 0;
    z-index: 4;
    box-shadow: inset 0 0 5px ${props => props.theme.primaryColor};
    height: calc(100vh - 200px);
    transition: height 0.2s linear, width 0.2s linear, padding 0.2s linear, left 0.2s linear, opacity 0.1s linear 0.15s;
    border: 4px solid ${props => props.theme.primaryColor};
    border-radius: 3px;
    background-color: ${props => props.theme.panelBg};
    & .info-panel-contents-wrapper {
      opacity: 0;
    }
  }
  .open {
    left: 0 !important;
    width: 100vw;
    opacity: 1;
    padding: 1rem;
    transition: width 0.2s linear 0.6s, padding 0.1s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s;
    & .info-panel-contents-wrapper {
      transition: opacity 0.6s linear 0.6s;
      opacity: 1;
    }
    .open-tall {
      transition: height 0.4s 0.9s, bottom 0.4s 0.9s;
      bottom: 20px;
      height: calc(100vh - 50px) !important;
    }
  }
  @media (min-width: 768px) {
    .panel {
      background-color: ${props => props.theme.blackColor};
    }
  }
`;

export default InfoPanel;
