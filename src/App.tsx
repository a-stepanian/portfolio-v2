import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Hexagon } from "./Hexagon";
import { useEffect } from "react";
import { DarkModeBtn } from "./DarkModeBtn";
import { useAppContext } from "./AppContext";
import ThreeDimensions from "./ThreeDimensions";

export const App = () => {
  const { btnClicked, colorScheme } = useAppContext();

  useEffect(() => {
    const otherBtns = ["background", "contact", "portfolio", "another"].filter((x) => x !== btnClicked);
    // remove styles from other buttons
    otherBtns.forEach((text: string) => {
      document?.querySelector(`.${text}-blue-overlay`)?.classList.remove("clicked-blue-overlay");
      document?.querySelector(`.${text}-clip-caption`)?.classList.remove("blue-text");
      document?.querySelector(`.${text}-icon`)?.classList.remove("blue-text");
      document
        ?.querySelector(`.${text}-line`)
        ?.classList.remove(`clicked-line-${["portfolio", "another"].includes(text) ? "bottom" : "top"}-row`);
    });
    // style button clicked
    if (btnClicked.length > 0) {
      document?.querySelector(".information-panel")?.classList.add("information-panel-open");
      document?.querySelector(`.${btnClicked}-blue-overlay`)?.classList.add("clicked-blue-overlay");
      document?.querySelector(`.${btnClicked}-clip-caption`)?.classList.add("blue-text");
      document?.querySelector(`.${btnClicked}-icon`)?.classList.add("blue-text");
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
          <h1>Portfolio</h1>
          <nav>
            <div className="top-row">
              <Hexagon lightColor={"red"} text={"background"} />
              <Hexagon lightColor={"yellow"} text={"contact"} />
            </div>
            <div className="bottom-hexagon">
              <Hexagon lightColor={"blue"} text={"portfolio"} />
            </div>
            <div className="another-hexagon">
              <Hexagon lightColor={"orange"} text={"another"} />
            </div>
            <DarkModeBtn />
          </nav>
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
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  height: 100vh;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};

  .fast-transition * {
    transition: 0.2s linear 0s !important;
  }

  h1 {
    font-size: 1rem;
    font-weight: 100;
  }

  nav {
    position: relative;
    height: 200px;
    .top-row {
      display: flex;
    }
    .bottom-hexagon {
      position: absolute;
      bottom: 20px;
      left: 25%;
    }
    .another-hexagon {
      position: absolute;
      bottom: 20px;
      left: 75%;
    }
  }
`;
