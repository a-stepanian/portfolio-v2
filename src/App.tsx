import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Hexagon } from "./Components/Hexagon";
import { DarkModeBtn } from "./Components/DarkModeBtn";
import { useAppContext } from "./AppContext";
import ThreeDimensionsMobile from "./Components/ThreeDimensionsMobile";

export const App = () => {
  const { btnClicked, colorScheme } = useAppContext();

  useEffect(() => {
    const otherBtns = ["background", "contact", "portfolio", "another"].filter(x => x !== btnClicked);
    // remove styles from other buttons
    otherBtns.forEach((text: string) => {
      document?.querySelector(`.${text}-blue-overlay`)?.classList.remove("clicked-blue-overlay");
      document?.querySelector(`.${text}-clip-caption`)?.classList.remove("blue-text");
      document?.querySelector(`.${text}-icon`)?.classList.remove("blue-text");
      document?.querySelector(`.${text}-clip-caption`)?.classList.remove("skewed-text");
      document?.querySelector(`.${text}-icon`)?.classList.remove("skewed-text");
      document
        ?.querySelector(`.${text}-line`)
        ?.classList.remove(`clicked-line-${["portfolio", "another"].includes(text) ? "bottom" : "top"}-row`);
    });
    // style button clicked
    if (btnClicked.length > 0) {
      document?.querySelector(".information-panel")?.classList.add("information-panel-open");
      document?.querySelector(".info-panel-contents-wrapper")?.classList.add("grow-tall");
      document?.querySelector(`.${btnClicked}-blue-overlay`)?.classList.add("clicked-blue-overlay");
      document?.querySelector(`.${btnClicked}-clip-caption`)?.classList.add("blue-text");
      document?.querySelector(`.${btnClicked}-clip-caption`)?.classList.add("skewed-text");
      document?.querySelector(`.${btnClicked}-icon`)?.classList.add("blue-text");
      document?.querySelector(`.${btnClicked}-icon`)?.classList.add("skewed-text");
      document
        ?.querySelector(`.${btnClicked}-line`)
        ?.classList.add(`clicked-line-${["portfolio", "another"].includes(btnClicked) ? "bottom" : "top"}-row`);
      if (colorScheme.isDarkMode) {
        document?.querySelector(`.${btnClicked}-clip-border`)?.classList.add("blink-dark");
        setTimeout(() => {
          document?.querySelector(`.${btnClicked}-clip-border`)?.classList.remove("blink-dark");
        }, 500);
      } else {
        document?.querySelector(`.${btnClicked}-clip-border`)?.classList.add("blink-light");
        setTimeout(() => {
          document?.querySelector(`.${btnClicked}-clip-border`)?.classList.remove("blink-light");
        }, 500);
      }
    } else {
      document?.querySelector(".information-panel")?.classList.remove("information-panel-open");
    }
  }, [btnClicked]);

  return (
    <ThemeProvider theme={colorScheme}>
      <Wrapper>
        <div id="site-wrapper">
          <nav>
            <div className="top-row">
              <Hexagon lightColor={"red"} text={"background"} />
              <Hexagon lightColor={"yellow"} text={"contact"} />
            </div>
            <div className="bottom-hexagon">
              <Hexagon lightColor={"blue"} text={"portfolio"} />
            </div>
            {/* <DarkModeBtn /> */}
          </nav>
          {btnClicked !== "" && (
            <div className="three-dimensions-mobile-wrapper">
              <ThreeDimensionsMobile />
            </div>
          )}
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.theme.blackColor};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Chakra Petch", sans-serif;
  }
  #site-wrapper {
    display: flex;
    animation: site-appear 1s forwards;
    nav {
      position: relative;
      width: 206px;
      height: 200px;
      .top-row {
        display: flex;
      }
      .bottom-hexagon {
        position: absolute;
        bottom: 20px;
        left: 51px;
      }
    }
    .three-dimensions-mobile-wrapper {
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100vw - 206px);
      height: 200px;
      animation: site-appear 1s forwards;
    }
  }
  /* Used for dark/light mode transition speed */
  .fast-transition * {
    transition: 0.2s linear 0s !important;
  }
  /* Animations */
  @keyframes site-appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1 !important;
    }
  }
  .grow-tall {
    animation: bigPanel 5s forwards 5s;
  }
  @keyframes bigPanel {
    0% {
      height: 10px;
    }
    100% {
      height: 100px;
    }
  }
`;
