import styled from "styled-components";
import { useAppContext } from "../AppContext";
import ThreeDimensions from "./decor/ThreeDimensions";
import InfoPanelContents from "./InfoPanelContents";
import { PiXThin } from "react-icons/pi";
import TwoDimensions from "./decor/TwoDimensions";

interface IInfoPanelProps {
  text: string;
}

const InfoPanel = (props: IInfoPanelProps) => {
  const { text } = props;
  const { btnClicked, updateBtnClicked, colorScheme } = useAppContext();

  const isOpen = text === btnClicked;

  const leftOffset =
    text === "background" ? "48.5px" : text === "contact" ? "148.5px" : text === "portfolio" ? "98.5px" : "";

  return (
    <Wrapper>
      <div className={`panel ${btnClicked} ${isOpen ? "open" : ""}`} style={{ left: leftOffset }}>
        {text !== "" && (
          <div className="info-panel-contents-wrapper">
            <div className="button-wrapper">
              <button type="button" onClick={() => updateBtnClicked("")} aria-label="Close" title="Close">
                <PiXThin className="close-icon" />
              </button>
            </div>
            <InfoPanelContents text={text} />
            {text !== "" && (
              <div className="big-three-d-object-wrapper">
                {colorScheme.siteBg === "#29222a" ? <ThreeDimensions /> : <TwoDimensions />}
              </div>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .panel {
    /* background: url("https://images.unsplash.com/photo-1435224668334-0f82ec57b605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") */
    /* background: url("https://images.unsplash.com/photo-1617565085015-13cb9d366120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center center / cover; */
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
    border-radius: 3px;
    transition: height 0.2s linear, width 0.2s linear, padding 0.2s linear, left 0.2s linear, opacity 0.1s linear 0.15s,
      border-color 0.2s linear 0.2s, border-radius 0.2s linear 0.2s, filter 0.2s linear 0.2s,
      box-shadow 0.2s linear 0.2s;
    border-width: ${props => props.theme.lineWidth};
    border-style: ${props => props.theme.lineStyle};
    border-color: ${props => props.theme.primaryColor};
    & .info-panel-contents-wrapper {
      transition: opacity 0.1s linear 0.4s;
      opacity: 0;
    }
  }
  .glow {
    filter: drop-shadow(0 0 10px ${props => props.theme.primaryColor});
  }
  .button-wrapper {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: flex-end;
    button {
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      border: none;
      border-radius: 3px;
      transition: 0.1s;
      background-color: transparent;
      z-index: 1000;
      .close-icon {
        font-size: 1.4rem;
        color: ${props => props.theme.primaryColor};
        transition: 0.1s;
      }
      &:hover {
        cursor: pointer;
        .close-icon {
          font-size: 2rem;
          filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
        }
      }
    }
  }
  .open {
    left: 0 !important;
    width: 100vw;
    opacity: 1;
    padding: 1rem;
    transition: width 0.2s linear 0.6s, padding 0.1s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s,
      border-radius 0.2s linear 0.6s;
    border-radius: ${props => props.theme.panelRadius};
    & .info-panel-contents-wrapper {
      transition: opacity 0.1s linear 0.6s;
      opacity: 1;
    }
    .open-tall {
      transition: width 0.2s linear 0.6s, padding 0.1s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s;
    }
  }
  @media (min-width: 768px) {
    .panel {
      background-color: ${props => props.theme.blackColor};
      & .info-panel-contents-wrapper {
        transition: 0.05s;
      }
    }
    .button-wrapper {
      display: none;
    }
    .open {
      left: 0 !important;
      width: 100vw;
      opacity: 1;
      padding: 1rem;
      transition: width 0.4s linear 0.6s, padding 0.1s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s;
      & .info-panel-contents-wrapper {
        transition: opacity 0.6s linear 0.6s;
        opacity: 1;
        .big-three-d-object-wrapper {
          width: 240px;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .open-tall {
        transition: height 0.3s linear 1.1s, bottom 0.3s linear 1.1s;
        bottom: 20px;
        height: calc(100vh - 50px) !important;
      }
    }
  }
`;

export default InfoPanel;
