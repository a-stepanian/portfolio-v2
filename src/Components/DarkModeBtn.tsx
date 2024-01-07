import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useAppContext } from "../AppContext";

export const DarkModeBtn = () => {
  const { colorScheme, updateColorScheme } = useAppContext();
  return (
    <Wrapper>
      <div className="diamond-wrapper">
        <button
          className="clip-border"
          onClick={() => {
            document?.querySelector("#site-wrapper")?.classList.add("fast-transition");
            setTimeout(() => {
              document?.querySelector("#site-wrapper")?.classList.remove("fast-transition");
            }, 200);
            // if (colorScheme.isDarkMode) {
            //   updateColorScheme({
            //     isDarkMode: false,
            //     bgColor: "#fbebcc",
            //     hexBorderColor: "#faca79",
            //     hoverColor: "#e6a662",
            //     textColor: "#754838",
            //     textColorMuted: "#75483844",
            //     panelBg: "#75483844",
            //   });
            //   return;
            // }
            // updateColorScheme({
            //   isDarkMode: true,
            //   bgColor: "#111",
            //   hexBorderColor: "#555",
            //   hoverColor: "#122",
            //   textColor: "#7ffff2",
            //   textColorMuted: "#7ffff244",
            //   panelBg: "#7ffff244",
            // });
            return;
          }}>
          {colorScheme.isDarkMode ? <MdOutlineDarkMode className="icon" /> : <MdOutlineLightMode className="icon" />}
        </button>
        <svg className="clip-svg">
          <defs>
            <clipPath id="outer-trapezoid" clipPathUnits="objectBoundingBox">
              <polygon
                points="
              0.05 0.05,
              0.95 0.22,
              0.95 0.72,
              0.05 0.95"
              />
            </clipPath>
            <clipPath id="inner-trapezoid" clipPathUnits="objectBoundingBox">
              <polygon
                points="
              0.05 0.07,
              0.95 0.22,
              0.95 0.72,
              0.05 0.92"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 44px;
  .diamond-wrapper {
    position: relative;
    transform: translate(3px, -16px);
    .icon {
      z-index: 3;
      position: relative;
      color: ${(props) => props.theme.textColor};
      font-size: 1.4rem;
    }
    .clip-border {
      width: 44px;
      height: 100px;
      border: none;
      display: block;
      position: relative;
      clip-path: url("#outer-trapezoid");
      background: #555;
      color: #555;
      .blue-overlay {
        position: absolute;
        top: 0;
        width: 0px;
        height: 100%;
        background: aquamarine;
        z-index: 1;
      }
      .clicked-blue-overlay {
        width: 100px;
      }
      .blue-text {
        color: aquamarine;
      }
      &::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        margin: 0 auto;
        background: ${(props) => props.theme.bgColor};
        clip-path: url("#inner-trapezoid");
        z-index: 2;
      }
      &:hover {
        background: #555;
        color: aquamarine;
        cursor: pointer;
        &::after {
          background: ${(props) => props.theme.hoverColor};
        }
      }
    }
    .clip-svg {
      width: 0;
      height: 0;
    }
  }
`;
