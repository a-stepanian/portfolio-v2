import styled from "styled-components";
import { useAppContext } from "./AppContext";
import { FaLaptopCode } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";

const ThreeDimensions = () => {
  const { btnClicked } = useAppContext();

  return (
    <Wrapper>
      <div className="icon-wrapper">
        {btnClicked === "portfolio" && <FaLaptopCode className="icon" />}
        {btnClicked === "background" && <BiBriefcase className="icon" />}
        {btnClicked === "contact" && <MdMailOutline className="icon" />}
      </div>
      <div className="icon-shadow"></div>
      <div
        className={`${
          btnClicked.toLowerCase() === "portfolio"
            ? "cube show-portfolio"
            : btnClicked.toLowerCase() === null
            ? "cube show-portfolio"
            : btnClicked.toLowerCase() === "background"
            ? "cube show-background"
            : btnClicked.toLowerCase() === "contact"
            ? "cube show-contact"
            : btnClicked.toLowerCase() === "pennsylvania"
            ? "cube show-pennsylvania"
            : btnClicked.toLowerCase() === "psu"
            ? "cube show-psu"
            : "cube show-washington"
        } always-spinning`}>
        <div className="face portfolio">
          <h5>{btnClicked}</h5>
        </div>
        <div className="face background">
          <h5>{btnClicked}</h5>
        </div>
        <div className="face contact">
          <h5>{btnClicked}</h5>
        </div>
        <div className="face pennsylvania">
          <h5>{btnClicked}</h5>
        </div>
        <div className="face psu">
          <h5>{btnClicked}</h5>
        </div>
        <div className="face washington">
          <h5>{btnClicked}</h5>
        </div>
        {/* <div className="face portfolio">
          <h5>Portfolio</h5>
        </div>
        <div className="face background">
          <h5>Chamblee, GA</h5>
        </div>
        <div className="face contact">
          <h5>Baltimore, MD</h5>
        </div>
        <div className="face pennsylvania">
          <h5>Shady Grove, PA</h5>
        </div>
        <div className="face psu">
          <h5>State College, PA</h5>
        </div>
        <div className="face washington">
          <h5>Washington</h5>
        </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: calc(5%);
  left: calc(50vw - 95px);
  width: 180px;
  height: 180px;
  perspective: calc(180px * 2); //zoom in and out of cube
  .icon-wrapper {
    position: absolute;
    height: 30px;
    top: calc(50% - 80px);
    left: calc(50% - 72px);
    animation: bounce 6s ease-in-out infinite 0.1s;
    transform: translateY(0);

    & .icon {
      color: #274e4b;
      width: 100%;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0) rotateY(0);
    }
    25% {
      transform: translateY(45px) rotateY(25deg);
    }
    50% {
      transform: translateY(0) rotateY(0);
    }
    75% {
      transform: translateY(45px) rotateY(-25deg);
    }
  }
  .icon-shadow {
    position: absolute;
    height: 12px;
    border-radius: 60px;
    width: 120px;
    bottom: 22px;
    left: calc(50% - 60px);
    background-color: #00000090;
    animation: pulse 6s ease-in-out infinite;
    transform: scale(1.2);
    filter: blur(10px);
  }
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1.2) rotateZ(0);
      filter: blur(10px);
    }
    25% {
      transform: scale(1) rotateZ(-5deg) translateX(-3px);
      filter: blur(6px);
    }
    50% {
      transform: scale(1.2) rotateZ(0);
      filter: blur(10px);
    }
    75% {
      transform: scale(1) rotateZ(5deg) translateX(3px);
      filter: blur(6px);
    }
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 0.75rem;
    transform-style: preserve-3d;
    transition: transform 0.7s 0.3s;
  }

  .face {
    position: absolute;
    width: 180px;
    height: 180px;
    background-color: #7ffff233;
    border: 2px solid #7ffff2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-height: 70%;
      max-width: 90%;
    }
  }

  /* ------------------------------------- */
  /* INITIAL STATIC POSITION OF CUBE FACES */
  /* ------------------------------------- */

  .portfolio {
    transform: rotateY(0deg) translateZ(calc(180px / 2 / 0.5774));
  }
  .background {
    transform: rotateY(60deg) translateZ(calc(180px / 2 / 0.5774));
  }
  .contact {
    transform: rotateY(120deg) translateZ(calc(180px / 2 / 0.5774));
  }
  .pennsylvania {
    transform: rotateY(180deg) translateZ(calc(180px / 2 / 0.5774));
  }
  .washington {
    transform: rotateY(240deg) translateZ(calc(180px / 2 / 0.5774));
  }
  .psu {
    transform: rotateY(300deg) translateZ(calc(180px / 2 / 0.5774));
  }

  /* ------------------------------------------------ */
  /* TRANSFORM OPTIONS FOR DISPLAYING A SPECIFIC FACE */
  /* ------------------------------------------------ */
  .always-spinning {
    animation: spin 30s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: translateZ(calc(180px / 2 / -0.5774)) rotateY(0deg);
    }
    100% {
      transform: translateZ(calc(180px / 2 / -0.5774)) rotateY(360deg);
    }
  }
  h5 {
    font-size: 2rem;
  }
`;

export default ThreeDimensions;
