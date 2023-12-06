import InfoPanel from "./InfoPanel";
import { FaLaptopCode } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import styled from "styled-components";
import { TButtonText, useAppContext } from "./AppContext";
import InfoPanelNew from "./InfoPanelNew";

interface IHexagonProps {
  text: TButtonText;
  lightColor: string;
}

export const Hexagon = (props: IHexagonProps) => {
  const { text, lightColor } = props;
  const { btnClicked, updateBtnClicked } = useAppContext();
  return (
    <Wrapper>
      <div className="hexagon-wrapper">
        <button
          className={`clip-border ${text}-clip-border`}
          onClick={() => updateBtnClicked(btnClicked !== text ? text : "")}>
          <div className={`blue-overlay ${text}-blue-overlay`}></div>
          <h2 className={`clip-caption ${text}-clip-caption`}>
            {/* {text.charAt(0).toUpperCase() + text.slice(1)} */}
            {text}
          </h2>
          {text === "portfolio" && (
            <FaLaptopCode className={`icon ${text}-icon`} />
          )}
          {text === "background" && (
            <BiBriefcase className={`icon ${text}-icon`} />
          )}
          {text === "contact" && (
            <MdMailOutline className={`icon ${text}-icon`} />
          )}
        </button>
        <div className={`line ${text}-line`}>
          <InfoPanel
            leftOffset={
              text === "background"
                ? "48.5px"
                : text === "portfolio"
                ? "98.5px"
                : text === "contact"
                ? "148.5px"
                : "198.5px"
            }
            text={text}
          />
          {/* <InfoPanelNew text={text} /> */}
        </div>
        <svg className="clip-svg">
          <defs>
            <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
              {/* <polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" /> */}
              <polygon points="0.05 0.25, 0.5 0.05, 0.95 0.25, 0.95 0.75, .5 0.95, 0.05 0.75" />
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
    .clip-border {
      border: none;
      display: block;
      position: relative;
      clip-path: url("#hexagon-clip");
      background: #555;
      width: 100px;
      height: 100px;
      color: #555;
      /* button outline un-selected */
      .blue-overlay {
        transition: 0.4s linear;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 0;
        background: ${(props) => props.theme.textColor};
        z-index: 1;
      }
      /* button outline selected */
      .clicked-blue-overlay {
        transition: 0.4s linear 0.2s;
        height: 100px;
      }
      .blue-text {
        color: ${(props) => props.theme.textColor};
      }
      .icon {
        z-index: 3;
        position: relative;
        font-size: 1.4rem;
      }

      &::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        margin: 0 auto;
        background-color: ${(props) => props.theme.bgColor};
        clip-path: url("#hexagon-clip");
        z-index: 2;
      }
      &:hover {
        background: #555;
        color: ${(props) => props.theme.textColor};
        cursor: pointer;
        &::after {
          background: ${(props) => props.theme.hoverColor};
        }
      }
    }
    .blink-light::after {
      animation: blink-light 0.2s ease-in-out; /* Apply the blink animation on click */
    }
    .blink-dark::after {
      animation: blink-dark 0.2s ease-in-out; /* Apply the blink animation on click */
    }
    @keyframes blink-light {
      0%,
      100% {
        background-color: transparent;
      }
      50% {
        background-color: #e6a662;
      }
    }
    @keyframes blink-dark {
      0%,
      100% {
        background-color: transparent;
      }
      50% {
        background-color: #122;
      }
    }
    .clip-caption {
      z-index: 3;
      position: relative;
      margin: 6px 0 2px;
      width: 100%;
      font-size: 0.8rem;
      text-align: center;
      font-weight: 500;
    }
    .clip-svg {
      width: 0;
      height: 0;
    }
    .line {
      z-index: 3;
      position: absolute;
      bottom: 7px;
      left: calc(50% - 2px);
      width: 4px;
      height: 0;
      transition: 0.2s 0.2s linear;
      background-color: ${(props) => props.theme.textColor};
    }
    .clicked-line-top-row {
      bottom: -100px;
      height: 108px;
      transition: 0.2s linear 0.4s;
    }
    .clicked-line-bottom-row {
      bottom: -20px;
      height: 26px;
      transition: 0.2s linear 0.4s;
    }
  }
`;
