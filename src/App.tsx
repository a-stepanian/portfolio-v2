import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Hexagon } from "./Hexagon";
import { useEffect } from "react";
import { DarkModeBtn } from "./DarkModeBtn";
import { useAppContext } from "./AppContext";

export const App = () => {
  const { btnClicked, colorScheme } = useAppContext();

  useEffect(() => {
    const otherTwoBtns = ["Background", "Contact", "Portfolio"].filter(
      (x) => x !== btnClicked
    );
    // style button clicked
    if (btnClicked) {
      document
        ?.querySelector(".information-panel")
        ?.classList.add("information-panel-open");
      document
        ?.querySelector(`.${btnClicked}-blue-overlay`)
        ?.classList.toggle("clicked-blue-overlay");
      document
        ?.querySelector(`.${btnClicked}-clip-caption`)
        ?.classList.toggle("blue-text");
      document
        ?.querySelector(`.${btnClicked}-icon`)
        ?.classList.toggle("blue-text");
      document
        ?.querySelector(`.${btnClicked}-line`)
        ?.classList.toggle("clicked-line");
    } else {
      document
        ?.querySelector(".information-panel")
        ?.classList.remove("information-panel-open");
    }
    // remove styles from other buttons
    otherTwoBtns.forEach((text: string) => {
      document
        ?.querySelector(`.${text}-blue-overlay`)
        ?.classList.remove("clicked-blue-overlay");
      document
        ?.querySelector(`.${text}-clip-caption`)
        ?.classList.remove("blue-text");
      document?.querySelector(`.${text}-icon`)?.classList.remove("blue-text");
      document
        ?.querySelector(`.${text}-line`)
        ?.classList.remove("clicked-line");
    });
  }, [btnClicked]);

  return (
    <ThemeProvider theme={colorScheme}>
      <Wrapper>
        <DarkModeBtn />
        <div className="left-column">
          <div className="top-hexagon">
            <Hexagon text={"Background"} />
          </div>
          <Hexagon text={"Contact"} />
        </div>
        <div className="right-column">
          <Hexagon text={"Portfolio"} />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  color: #7ffff2;
  justify-content: start;
  height: 100vh;
  transition: 0.2s linear;
  .left-column {
    transform: translateX(6px);
    .top-hexagon {
      margin-bottom: 10px;
    }
  }
  .right-column {
    margin-top: 54px;
  }
`;
