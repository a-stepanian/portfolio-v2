import { useEffect } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Hexagon } from "./Components/Hexagon";
import { useAppContext } from "./AppContext";
import ThreeDimensionsMobile from "./Components/ThreeDimensionsMobile";
import TwoDimensionsMobile from "./Components/TwoDimensionsMobile";
import { DarkModeButton } from "./Components/DarkModeButton";
import { LittleDiv } from "./Components/LittleDiv";
import { LittleDiv2 } from "./Components/LittleDiv2";

export const App = () => {
  const { btnClicked, updateBtnClicked, colorScheme, updateColorScheme } = useAppContext();

  // Runs when a button is clicked
  useEffect(() => {
    const darkMode = document.querySelector(".clip-border-circle") !== null;

    // Select background for the InfoPanelContents
    let customBackground = darkMode
      ? "#eee"
      : btnClicked === "contact"
      ? "url('/portfolio-v2/images/red-bg-lg.jpg') center center / cover"
      : btnClicked === "background"
      ? "url('/portfolio-v2/images/portfolio-blue-bg-lg.png') center center / cover"
      : "url('/portfolio-v2/images/portfolio-bg-lg.png') center center / cover";
    // Select primary color
    let primaryColor = "";
    switch (btnClicked) {
      case "background": {
        primaryColor = darkMode ? "#555" : "#1dd3b0";
        break;
      }
      case "portfolio": {
        primaryColor = darkMode ? "#555" : "#affc41";
        break;
      }
      default: {
        primaryColor = darkMode ? "#555" : "#ff5d57";
        break;
      }
    }
    // Update InfoPanelContents and primary color
    updateColorScheme({
      ...colorScheme,
      primaryColor,
      infoPanelContentsBackground: customBackground
    });

    if (btnClicked.length > 0) {
      if (darkMode) {
        const panels = document?.querySelectorAll(".panel");
        const panelContents = document?.querySelectorAll(".info-panel-contents");
        panels?.forEach(x => x?.classList.add("no-shadow"));
        panelContents?.forEach(x => x?.classList.add("no-shadow"));
      }
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
    const darkMode = document.querySelector(".clip-border-circle") !== null;

    const clipBorders = document?.querySelectorAll(".clip-border");
    const actionButtons = document?.querySelectorAll(".hexagon-wrapper");
    const lines = document?.querySelectorAll(".line");
    const panels = document?.querySelectorAll(".panel");
    const panelContents = document?.querySelectorAll(".info-panel-contents");
    const contactHexagon = document?.querySelector(".contact-hexagon-wrapper");

    if (darkMode) {
      clipBorders?.forEach(x => x?.classList.remove("clip-border-circle"));
      actionButtons?.forEach(x => x?.classList.remove("no-shadow"));
      lines?.forEach(x => x?.classList.remove("no-shadow"));
      panels?.forEach(x => x?.classList.remove("no-shadow"));
      panelContents?.forEach(x => x?.classList.remove("no-shadow"));
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
        infoPanelContentsBackground: "#eee",
        panelRadius: "4px",
        buttonBorderColor: "#29222a",
        lineWidth: "4px",
        lineStyle: "solid",
        jobInfoTextColor: "#e8ff94",
        siteBg: "#29222a"
        // "url('https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover"
        // "url('https://images.unsplash.com/photo-1611659934318-06fd70ced53c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover"
      });
    } else {
      clipBorders?.forEach(x => x?.classList.add("clip-border-circle"));
      actionButtons?.forEach(x => x?.classList.add("no-shadow"));
      lines?.forEach(x => x?.classList.add("no-shadow"));
      panels?.forEach(x => x?.classList.add("no-shadow"));
      panelContents?.forEach(x => x?.classList.add("no-shadow"));
      contactHexagon?.classList.add("move-right");
      updateColorScheme({
        ...colorScheme,
        primaryColor: "#555",
        blackColor: "#e9e8e0",
        panelRadius: "8px",
        buttonBorderColor: "#7e767f",
        lineWidth: "4px",
        lineStyle: "dashed",
        jobInfoTextColor: "#2e370c",
        siteBg:
          "url('https://images.unsplash.com/photo-1612538498613-35c5c8d675c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover"
      });
    }
    if (btnClicked.length > 0) {
      let btnClickedSaved = btnClicked;
      updateBtnClicked("");
      setTimeout(() => {
        updateBtnClicked(btnClickedSaved);
      }, 450);
    }
  };

  return (
    <ThemeProvider theme={colorScheme}>
      <Wrapper>
        <div id="site-wrapper">
          <h1 className="title">Designed and Built by Alex Stepanian &copy;2024</h1>
          <svg
            className="squiggle"
            width="300px"
            height="175px"
            style={{ filter: `blur(${colorScheme.blackColor === "#29222a" ? "10px" : "0"})` }}>
            <path
              fill="transparent"
              stroke="#8c858c"
              strokeWidth="4"
              d="M10 80 Q 77.5 10, 145 80 T 280 80"
              className="path"></path>
          </svg>
          <svg
            className="squiggle squiggle2"
            width="300px"
            height="175px"
            style={{ filter: `blur(${colorScheme.blackColor === "#29222a" ? "10px" : "0"})` }}>
            <path
              fill="transparent"
              stroke="#a59ba5"
              strokeWidth="4"
              d="M10 80 Q 77.5 10, 145 80 T 280 80"
              className="path"></path>
          </svg>
          <svg
            className="squiggle squiggle3"
            width="300px"
            height="175px"
            style={{ filter: `blur(${colorScheme.blackColor === "#29222a" ? "10px" : "0"})` }}>
            <path
              fill="transparent"
              stroke="#a59ba5"
              strokeWidth="4"
              d="M10 80 Q 77.5 10, 145 80 T 280 80"
              className="path"></path>
          </svg>
          <nav>
            <div className="top-row">
              <Hexagon text={"background"} />
              <Hexagon text={"contact"} />
              <div
                style={{
                  position: "relative",
                  left: `${colorScheme.siteBg === "#29222a" ? "-5px" : "15px"}`,
                  top: `${colorScheme.siteBg === "#29222a" ? "45px" : "50px"}`
                }}>
                <LittleDiv />
              </div>
            </div>
            <div className="bottom-hexagon">
              <Hexagon text={"portfolio"} />
              <div
                style={{
                  position: "relative",
                  left: `${colorScheme.siteBg === "#29222a" ? "0" : "10px"}`,
                  top: `${colorScheme.siteBg === "#29222a" ? "0" : "5px"}`
                }}>
                <DarkModeButton toggleDarkMode={toggleDarkMode} />
              </div>
              {colorScheme.siteBg !== "#29222a" && (
                <div
                  style={{
                    position: "relative",
                    left: "20px",
                    top: "10px"
                  }}>
                  <LittleDiv2 />
                </div>
              )}
            </div>
          </nav>
          {btnClicked !== "" && (
            <div className="three-dimensions-mobile-wrapper">
              {colorScheme.siteBg === "#29222a" ? <ThreeDimensionsMobile /> : <TwoDimensionsMobile />}
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
  /* background: url("https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") */
  background: ${props => props.theme.siteBg};
  transition: 0.2s;
  .btn-shrink {
    transform: scale(0.9) !important;
  }
  #site-wrapper {
    display: flex;
    animation: site-appear 1s forwards;
    transition: filter 1s linear;
    .title {
      position: fixed;
      bottom: 10vh;
      right: 10vw;
      text-align: end;
      font-size: 1rem;
      color: #544f54;
      font-weight: 100;
      opacity: 0.5;
    }
    .squiggle {
      width: 300px;
      display: block;
      position: absolute;
      left: calc(50% - 150px);
      top: calc(50% - 80px);
      transform: rotate(236deg) scale(4);
      transition: 1s;
      filter: blur(2px);
      .path {
        stroke-opacity: 0.2;
        stroke-dasharray: 640;
        stroke-dashoffset: 0;
        /* animation: dash 4s linear; */
      }
    }
    .squiggle2 {
      transform: rotate(210deg) scale(4) translateX(100px);
      .path {
        /* stroke-dashoffset: 640; */
        /* animation: dash 4s linear 1s forwards; */
      }
    }
    .squiggle3 {
      transform: rotate(210deg) scale(5) translateX(50px);
      .path {
        /* stroke-dashoffset: 640; */
        /* animation: dash 4s linear 1s forwards; */
      }
    }
    @keyframes dash {
      from {
        stroke-dashoffset: 640;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
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
        display: flex;
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
  .no-shadow {
    filter: none !important;
    box-shadow: none !important;
  }
  @media (min-width: 768px) {
    .three-dimensions-mobile-wrapper {
      display: none;
    }
  }
  /* Animations */
  @keyframes site-appear {
    0% {
      opacity: 0.001;
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
