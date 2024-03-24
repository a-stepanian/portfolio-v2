import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { PiBriefcaseBold, PiCertificateBold, PiEnvelopeSimpleBold } from "react-icons/pi";

const ThreeDimensions = () => {
  const { btnClicked } = useAppContext();

  return (
    <Wrapper style={{ height: "80%" }}>
      <div className="big-three-d-object">
        <div className="big-face side1">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="big-face side2">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="big-face side3">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="big-face side4">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="big-face side5">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="big-face side6">
          <p className="nav-text">{btnClicked}</p>
        </div>
      </div>
      {btnClicked !== "" && (
        <div className="big-icon-wrapper">
          {btnClicked === "portfolio" && <PiBriefcaseBold className="icon" />}
          {btnClicked === "background" && <PiCertificateBold className="icon" />}
          {btnClicked === "contact" && <PiEnvelopeSimpleBold className="icon" />}
        </div>
      )}
      {btnClicked !== "" && <div className="big-icon-shadow"></div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: 5%;
    left: 70px;
    width: 120px;
    perspective: calc(400px); // Viewer's "distance" from the 3D object
    .big-three-d-object {
      position: relative;
      height: 100%;
      padding-top: 0.75rem;
      transform-style: preserve-3d;
      z-index: 1;
      animation: infinite-spin 30s linear infinite;
      .big-face {
        position: absolute;
        height: 92%;
        width: 120px;
        background-color: ${props => props.theme.threeDimensionsBackground};
        border: 1px solid ${props => props.theme.primaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        z-index: 0;
        animation-name: appear, shift-face-z-index;
        animation-duration: 1s, 30s;
        animation-timing-function: linear, linear;
        animation-delay: 0.6s, 0s;
        .nav-text {
          font-size: 0.6rem;
          color: ${props => props.theme.primaryColor};
        }
      }
      /* Initial static positioning of the 3D object faces */
      .side1 {
        transform: rotateY(0deg) translateZ(calc(120px / 2 / 0.5774));
      }
      .side2 {
        transform: rotateY(60deg) translateZ(calc(120px / 2 / 0.5774));
      }
      .side3 {
        transform: rotateY(120deg) translateZ(calc(120px / 2 / 0.5774));
      }
      .side4 {
        transform: rotateY(180deg) translateZ(calc(120px / 2 / 0.5774));
      }
      .side5 {
        transform: rotateY(240deg) translateZ(calc(120px / 2 / 0.5774));
      }
      .side6 {
        transform: rotateY(300deg) translateZ(calc(120px / 2 / 0.5774));
      }
    }
    /* Bouncing icon and shadow */
    .big-icon-wrapper {
      position: absolute;
      top: 0;
      left: calc(50% - 50px);
      height: 50%;
      transform: translateY(30%);
      animation: big-icon-bounce 8s ease-in-out infinite 0.1s;
      .icon {
        color: ${props => props.theme.primaryColor};
        height: 100%;
        width: 100%;
        filter: drop-shadow(0 0 10px ${props => props.theme.primaryColor});
      }
    }
    .big-icon-shadow {
      z-index: 1;
      position: absolute;
      height: 10px;
      border-radius: 60px;
      width: 60px;
      bottom: 50px;
      left: calc(50% - 20px);
      background-color: ${props => props.theme.primaryColor};
      filter: blur(30px);
      transform: scale(1.2);
      animation: big-shadow-pulse 8s ease-in-out infinite;
    }
    /* Animations */
    @keyframes appear {
      0% {
        opacity: 0 !important;
      }
      100% {
        opacity: 1 !important;
      }
    }
    @keyframes big-icon-bounce {
      0%,
      50%,
      100% {
        transform: translateY(30%) rotateY(0);
      }
      25% {
        transform: translateY(97%) rotateY(30deg);
      }
      75% {
        transform: translateY(97%) rotateY(-30deg);
      }
    }
    @keyframes big-shadow-pulse {
      0%,
      50%,
      100% {
        filter: blur(30px);
      }
      /* facing right */
      25% {
        filter: blur(10px);
        transform: scale(1.2) rotate(-10deg);
        left: calc(50% - 30px);
      }
      /* facing left */
      75% {
        filter: blur(10px);
        transform: scale(1.2) rotate(10deg);
        left: calc(50% - 25px);
      }
    }
    @keyframes shift-face-z-index {
      0% {
        z-index: 10;
      }
      50% {
        z-index: 0;
      }
      100% {
        z-index: 0;
      }
    }
    @keyframes infinite-spin {
      0% {
        transform: translateZ(calc(120px / 2 / -0.5774)) rotateY(0deg);
      }
      100% {
        transform: translateZ(calc(120px / 2 / -0.5774)) rotateY(360deg);
      }
    }
  }
`;

export default ThreeDimensions;
