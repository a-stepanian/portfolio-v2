import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { FaLaptopCode } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";

const ThreeDimensionsMobile = () => {
  const { btnClicked } = useAppContext();

  return (
    <Wrapper>
      <div className="three-d-object">
        <div className="face side1">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="face side2">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="face side3">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="face side4">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="face side5">
          <p className="nav-text">{btnClicked}</p>
        </div>
        <div className="face side6">
          <p className="nav-text">{btnClicked}</p>
        </div>
      </div>
      <div className="icon-wrapper">
        {btnClicked === "portfolio" && <FaLaptopCode className="icon" />}
        {btnClicked === "background" && <BiBriefcase className="icon" />}
        {btnClicked === "contact" && <MdMailOutline className="icon" />}
      </div>
      {btnClicked !== "" && <div className="icon-shadow"></div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 3%;
  left: calc((100vw - 206px - calc((100vw - 206px) / 2)) / 2);
  width: calc((100vw - 200px) / 2);
  height: 200px;
  perspective: calc(50vw); // Viewer's "distance" from the 3D object
  .three-d-object {
    position: relative;
    height: 90%;
    padding-top: 0.75rem;
    transform-style: preserve-3d;
    z-index: 1;
    animation: infinite-spin-mobile 30s linear infinite;
    .face {
      position: absolute;
      height: 92%;
      width: calc((100vw - 200px) / 2);
      background-color: ${props => props.theme.threeDimensionsBackground};
      border: 2px solid ${props => props.theme.primaryColor};
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
      transform: rotateY(0deg) translateZ(calc(calc((100vw - 200px) / 2) / 2 / 0.5774));
    }
    .side2 {
      transform: rotateY(60deg) translateZ(calc(calc((100vw - 200px) / 2) / 2 / 0.5774));
    }
    .side3 {
      transform: rotateY(120deg) translateZ(calc(calc((100vw - 200px) / 2) / 2 / 0.5774));
    }
    .side4 {
      transform: rotateY(180deg) translateZ(calc(calc((100vw - 200px) / 2) / 2 / 0.5774));
    }
    .side5 {
      transform: rotateY(240deg) translateZ(calc(calc((100vw - 200px) / 2) / 2 / 0.5774));
    }
    .side6 {
      transform: rotateY(300deg) translateZ(calc(calc((100vw - 200px) / 2) / 2 / 0.5774));
    }
  }
  /* Bouncing icon and shadow */
  .icon-wrapper {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 35px);
    height: 35%;
    transform: translateY(0);
    animation: icon-bounce 6s ease-in-out infinite 0.1s;
    .icon {
      color: ${props => props.theme.primaryColor};
      height: 100%;
      width: 100%;
      filter: drop-shadow(0 0 10px ${props => props.theme.primaryColor});
    }
  }
  .icon-shadow {
    z-index: 1;
    position: absolute;
    height: 10px;
    border-radius: 60px;
    width: 60px;
    top: 150px;
    left: calc(50% - 20px);
    background-color: ${props => props.theme.primaryColor};
    filter: blur(30px);
    transform: scale(1.2);
    animation: shadow-pulse 6s ease-in-out infinite 0.2s;
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
    25% {
      transform: translateY(30px) rotateY(30deg);
    }
    75% {
      transform: translateY(30px) rotateY(-30deg);
    }
  }
  @keyframes shadow-pulse {
    0%,
    50%,
    100% {
      filter: blur(30px);
    }
    /* facing right */
    25% {
      filter: blur(20px);
      left: calc(50% - 25px);
    }
    /* facing left */
    75% {
      filter: blur(20px);
      left: calc(50% - 15px);
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
  @keyframes infinite-spin-mobile {
    0% {
      transform: translateZ(calc(calc((100vw - 200px) / 2) / 2 / -0.5774)) rotateY(0deg);
    }
    100% {
      transform: translateZ(calc(calc((100vw - 200px) / 2) / 2 / -0.5774)) rotateY(360deg);
    }
  }
  @media (min-width: 380px) {
    .three-d-object .face .nav-text {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 480px) {
    .three-d-object {
      animation: infinite-spin-mobile 60s linear infinite;
    }
  }
`;

export default ThreeDimensionsMobile;
