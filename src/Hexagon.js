import styled from "styled-components";

export const Hexagon = ({ text, btnClicked, setBtnClicked }) => {
  return (
    <Wrapper>
      <div className="hexagon-wrapper">
        <button
          className="clip-border"
          onClick={() => setBtnClicked(btnClicked !== text ? text : "")}>
          <div className={`blue-overlay ${text}-blue-overlay`}></div>
          <h2 className={`clip-caption ${text}-clip-caption`}>{text}</h2>
        </button>
        <div className={`line ${text}-line`}></div>
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
    height: 130px;
    transition: linear 0.3s;
    .clip-border {
      border: none;
      display: block;
      position: relative;
      clip-path: url("#hexagon-clip");
      transition: 0.2s linear;
      margin: 0 auto;
      background: #555;
      width: 130px;
      height: 130px;
      color: #555;
      .blue-overlay {
        position: absolute;
        top: 0;
        width: 0px;
        height: 100%;
        background: aquamarine;
        z-index: 1;
        transition: linear 0.3s 0.2s;
      }
      .clicked-blue-overlay {
        width: 130px;
        transition: linear 0.3s;
      }
      .blue-text {
        color: aquamarine;
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
        transition: linear 0.3s;
        clip-path: url("#hexagon-clip");
        z-index: 2;
      }
      &:hover {
        background: #555;
        color: aquamarine;
        transition: linear 0.1s;
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
      font-family: "Chakra Petch", sans-serif;
      font-weight: 300;
      /* font-family: "Nova Square", sans-serif; */
      /* font-family: "Orbitron", sans-serif; */
      /* font-family: "Teko", sans-serif; */
    }
    .clip-svg {
      width: 0;
      height: 0;
    }
    .line {
      background-color: aquamarine;
      top: calc(50% - 1px);
      right: 0;
      width: 0;
      height: 2px;
      position: absolute;
      z-index: 3;
      transition: linear 0.2s;
    }
    .clicked-line {
      right: calc(-50vw + 2px);
      width: calc(50vw - 1px);
      transition: linear 0.2s 0.3s;
    }
  }
`;
