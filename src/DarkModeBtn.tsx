import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useAppContext } from "./AppContext";

export const DarkModeBtn = () => {
  const { colorScheme, updateColorScheme } = useAppContext();
  return (
    <Wrapper>
      <div className="diamond-wrapper">
        <button
          className="clip-border"
          onClick={() => {
            if (colorScheme.isDarkMode) {
              updateColorScheme({
                isDarkMode: false,
                bgColor: "#ddd",
                hexBorderColor: "#555",
                textColor: "#222",
              });
              return;
            }
            updateColorScheme({
              isDarkMode: true,
              bgColor: "#111",
              hexBorderColor: "#555",
              textColor: "#7ffff2",
            });
            return;
          }}>
          {colorScheme.isDarkMode ? (
            <MdOutlineDarkMode className="icon" />
          ) : (
            <MdOutlineLightMode className="icon" />
          )}
        </button>
        <svg className="clip-svg">
          <defs>
            <clipPath id="diamond-clip" clipPathUnits="objectBoundingBox">
              {/* <polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" /> */}
              <polygon
                points="
              0.5 0.05,
              1 0.5,
              0.5 0.95,
              0 0.5"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .diamond-wrapper {
    position: relative;
    top: 74px;
    transform: translateX(20px);
    height: 100px;
    transition: linear 0.3s 0.2s;
    .icon {
      z-index: 3;
      position: relative;
      color: aquamarine;
      font-size: 1.4rem;
    }
    .clip-border {
      border: none;
      display: block;
      position: relative;
      clip-path: url("#diamond-clip");
      margin: 0 auto;
      background: #555;
      width: 50px;
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
        color: aquamarine !important;
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
        clip-path: url("#diamond-clip");
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
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      font-size: 1.2rem;
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
