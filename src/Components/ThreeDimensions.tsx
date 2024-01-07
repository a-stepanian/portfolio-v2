import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { FaLaptopCode } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";

const ThreeDimensions = () => {
  const { btnClicked } = useAppContext();

  return (
    <Wrapper>
      <div className="three-d-object">
        <div className="face side1">
          <h5>{btnClicked}</h5>
          <h5>{btnClicked}</h5>
        </div>
        <div className="face side2">
          <h5>{btnClicked}</h5>
          <h5>{btnClicked}</h5>
        </div>
        <div className="face side3">
          <h5>{btnClicked}</h5>
          <h5>{btnClicked}</h5>
        </div>
        <div className="face side4">
          <h5>{btnClicked}</h5>
          <h5>{btnClicked}</h5>
        </div>
        <div className="face side5">
          <h5>{btnClicked}</h5>
          <h5>{btnClicked}</h5>
        </div>
        <div className="face side6">
          <h5>{btnClicked}</h5>
          <h5>{btnClicked}</h5>
        </div>
        <div className="icon-wrapper">
          {btnClicked === "portfolio" && <FaLaptopCode className="icon" />}
          {btnClicked === "background" && <BiBriefcase className="icon" />}
          {btnClicked === "contact" && <MdMailOutline className="icon" />}
        </div>
        <div className="icon-shadow"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 10%;
  width: 180px;
  height: 90%;
  perspective: calc(180px * 3); // Viewer's "distance" from the 3D object
  .three-d-object {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 0.75rem;
    transform-style: preserve-3d;
    z-index: 1;
    animation: infinite-spin 30s linear infinite;
    .face {
      position: absolute;
      width: 180px;
      height: 92%;
      background-color: #7ffff233;
      border: 2px solid #7ffff2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      z-index: 0;
      animation: appear 1s linear 0.6s;
      animation-name: appear, shift-face-z-index;
      animation-duration: 1s, 30s;
      animation-timing-function: linear, linear;
      animation-delay: 0.6s, 0;
      h5 {
        font-size: 1.5rem;
      }
    }
    /* Initial static positioning of the 3D object faces */
    .side1 {
      transform: rotateY(0deg) translateZ(calc(180px / 2 / 0.5774));
    }
    .side2 {
      transform: rotateY(60deg) translateZ(calc(180px / 2 / 0.5774));
    }
    .side3 {
      transform: rotateY(120deg) translateZ(calc(180px / 2 / 0.5774));
    }
    .side4 {
      transform: rotateY(180deg) translateZ(calc(180px / 2 / 0.5774));
    }
    .side5 {
      transform: rotateY(240deg) translateZ(calc(180px / 2 / 0.5774));
    }
    .side6 {
      transform: rotateY(300deg) translateZ(calc(180px / 2 / 0.5774));
    }
    /* Bouncing icon and shadow */
    .icon-wrapper {
      position: absolute;
      top: calc(50% - 80px);
      left: calc(50% - 72px);
      height: 30px;
      transform: translateY(0);
      animation: icon-bounce 6s ease-in-out infinite 0.1s;
      .icon {
        color: #00ff88;
        width: 100%;
        filter: drop-shadow(0 0 15px ${(props) => props.theme.iconGlow});
      }
    }
    .icon-shadow {
      position: absolute;
      height: 12px;
      border-radius: 60px;
      width: 120px;
      bottom: 16%;
      left: calc(50% - 60px);
      background-color: rgba(255, 0, 60, 0.49);
      animation: shadow-spin-and-pulse 6s ease-in-out infinite;
      transform: scale(1.2);
      filter: blur(10px);
    }
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
  @keyframes icon-bounce {
    0%,
    50%,
    100% {
      transform: translateY(0) rotateY(0);
    }
    25%,
    75% {
      transform: translateY(45px);
    }
  }
  @keyframes shadow-spin-and-pulse {
    0%,
    50%,
    100% {
      transform: scale(1.2) rotateZ(0);
      filter: blur(10px);
    }
    25% {
      transform: scale(1) rotateZ(-5deg) translateX(-3px);
      filter: blur(6px);
    }
    75% {
      transform: scale(1) rotateZ(5deg) translateX(3px);
      filter: blur(6px);
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
      transform: translateZ(calc(180px / 2 / -0.5774)) rotateY(0deg);
    }
    100% {
      transform: translateZ(calc(180px / 2 / -0.5774)) rotateY(360deg);
    }
  }
`;

export default ThreeDimensions;
