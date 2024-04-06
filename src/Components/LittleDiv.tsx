import styled from "styled-components";
import { useAppContext } from "../AppContext";

export const LittleDiv = () => {
  const { colorScheme } = useAppContext();

  return (
    <Wrapper>
      <div className={`hexagon-wrapper dark-mode-button-hexagon-wrapper`}>
        <button
          className={`clip-border btn-shrink`}
          title="toggle dark and light mode"
          style={{ backgroundColor: `${colorScheme.blackColor === "#29222a" ? "#3f313194" : "#f2e3e3"}` }}>
          <div className={`blue-overlay dark-mode-button-blue-overlay`}></div>
        </button>
        <div className={`line dark-mode-button-line`}></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  opacity: 0.5;
  .hexagon-wrapper {
    position: relative;
    height: 50px;
    transition: filter 0.2s linear 0.2s, transform 0.2s linear 0.2s;
    .clip-border {
      transition: clip-path 0.2s;
      border: none;
      display: block;
      position: relative;
      clip-path: polygon(5% 25%, 50% 5%, 95% 25%, 95% 75%, 50% 95%, 5% 75%);
      background: #f2e3e3;
      width: 50px;
      height: 50px;
    }
    .clip-border-circle {
      width: 35px;
      height: 35px;
      clip-path: circle(50% at 50% 50%);
    }
  }
`;
