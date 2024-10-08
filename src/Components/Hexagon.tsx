import InfoPanel from "./InfoPanel";
import { PiCodeThin, PiEnvelopeSimpleThin, PiCertificateThin } from "react-icons/pi";
import styled from "styled-components";
import { TButtonText, useAppContext } from "../AppContext";

interface IHexagonProps {
  text: TButtonText;
  buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
}

export const Hexagon = (props: IHexagonProps) => {
  const { text, buttonRef } = props;
  const { btnClicked, updateBtnClicked } = useAppContext();
  return (
    <Wrapper>
      <div className={`hexagon-wrapper ${text}-hexagon-wrapper`}>
        <button
          ref={buttonRef ?? undefined}
          className={`clip-border ${text}-clip-border`}
          onClick={() => updateBtnClicked(btnClicked !== text ? text : "")}
          aria-label={`Open ${text}`}
          title={text}>
          <div className={`blue-overlay ${text}-blue-overlay`}></div>
          <h2 className={`clip-caption ${text}-clip-caption`}>{text}</h2>
          {text === "portfolio" && <PiCodeThin className={`icon ${text}-icon`} />}
          {text === "background" && <PiCertificateThin className={`icon ${text}-icon`} />}
          {text === "contact" && <PiEnvelopeSimpleThin className={`icon ${text}-icon`} />}
        </button>
        <div className={`line ${text}-line`}></div>
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
      transition: clip-path 0.2s;
      border: none;
      display: block;
      position: relative;
      clip-path: polygon(5% 25%, 50% 5%, 95% 25%, 95% 75%, 50% 95%, 5% 75%);
      background: ${props => props.theme.buttonBorderColor};
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
        clip-path: polygon(5% 25%, 50% 5%, 95% 25%, 95% 75%, 50% 95%, 5% 75%);
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
    .clip-border-circle {
      width: 92px;
      height: 92px;
      clip-path: circle(50% at 50% 50%);
      &::after {
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        clip-path: circle(50% at 50% 50%);
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
      transform: rotateY(0) skew(0, 0) translate(0, 0);
      transition: 0.2s linear 0.2s;
    }
    .line {
      z-index: 3;
      position: absolute;
      bottom: 7px;
      left: calc(50% - 2px);
      border-left-width: ${props => props.theme.lineWidth};
      border-left-style: ${props => props.theme.lineStyle};
      border-left-color: ${props => props.theme.primaryColor};
      height: 0;
      filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
      transition: bottom 0.2s linear 0.2s, height 0.2s linear 0.2s, background-color 0.2s linear 0.4s,
        filter 0.2s linear 0.4s, border-left-color 0.2s linear 0.4s;
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
  }
  .extra-drop-shadow {
    filter: drop-shadow(0 0 8px ${props => props.theme.primaryColor});
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
