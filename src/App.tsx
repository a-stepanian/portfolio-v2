import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Hexagon } from "./Components/Hexagon";
import { useAppContext } from "./AppContext";
import ThreeDimensionsMobile from "./Components/ThreeDimensionsMobile";

export const App = () => {
  const { btnClicked, colorScheme, updateColorScheme } = useAppContext();

  useEffect(() => {
    const lightMode = document.querySelector(".clip-border-circle") !== null;
    if (btnClicked?.length > 0) {
      let primaryColor = "";
      switch (btnClicked) {
        case "background": {
          primaryColor = "#1dd3b0";
          break;
        }
        case "portfolio": {
          primaryColor = "#affc41";
          break;
        }
        default: {
          primaryColor = "#ff5d57";
          break;
        }
      }
      if (lightMode) primaryColor = "#666";
      updateColorScheme({
        ...colorScheme,
        primaryColor
      });

      ["background", "contact", "portfolio"].forEach(() => {
        document.querySelector(`.info-panel-contents-${btnClicked}`)?.classList.add("open-tall");
      });
    }
    const otherBtns = ["background", "contact", "portfolio"].filter(x => x !== btnClicked);
    // remove styles from other buttons
    otherBtns.forEach((text: string) => {
      document?.querySelector(`.${text}-hexagon-wrapper`)?.classList.add("btn-shrink");
      document?.querySelector(`.${text}-hexagon-wrapper`)?.classList.remove("extra-drop-shadow");
      document?.querySelector(`.${text}-blue-overlay`)?.classList.remove("clicked-blue-overlay");
      document?.querySelector(`.${text}-clip-caption`)?.classList.remove("blue-text");
      // document?.querySelector(`.${text}-clip-caption`)?.classList.remove("blue-text", "skewed-text");
      document?.querySelector(`.${text}-icon`)?.classList.remove("blue-text");
      // document?.querySelector(`.${text}-icon`)?.classList.remove("blue-text", "skewed-text");
      document
        ?.querySelector(`.${text}-line`)
        ?.classList.remove(`clicked-line-${["portfolio"].includes(text) ? "bottom" : "top"}-row`);
    });
    if (btnClicked.length > 0) {
      document?.querySelector(".information-panel")?.classList.add("information-panel-open");
      // style button clicked
      document?.querySelector(`.${btnClicked}-hexagon-wrapper`)?.classList.remove("btn-shrink");
      document?.querySelector(`.${btnClicked}-hexagon-wrapper`)?.classList.add("extra-drop-shadow");
      document?.querySelector(`.${btnClicked}-blue-overlay`)?.classList.add("clicked-blue-overlay");
      document?.querySelector(`.${btnClicked}-clip-caption`)?.classList.add("blue-text");
      // document?.querySelector(`.${btnClicked}-clip-caption`)?.classList.add("blue-text", "skewed-text");
      document?.querySelector(`.${btnClicked}-icon`)?.classList.add("blue-text");
      // document?.querySelector(`.${btnClicked}-icon`)?.classList.add("blue-text", "skewed-text");
      document
        ?.querySelector(`.${btnClicked}-line`)
        ?.classList.add(`clicked-line-${["portfolio"].includes(btnClicked) ? "bottom" : "top"}-row`);
      document?.querySelector(`.${btnClicked}-clip-border`)?.classList.add("blink");
      setTimeout(() => {
        document?.querySelector(`.${btnClicked}-clip-border`)?.classList.remove("blink");
      }, 500);
    } else {
      document?.querySelector(".information-panel")?.classList.remove("information-panel-open");
      document.querySelector(".info-panel-contents")?.classList.remove("open-tall");
    }
  }, [btnClicked]);

  const toggleDarkMode = () => {
    const lightMode = document.querySelector(".clip-border-circle") !== null;
    const clipBorders = document?.querySelectorAll(".clip-border");
    const contactHexagon = document?.querySelector(".contact-hexagon-wrapper");
    if (lightMode) {
      clipBorders?.forEach(x => x?.classList.remove("clip-border-circle"));
      contactHexagon?.classList.remove("move-right");
      let primaryColor = "#eee";
      if (btnClicked?.length > 0) {
        switch (btnClicked) {
          case "background": {
            primaryColor = "#1dd3b0";
            break;
          }
          case "portfolio": {
            primaryColor = "#affc41";
            break;
          }
          default: {
            primaryColor = "#ff5d57";
            break;
          }
        }
      }
      updateColorScheme({
        ...colorScheme,
        primaryColor,
        blackColor: "#29222a",
        panelRadius: "3px",
        buttonBorderColor: "#29222a"
      });
    } else {
      clipBorders?.forEach(x => x?.classList.add("clip-border-circle"));
      contactHexagon?.classList.add("move-right");
      updateColorScheme({
        ...colorScheme,
        blackColor: "#e4d9e6",
        primaryColor: "#666",
        panelRadius: "40px",
        buttonBorderColor: "#7e767f"
      });
    }
  };

  return (
    <ThemeProvider theme={colorScheme}>
      <Wrapper>
        <div id="site-wrapper">
          <nav>
            <div className="top-row">
              <Hexagon text={"background"} />
              <Hexagon text={"contact"} />
            </div>
            <div className="bottom-hexagon">
              <Hexagon text={"portfolio"} />
            </div>
            <button type="button" style={{ position: "absolute", zIndex: "999" }} onClick={toggleDarkMode}>
              click
            </button>
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
  transition: 0.2s;
  .btn-shrink {
    transform: scale(0.9) !important;
  }
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
      animation: site-appear 1.8s forwards;
    }
  }
  /* Used for dark/light mode transition speed */
  .fast-transition * {
    transition: 0.2s linear 0s !important;
  }
  .move-right {
    left: 10px;
  }
  @media (min-width: 768px) {
    .three-dimensions-mobile-wrapper {
      display: none;
    }
  }
  /* Animations */
  @keyframes site-appear {
    0% {
      opacity: 0.1;
    }
    1% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1 !important;
    }
  }
`;
