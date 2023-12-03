import "./App.css";
import styled from "styled-components";
import { Hexagon } from "./Hexagon";
import { useEffect, useState } from "react";

export const App = () => {
  const [btnClicked, setBtnClicked] = useState("");

  useEffect(() => {
    const otherTwoBtns = ["Background", "Contact", "Portfolio"].filter(
      (x) => x !== btnClicked
    );
    // style button clicked
    if (btnClicked) {
      document
        .querySelector(`.${btnClicked}-blue-overlay`)
        .classList.toggle("clicked-blue-overlay");
      document
        .querySelector(`.${btnClicked}-clip-caption`)
        .classList.toggle("blue-text");
      document
        .querySelector(`.${btnClicked}-line`)
        .classList.toggle("clicked-line");
    }
    // remove styles from other buttons
    otherTwoBtns.forEach((x) => {
      document
        .querySelector(`.${x}-blue-overlay`)
        .classList.remove("clicked-blue-overlay");
      document
        .querySelector(`.${x}-clip-caption`)
        .classList.remove("blue-text");
      document.querySelector(`.${x}-line`).classList.remove("clicked-line");
    });
  }, [btnClicked]);
  return (
    <Wrapper>
      <div className="left-column">
        <div className="top-hexagon">
          <Hexagon
            text={"Background"}
            btnClicked={btnClicked}
            setBtnClicked={setBtnClicked}
          />
        </div>
        <Hexagon
          text={"Contact"}
          btnClicked={btnClicked}
          setBtnClicked={setBtnClicked}
        />
      </div>
      <div className="right-column">
        <Hexagon
          text={"Portfolio"}
          btnClicked={btnClicked}
          setBtnClicked={setBtnClicked}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #111;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
  .left-column {
    transform: translateX(6px);
    .top-hexagon {
      margin-bottom: 20px;
    }
  }
  .right-column {
    transform: translateX(-6px);
  }
`;
