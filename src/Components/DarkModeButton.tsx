import { PiMoonStarsThin, PiSunThin } from "react-icons/pi";
import styled from "styled-components";
import { useAppContext } from "../AppContext";

interface IDarkModeButtonProps {
  toggleDarkMode: any;
}
export const DarkModeButton = (props: IDarkModeButtonProps) => {
  const { toggleDarkMode } = props;
  const { colorScheme } = useAppContext();

  return (
    <Wrapper>
      <div className={`hexagon-wrapper dark-mode-button-hexagon-wrapper`}>
        <button
          className={`clip-border btn-shrink`}
          aria-label={`Open dark-mode-button`}
          title="toggle dark and light mode"
          onClick={toggleDarkMode}>
          <div className={`blue-overlay dark-mode-button-blue-overlay`}></div>
          {colorScheme.siteBg === "#29222a" ? (
            <PiSunThin className="dark-mode-button-icon" />
          ) : (
            <PiMoonStarsThin className="dark-mode-button-icon" />
          )}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hexagon-wrapper {
    position: relative;
    height: 70px;
    transition: filter 0.2s linear 0.2s, transform 0.2s linear 0.2s;
    filter: drop-shadow(0 0 0 ${props => props.theme.primaryColor});
    .clip-border {
      transition: 0.2s;
      border: none;
      display: block;
      position: relative;
      clip-path: polygon(5% 25%, 50% 5%, 95% 25%, 95% 75%, 50% 95%, 5% 75%);
      background: ${props => props.theme.buttonBorderColor};
      width: 70px;
      height: 70px;
      color: ${props => props.theme.primaryColor};
      /* Button outline un-selected */
      .blue-overlay {
        transition: height 0.4s linear, background-color 0.2s linear 0.2s;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 0;
        background-color: ${props => props.theme.primaryColor};
        z-index: 1;
      }
      /* Button outline selected */
      .clicked-blue-overlay {
        transition: height 0.4s linear 0.2s, background-color 0.2s linear 0.2s;
        height: 70px;
      }
      .dark-mode-button-icon {
        z-index: 3;
        position: relative;
        font-size: 1.5rem;
        transform: translateY(2px);
        transition: 0.2s linear 0.2s;
        filter: drop-shadow(0 0 10px ${props => props.theme.primaryColor});
        color: ${props => props.theme.primaryColor};
      }
      &::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        margin: 0 auto;
        background-color: ${props => props.theme.blackColor};
        clip-path: polygon(5% 25%, 50% 5%, 95% 25%, 95% 75%, 50% 95%, 5% 75%);
        z-index: 2;
        transition: 0.2s linear 0.2s;
      }
      &:hover {
        background: #3d4350;
        color: ${props => props.theme.primaryColor};
        cursor: pointer;
        &::after {
          background: ${props => props.theme.blackColor};
        }
      }
    }
    .clip-border-circle {
      width: 60px;
      height: 60px;
      clip-path: circle(50% at 50% 50%);
      &::after {
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        clip-path: circle(50% at 50% 50%);
      }
    }
    .blink::after {
      animation: blink 0.2s ease-in-out; /* Apply the blink animation on click */
    }
  }
  .extra-drop-shadow {
    filter: drop-shadow(0 0 8px ${props => props.theme.primaryColor});
    .icon {
      filter: drop-shadow(0 0 3px ${props => props.theme.primaryColor});
    }
  }
  @keyframes blink {
    0%,
    100% {
      background-color: transparent;
    }
    50% {
      background-color: #122;
    }
  }
`;
