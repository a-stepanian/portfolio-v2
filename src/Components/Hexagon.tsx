import InfoPanel from "./InfoPanel";
import { PiBriefcaseThin, PiEnvelopeSimpleThin, PiCertificateThin } from "react-icons/pi";
import styled from "styled-components";
import { TButtonText, useAppContext } from "../AppContext";

interface IHexagonProps {
  text: TButtonText;
}

export const Hexagon = (props: IHexagonProps) => {
  const { text } = props;
  const { btnClicked, updateBtnClicked } = useAppContext();
  return (
    <Wrapper>
      <div className={`hexagon-wrapper ${text}-hexagon-wrapper`}>
        <button
          className={`clip-border ${text}-clip-border`}
          onClick={() => updateBtnClicked(btnClicked !== text ? text : "")}
          aria-label={`Open ${text}`}
          title={text}>
          <div className={`blue-overlay ${text}-blue-overlay`}></div>
          <h2 className={`clip-caption ${text}-clip-caption`}>{text}</h2>
          {text === "portfolio" && <PiBriefcaseThin className={`icon ${text}-icon`} />}
          {text === "background" && <PiCertificateThin className={`icon ${text}-icon`} />}
          {text === "contact" && <PiEnvelopeSimpleThin className={`icon ${text}-icon`} />}
        </button>
        <div className={`line ${text}-line`}></div>
        <svg className="clip-svg">
          <defs>
            <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
              <polygon points="0.05 0.25, 0.5 0.05, 0.95 0.25, 0.95 0.75, .5 0.95, 0.05 0.75" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <InfoPanel text={text} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hexagon-wrapper {
    position: relative;
    height: 100px;
    transition: filter 0.2s linear 0.2s, transform 0.2s linear 0.2s;
    filter: drop-shadow(0 0 0 ${props => props.theme.primaryColor});
    .clip-border {
      border: none;
      display: block;
      position: relative;
      clip-path: url("#hexagon-clip");
      background: #29222a;
      width: 100px;
      height: 100px;
      color: ${props => props.theme.primaryColor};
      /* Button outline un-selected */
      .blue-overlay {
        transition: height 0.4s linear, background-color 0.2s linear 0.2s;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 0;
        background-color: ${props => props.theme.primaryColor};
        z-index: 1;
      }
      /* Button outline selected */
      .clicked-blue-overlay {
        transition: height 0.4s linear 0.2s, background-color 0.2s linear 0.2s;
        height: 100px;
      }
      .blue-text {
        color: ${props => props.theme.primaryColor};
      }
      .icon {
        z-index: 3;
        position: relative;
        font-size: 1.5rem;
        transform: rotateY(0) skew(0, 0) translate(0, 0);
        transition: 0.2s linear 0.2s;
      }

      &::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        margin: 0 auto;
        background-color: ${props => props.theme.blackColor};
        clip-path: url("#hexagon-clip");
        z-index: 2;
      }
      &:hover {
        background: #3d4350;
        color: ${props => props.theme.primaryColor};
        cursor: pointer;
        &::after {
          background: ${props => props.theme.blackColor};
        }
      }
    }
    .blink::after {
      animation: blink 0.2s ease-in-out; /* Apply the blink animation on click */
    }
    .clip-caption {
      z-index: 3;
      position: relative;
      margin: 6px 0 2px;
      width: 100%;
      font-size: 0.8rem;
      text-align: center;
      font-weight: 100;
      transform: rotateY(0) skew(0, 0) translate(0, 0);
      transition: 0.2s linear 0.2s;
    }
    .clip-svg {
      width: 0;
      height: 0;
      &:hover {
        cursor: pointer;
      }
    }
    .line {
      z-index: 3;
      position: absolute;
      bottom: 7px;
      left: calc(50% - 2px);
      width: 4px;
      height: 0;
      transition: bottom 0.2s linear 0.2s, height 0.2s linear 0.2s, background-color 0.2s linear 0.4s,
        filter 0.2s linear 0.4s;
      background-color: ${props => props.theme.primaryColor};
      filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
    }
    .clicked-line-top-row {
      bottom: calc(100px - 100vh);
      height: calc(100vh - 92px);
      transition: bottom 0.2s linear 0.4s, height 0.2s linear 0.4s, background-color 0.2s linear, filter 0.2s linear;
    }
    .clicked-line-bottom-row {
      bottom: calc(100px - 100vh);
      height: calc(100vh - 92px);
      transition: bottom 0.2s linear 0.4s, height 0.2s linear 0.4s, background-color 0.2s linear, filter 0.2s linear;
    }
    .skewed-text {
      transform: rotateY(45deg) skew(0deg, -20deg) translate(28px, 14px) !important;
    }
  }
  .extra-drop-shadow {
    filter: drop-shadow(0 0 8px ${props => props.theme.primaryColor});
    .clip-caption {
      font-weight: 500;
    }
    .icon {
      filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
    }
  }
  @keyframes blink {
    0%,
    100% {
      background-color: transparent;
    }
    50% {
      background-color: #122;
    }
  }
`;
