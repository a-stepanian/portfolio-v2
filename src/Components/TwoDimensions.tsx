import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { PiBriefcaseBold, PiCertificateBold, PiEnvelopeSimpleBold } from "react-icons/pi";
import { TiStarburst } from "react-icons/ti";

const TwoDimensions = () => {
  const { btnClicked } = useAppContext();

  return (
    <Wrapper>
      {btnClicked !== "" && (
        <div className="big-icon-wrapper">
          <TiStarburst
            style={{
              position: "absolute",
              top: "calc(50% - 90px)",
              left: "0",
              zIndex: "-1",
              color: "#ecd397",
              width: "100%",
              height: "180px"
            }}
          />
          {btnClicked === "portfolio" && <PiBriefcaseBold className="icon" />}
          {btnClicked === "background" && <PiCertificateBold className="icon" />}
          {btnClicked === "contact" && <PiEnvelopeSimpleBold className="icon" />}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 60px;
    height: 80%;
    max-height: 540px;
    /* Bouncing icon and shadow */
    .big-icon-wrapper {
      height: 170px;
      border: 5px dashed ${props => props.theme.primaryColor};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 22px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      .icon {
        color: ${props => props.theme.primaryColor};
        height: 90%;
        width: 90%;
      }
    }
    /* Animations */
    @keyframes appear {
      0% {
        opacity: 0 !important;
      }
      100% {
        opacity: 1 !important;
      }
    }
  }
`;

export default TwoDimensions;
