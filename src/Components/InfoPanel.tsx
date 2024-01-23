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
  const { btnClicked, updateBtnClicked } = useAppContext();

  const isOpen = text === btnClicked;

  const leftOffset =
    text === "background" ? "48.5px" : text === "contact" ? "148.5px" : text === "portfolio" ? "98.5px" : "";

  return (
    <Wrapper>
      <div className={`panel ${btnClicked} ${isOpen ? "open" : ""}`} style={{ left: leftOffset }}>
        <InfoPanelContents text={text} />
        <ThreeDimensions />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .panel {
    filter: drop-shadow(0 0 5px ${props => props.theme.glowColor});
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
    box-shadow: inset 0 0 5px ${props => props.theme.glowColor};
    height: calc(100vh - 200px);
    transition: height 0.2s linear, width 0.2s linear, padding 0.2s linear, left 0.2s linear, opacity 0.1s linear 0.15s;
    border: 4px solid ${props => props.theme.textColor};
    border-radius: 3px;
    background-color: ${props => props.theme.panelBg};
    & * {
      opacity: 0;
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
      h1,
      p {
        color: ${props => props.theme.textColor};
      }
      .icon {
        font-size: 9rem;
        color: #274e4b;
      }
      h1 {
        font-size: 4rem;
        margin-bottom: 4rem;
      }
      button {
        padding: 0;
        border: none;
        background: none;
        &:hover {
          cursor: pointer;
        }
        .icon {
          font-size: 1.4rem;
        }
      }
      animation: appear 1s linear 0.6s forwards;
    }
  }
  /* .panel.contact {
    left: 148.5px;
  }
  .panel.background {
    left: 48.5px;
  } */
  .panel.open {
    left: 0 !important;
  }
  .open {
    width: 100vw;
    opacity: 1;
    padding: 1rem;
    transition: width 0.2s linear 0.6s, padding 0.1s linear 0.6s, left 0.1s linear 0.6s, opacity 0.01s linear 0.6s;
    & * {
      transition: opacity 0.1s linear 0.6s;
      opacity: 1;
    }
  }
  /* Media queries */
  @media (min-width: 990px) {
    .open {
      transition: width 0.2s linear 0.6s, padding 0.01s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s;
    }
  }
  /* Animations */
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1 !important;
    }
  }
`;

export default InfoPanel;
