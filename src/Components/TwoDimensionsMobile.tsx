import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { FaLaptopCode } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { TiStarburst } from "react-icons/ti";

const TwoDimensionsMobile = () => {
  const { btnClicked } = useAppContext();

  return (
    <Wrapper>
      <div className="icon-wrapper-2d">
        <TiStarburst className="starburst" />
        {btnClicked === "portfolio" && <FaLaptopCode className="icon-2d" />}
        {btnClicked === "background" && <BiBriefcase className="icon-2d" />}
        {btnClicked === "contact" && <MdMailOutline className="icon-2d" />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 3%;
  left: calc((100vw - 206px - calc((100vw - 206px) / 2)) / 2);
  width: calc((100vw - 200px) / 2);
  height: 200px;
  /* Bouncing icon and shadow */
  .icon-wrapper-2d {
    height: 120px;
    border: 5px dashed ${props => props.theme.primaryColor};
    border-radius: 50%;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    .starburst {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      color: #ecd397;
      width: 120px;
      height: 120px;
    }
    .icon-2d {
      color: ${props => props.theme.primaryColor};
      height: 100%;
      width: 100%;
    }
  }
  /* Animations */
  @keyframes appear-2d {
    0% {
      opacity: 0 !important;
    }
    100% {
      opacity: 1 !important;
    }
  }
  @media (min-width: 768px) {
    .icon-wrapper-2d {
      .starburst {
        top: calc(50% - 105px);
      }
    }
  }
`;

export default TwoDimensionsMobile;
