import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { FaRegWindowClose } from "react-icons/fa";
import ThreeDimensions from "./ThreeDimensions";

interface IInfoPanelNewProps {
  text: string;
  leftOffset: string;
}

const InfoPanelNew = (props: IInfoPanelNewProps) => {
  const { text, leftOffset } = props;
  const { btnClicked, updateBtnClicked } = useAppContext();

  const isOpen = text === btnClicked;

  return (
    <Wrapper>
      <div className={`panel ${btnClicked} ${isOpen ? "open" : ""}`}>
        <div className="panel-header">
          <h1>{text}</h1>
          <button type="button" onClick={() => updateBtnClicked("")}>
            <FaRegWindowClose className="icon" />
          </button>
        </div>
        <ThreeDimensions />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .panel {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: 4;
    position: fixed;
    box-shadow: inset 0 0 25px ${(props) => props.theme.glowColor};
    top: 200px;
    left: 48.5px;
    width: 0;
    height: calc(100vh - 200px);
    transition: height 0.2s linear, width 0.2s linear, padding 0.2s linear, left 0.2s linear, opacity 0.1s linear 0.15s;
    border: 4px solid ${(props) => props.theme.textColor};
    border-radius: 3px;
    background-color: ${(props) => props.theme.panelBg};
    overflow-y: scroll;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
      width: 12px;
    }

    &::-webkit-scrollbar:horizontal {
      height: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.textColorMuted};
      border: 2px solid ${(props) => props.theme.hoverColor};
    }

    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.glowColor};
    }

    & * {
      opacity: 0;
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
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
      opacity: 0;
      animation: appear 1s linear 0.6s forwards;
    }
    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1 !important;
      }
    }
    h1,
    p {
      color: ${(props) => props.theme.textColor};
    }
    .icon {
      font-size: 9rem;
      color: #274e4b;
    }
    h1 {
      font-size: 4rem;
      margin-bottom: 4rem;
    }
  }
  .open {
    right: 0;
    width: 100vw;
    opacity: 1;
    bottom: 0;
    padding: 1rem;
    transition: width 0.2s linear 0.6s, padding 0.1s linear 0.6s, left 0.1s linear 0.6s, opacity 0.01s linear 0.6s;
    & * {
      transition: opacity 0.1s linear 0.6s;
      opacity: 1;
    }
  }
  .panel.open.contact {
    left: -100px;
  }
  .panel.open.background {
    left: 0px;
  }
  @media (min-width: 990px) {
    .open {
      transition: width 0.2s linear 0.6s, padding 0.01s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s;
    }
  }
`;

export default InfoPanelNew;
