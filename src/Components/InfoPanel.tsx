import styled from "styled-components";
import { useAppContext } from "../AppContext";
import ThreeDimensions from "./decor/ThreeDimensions";
import InfoPanelContents from "./InfoPanelContents";
import { PiXThin } from "react-icons/pi";
import TwoDimensions from "./decor/TwoDimensions";
import { useEffect } from "react";
import { experience } from "../data";

interface IInfoPanelProps {
  text: string;
}

const InfoPanel = (props: IInfoPanelProps) => {
  const { text } = props;
  const { btnClicked, updateBtnClicked, colorScheme, activeTab } = useAppContext();

  const isOpen = text === btnClicked;

  const leftOffset =
    text === "background" ? "48.5px" : text === "contact" ? "148.5px" : text === "portfolio" ? "98.5px" : "";

  useEffect(() => {
    document.getElementById(activeTab)?.scrollIntoView({ behavior: "smooth" });
    experience.forEach(job => {
      if (job.id === activeTab) {
        document.querySelector(`.${job.id}-h3`)?.classList?.add("active");
        document.querySelector(`.${job.id}-button`)?.classList?.add("active");
      } else {
        document.querySelector(`.${job.id}-h3`)?.classList?.remove("active");
        document.querySelector(`.${job.id}-button`)?.classList?.remove("active");
      }
    });
  }, [activeTab]);

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
            <InfoPanelContents />
            {text !== "" && text !== "background" && colorScheme.siteBg === "#29222a" ? (
              <div className="big-three-d-object-wrapper">
                <ThreeDimensions />
              </div>
            ) : text !== "" && text !== "background" ? (
              <div className="big-three-d-object-wrapper">
                <TwoDimensions />
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .panel {
    background-color: ${props => props.theme.blackColor};
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
      transition: 0.05s;
      opacity: 0;
      height: 0;
      width: 0;
    }
  }
  .glow {
    filter: drop-shadow(0 0 10px ${props => props.theme.primaryColor});
  }
  .button-wrapper {
    position: absolute;
    top: 5px;
    right: 24px;
    display: flex;
    justify-content: flex-end;
    button {
      height: 26px;
      width: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      border: none;
      border-radius: 3px;
      transition: 0.1s;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      .close-icon {
        font-size: 1.4rem;
        color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#eee")};
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
    transition: width 0.2s linear 0.6s, padding 0.1s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s,
      border-radius 0.2s linear 0.6s;
    border-radius: ${props => props.theme.panelRadius};
    & .info-panel-contents-wrapper {
      transition: opacity 0.2s linear 0.8s;
      opacity: 1;
      height: 100%;
      width: 100%;
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
        width: auto;
        height: auto;
      }
    }
    .button-wrapper {
      display: none;
    }
    .open {
      left: 0 !important;
      width: 100vw;
      padding: 1rem;
      transition: width 0.4s linear 0.6s, padding 0.4s linear 0.6s, left 0.4s linear 0.6s, opacity 0.01s linear 0.6s,
        background-color 0.2s linear;
      & .info-panel-contents-wrapper {
        transition: opacity 0.4s linear 0.6s;
        width: auto;
        height: auto;
        .big-three-d-object-wrapper {
          width: 300px;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0);
          animation: scaleIn 0.3s forwards linear 1.2s;
        }
        @keyframes scaleIn {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
      }
      .open-tall {
        transition: height 0.3s linear 1.2s, bottom 0.3s linear 1.2s;
        /* bottom: 20px;
        height: calc(100vh - 50px) !important; */
        bottom: -4px;
        right: -4px;
        height: 100vh !important;
      }
    }
  }
`;

export default InfoPanel;
