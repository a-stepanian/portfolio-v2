import styled from "styled-components";
import { useAppContext } from "../AppContext";

export const LittleDiv2 = () => {
  const { colorScheme } = useAppContext();

  return (
    <Wrapper>
      <div className={`hexagon-wrapper dark-mode-button-hexagon-wrapper`}>
        <button
          className={`clip-border btn-shrink`}
          title="toggle dark and light mode"
          style={{ backgroundColor: `${colorScheme.blackColor === "#29222a" ? "#2b32359d" : "#e8f0f3"}` }}>
          <div className={`blue-overlay dark-mode-button-blue-overlay`}></div>
        </button>
        <div className={`line dark-mode-button-line`}></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hexagon-wrapper {
    position: relative;
    height: 25px;
    transition: filter 0.2s linear 0.2s, transform 0.2s linear 0.2s;
    .clip-border {
      transition: clip-path 0.2s;
      border: none;
      display: block;
      position: relative;
      clip-path: polygon(5% 25%, 50% 5%, 95% 25%, 95% 75%, 50% 95%, 5% 75%);
      width: 25px;
      height: 25px;
    }
    .clip-border-circle {
      width: 20px;
      height: 20px;
      clip-path: circle(50% at 50% 50%);
    }
  }
`;
