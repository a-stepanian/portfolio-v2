import InfoPanel from "./InfoPanel";
import { FaLaptopCode } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import styled from "styled-components";
import { useAppContext } from "./AppContext";

interface IHexagonProps {
  text: "Portfolio" | "Background" | "Contact";
}

export const Hexagon = (props: IHexagonProps) => {
  const { text } = props;
  const { btnClicked, updateBtnClicked } = useAppContext();
  return (
    <Wrapper>
      <div className="hexagon-wrapper">
        <button
          className="clip-border"
          onClick={() => updateBtnClicked(btnClicked !== text ? text : "")}>
          <div className={`blue-overlay ${text}-blue-overlay`}></div>
          <h2 className={`clip-caption ${text}-clip-caption`}>{text}</h2>
          {text === "Portfolio" && (
            <FaLaptopCode className={`icon ${text}-icon`} />
          )}
          {text === "Background" && (
            <BiBriefcase className={`icon ${text}-icon`} />
          )}
          {text === "Contact" && (
            <MdMailOutline className={`icon ${text}-icon`} />
          )}
        </button>
        <div className={`line ${text}-line`}>
          <InfoPanel text={text} btnClicked={btnClicked} />
        </div>
        <svg className="clip-svg">
          <defs>
            <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
              <polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hexagon-wrapper {
    position: relative;
    height: 100px;
    transition: linear 0.3s 0.2s;
    .clip-border {
      border: none;
      display: block;
      position: relative;
      clip-path: url("#hexagon-clip");
      margin: 1rem auto 0;
      background: #555;
      width: 100px;
      height: 100px;
      color: #555;
      .blue-overlay {
        position: absolute;
        top: 0;
        width: 0px;
        height: 100%;
        background: aquamarine;
        z-index: 1;
        transition: linear 0.3s 0.5s;
      }
      .clicked-blue-overlay {
        width: 100px;
        transition: linear 0.3s 0.2s;
      }
      .blue-text {
        color: aquamarine;
      }
      .icon {
        z-index: 3;
        position: relative;
        font-size: 1.4rem;
      }
      &::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        margin: 0 auto;
        background: #111;
        transition: linear 0.1s;
        clip-path: url("#hexagon-clip");
        z-index: 2;
      }
      &:hover {
        background: #555;
        color: aquamarine;
        cursor: pointer;
        &::after {
          background: #122;
        }
      }
    }
    .clip-caption {
      z-index: 3;
      position: relative;
      margin: 6px 0 2px;
      width: 100%;
      font-size: 0.8rem;
      text-align: center;
      font-weight: 300;
    }
    .clip-svg {
      width: 0;
      height: 0;
    }
    .line {
      z-index: 3;
      position: absolute;
      top: calc(50% - 1px);
      right: 0;
      width: 0;
      height: 2px;
      background-color: aquamarine;
      transition: linear 0.3s 0.2s;
    }
    .clicked-line {
      right: calc(-30vw + 2px);
      width: calc(30vw - 1px);
      transition: linear 0.3s 0.5s;
    }
  }
`;
