import { useEffect, useRef } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Hexagon } from "./Components/Hexagon";
import { useAppContext } from "./AppContext";
import ThreeDimensionsMobile from "./Components/decor/ThreeDimensionsMobile";
import TwoDimensionsMobile from "./Components/decor/TwoDimensionsMobile";
import { DarkModeButton } from "./Components/DarkModeButton";
import { LittleDiv } from "./Components/decor/LittleDiv";
import { LittleDiv2 } from "./Components/decor/LittleDiv2";
import Squiggles from "./Components/decor/Squiggles";
import TableOfContents from "./Components/experience/TableOfContents";

export const App = () => {
  const { btnClicked, colorScheme, updateColorScheme } = useAppContext();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => buttonRef.current && buttonRef.current.click();

  useEffect(() => {
    const timer = setTimeout(() => handleClick(), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Runs when a button is clicked
  useEffect(() => {
    const darkMode = document.querySelector(".clip-border-circle") !== null;
    if (btnClicked !== "") {
      let customBackground = "";
      if (darkMode) {
        customBackground = "#efefef";
        // btnClicked === "contact"
        //   ? "url('/portfolio-v2/images/contact-bg-lg-light.jpg') center center / cover"
        //   : btnClicked === "background"
        //   ? "rgb(236 211 151)"
        //   : "url('https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover";
      } else {
        customBackground =
          btnClicked === "contact"
            ? "url('/portfolio-v2/images/contact-bg-lg.jpg') center center / cover"
            : btnClicked === "background"
            ? "url('/portfolio-v2/images/portfolio-blue-bg-lg.png') center center / cover"
            : "url('/portfolio-v2/images/gray-bg-sm.jpg') center center / cover";
      }
      // Select primary color
      let primaryColor = "";
      switch (btnClicked) {
        case "background": {
          primaryColor = darkMode ? "#555" : "#1dd3b0";
          break;
        }
        case "portfolio": {
          primaryColor = darkMode ? "#555" : "#a0a4c5";
          // primaryColor = darkMode ? "#555" : "#affc41";
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
    }
    if (darkMode) {
      const panels = document?.querySelectorAll(".panel");
      const panelContents = document?.querySelectorAll(".info-panel-contents");
      panels?.forEach(x => x?.classList.add("no-shadow"));
      panelContents?.forEach(x => x?.classList.add("no-shadow"));
    }

    // style other buttons (not clicked)
    const otherBtns = ["background", "contact", "portfolio"].filter(x => x !== btnClicked);
    otherBtns.forEach((text: string) => {
      document?.querySelector(`.${text}-hexagon-wrapper`)?.classList.add("btn-shrink");
      document?.querySelector(`.${text}-hexagon-wrapper`)?.classList.remove("extra-drop-shadow");
      document?.querySelector(`.${text}-blue-overlay`)?.classList.remove("clicked-blue-overlay");
      document?.querySelector(`.${text}-clip-caption`)?.classList.remove("blue-text");
      document?.querySelector(`.${text}-icon`)?.classList.remove("blue-text");
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
      document?.querySelector(`.${btnClicked}-icon`)?.classList.add("blue-text");
      document
        ?.querySelector(`.${btnClicked}-line`)
        ?.classList.add(`clicked-line-${["portfolio"].includes(btnClicked) ? "bottom" : "top"}-row`);
      document?.querySelector(`.${btnClicked}-clip-border`)?.classList.add("blink");
      setTimeout(() => {
        document?.querySelector(`.${btnClicked}-clip-border`)?.classList.remove("blink");
      }, 500);
    } else {
      document?.querySelector(".information-panel")?.classList.remove("information-panel-open");
    }
  }, [btnClicked]);

  const toggleDarkMode = () => {
    const clipBorders = document?.querySelectorAll(".clip-border");
    const actionButtons = document?.querySelectorAll(".hexagon-wrapper");
    const lines = document?.querySelectorAll(".line");
    const panels = document?.querySelectorAll(".panel");
    const panelContents = document?.querySelectorAll(".info-panel-contents");
    const contactHexagon = document?.querySelector(".contact-hexagon-wrapper");

    const darkMode = document.querySelector(".clip-border-circle") !== null;
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
            primaryColor = "#a0a4c5";
            // primaryColor = "#affc41";
            break;
          }
          default: {
            primaryColor = "#ff5d57";
            break;
          }
        }
      }
      let customBackground =
        btnClicked === "contact"
          ? "url('/portfolio-v2/images/contact-bg-lg.jpg') center center / cover"
          : btnClicked === "background"
          ? "url('/portfolio-v2/images/portfolio-blue-bg-lg.png') center center / cover"
          : "url('/portfolio-v2/images/gray-bg-sm.jpg') center center / cover";
      updateColorScheme({
        ...colorScheme,
        primaryColor,
        blackColor: "#29222a",
        infoPanelContentsBackground: customBackground,
        infoPanelContentsCloseRadius: "3px",
        panelRadius: "4px",
        buttonBorderColor: "#29222a",
        lineWidth: "4px",
        lineStyle: "solid",
        jobInfoTextColor: "#e8ff94",
        siteBg: "#29222a",
        formTextColor: "#1dd3b0",
        formInputBg: "#3d5752"
      });
    } else {
      clipBorders?.forEach(x => x?.classList.add("clip-border-circle"));
      actionButtons?.forEach(x => x?.classList.add("no-shadow"));
      lines?.forEach(x => x?.classList.add("no-shadow"));
      panels?.forEach(x => x?.classList.add("no-shadow"));
      panelContents?.forEach(x => x?.classList.add("no-shadow"));
      contactHexagon?.classList.add("move-right");
      let customBackground = "#efefef";
      //   btnClicked === "contact"
      //     ? "url('/portfolio-v2/images/contact-bg-lg-light.jpg') center center / cover"
      //     : btnClicked === "background"
      //     ? "rgb(236 211 151)"
      //     : "url('https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover";
      updateColorScheme({
        ...colorScheme,
        primaryColor: "#555",
        blackColor: "#e9e8e0",
        infoPanelContentsBackground: customBackground,
        infoPanelContentsCloseRadius: "50%",
        panelRadius: "8px",
        buttonBorderColor: "#7e767f",
        lineWidth: "4px",
        lineStyle: "dashed",
        jobInfoTextColor: "#2e370c",
        siteBg:
          "url('https://images.unsplash.com/photo-1612538498613-35c5c8d675c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover",
        formTextColor: "#3f4c49",
        formInputBg: "#b4ede2"
      });
    }
    // if (btnClicked.length > 0) {
    //   let btnClickedSaved = btnClicked;
    //   updateBtnClicked("");
    //   setTimeout(() => {
    //     updateBtnClicked(btnClickedSaved);
    //   }, 450);
    // }
  };

  return (
    <ThemeProvider theme={colorScheme}>
      <Wrapper>
        <div id="site-wrapper">
          <h1 className="title">
            Designed and Developed by
            <br />
            Alex Stepanian &copy;2024
          </h1>
          <div
            className="decor-wrapper"
            style={{
              position: "absolute",
              left: `${colorScheme.siteBg === "#29222a" ? "-5px" : "8px"}`,
              top: `${colorScheme.siteBg === "#29222a" ? "90px" : "95px"}`
            }}>
            <LittleDiv />
          </div>
          <div
            className="decor-wrapper"
            style={{
              position: "absolute",
              left: `${colorScheme.siteBg === "#29222a" ? "0px" : "0px"}`,
              top: `${colorScheme.siteBg === "#29222a" ? "135px" : "135px"}`
            }}>
            <LittleDiv2 />
          </div>
          <Squiggles />
          <nav className="primary-nav">
            <div className="top-row">
              <Hexagon text={"background"} />
              <Hexagon text={"contact"} />
              <div
                className="decor-wrapper"
                style={{
                  position: "relative",
                  left: `${colorScheme.siteBg === "#29222a" ? "-5px" : "15px"}`,
                  top: `${colorScheme.siteBg === "#29222a" ? "45px" : "50px"}`
                }}>
                <LittleDiv />
              </div>
            </div>
            <div className="bottom-hexagon">
              <Hexagon text={"portfolio"} buttonRef={buttonRef} />
              <div
                className="decor-wrapper"
                style={{
                  position: "relative",
                  left: `${colorScheme.siteBg === "#29222a" ? "0" : "10px"}`,
                  top: `${colorScheme.siteBg === "#29222a" ? "0" : "5px"}`
                }}>
                <DarkModeButton toggleDarkMode={toggleDarkMode} />
              </div>
              <div
                className="decor-wrapper"
                style={{
                  position: "absolute",
                  left: `${colorScheme.siteBg === "#29222a" ? "170px" : "170px"}`,
                  top: "10px"
                }}>
                <LittleDiv2 />
              </div>
            </div>
          </nav>
          {btnClicked !== "" && (
            <div className="three-dimensions-mobile-wrapper">
              {colorScheme.siteBg === "#29222a" ? <ThreeDimensionsMobile /> : <TwoDimensionsMobile />}
            </div>
          )}
          {btnClicked === "background" && <TableOfContents />}
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
  background: ${props => props.theme.siteBg};
  transition: 0.2s;
  .btn-shrink {
    transform: scale(0.9) !important;
  }
  #site-wrapper {
    display: flex;
    .title {
      position: fixed;
      bottom: 20px;
      right: 20px;
      text-align: end;
      font-size: 1.1rem;
      color: #544f54;
      font-weight: 100;
      opacity: 0.5;
    }
    /* @keyframes dash {
      from {
        stroke-dashoffset: 640;
      }
      to {
        stroke-dashoffset: 0;
      }
    } */
    .decor-wrapper {
      animation: site-appear 3s forwards;
    }
    .primary-nav {
      animation: site-appear 1s forwards;
      transition: filter 1s linear;
      position: relative;
      width: 206px;
      height: 200px;
      .decor-wrapper {
        animation: site-appear 3s forwards;
      }
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
