import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../AppContext";

const Squiggles = () => {
  const { colorScheme } = useAppContext();
  return (
    <Wrapper>
      <svg className="squiggle" style={{ filter: `blur(${colorScheme.blackColor === "#29222a" ? "10px" : "0"})` }}>
        <path fill="transparent" d="M10 80 Q 77.5 10, 145 80 T 280 80" className="path"></path>
      </svg>
      <svg
        className="squiggle squiggle2"
        style={{ filter: `blur(${colorScheme.blackColor === "#29222a" ? "10px" : "0"})` }}>
        <path fill="transparent" d="M10 80 Q 77.5 10, 145 80 T 280 80" className="path"></path>
      </svg>
      <svg
        className="squiggle squiggle3"
        style={{ filter: `blur(${colorScheme.blackColor === "#29222a" ? "10px" : "0"})` }}>
        <path fill="transparent" d="M10 80 Q 77.5 10, 145 80 T 280 80" className="path"></path>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .squiggle {
    width: 300px;
    height: 175px;
    display: block;
    position: absolute;
    left: calc(50% - 150px);
    top: calc(50% - 80px);
    transform: rotate(236deg) scale(5);
    transition: 1s;
    stroke: #a3afbd;
    filter: blur(2px);
    .path {
      stroke-opacity: 0.2;
      stroke-dasharray: 640;
      stroke-dashoffset: 0;
      stroke-width: 8;
    }
  }
  .squiggle2 {
    transform: rotate(210deg) scale(5) translateX(100px);
    .path {
    }
  }
  .squiggle3 {
    transform: rotate(210deg) scale(6) translateX(50px);
    .path {
    }
  }
`;

export default Squiggles;
