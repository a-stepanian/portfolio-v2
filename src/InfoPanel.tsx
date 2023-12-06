import styled from "styled-components";
import { useAppContext } from "./AppContext";
import { FaRegWindowClose } from "react-icons/fa";
import ThreeDimensions from "./ThreeDimensions";

interface IInfoPanelNewProps {
  text: string;
  leftOffset: string;
}

const InfoPanelNew = (props: IInfoPanelNewProps) => {
  const { text, leftOffset } = props;
  const { btnClicked, updateBtnClicked } = useAppContext();

  const isOpen = text === btnClicked;

  return (
    <Wrapper>
      <div
        className={`panel ${isOpen ? "open" : ""}`}
        style={{ left: leftOffset }}>
        <div className="panel-header">
          <h1>{text}</h1>
          <button type="button" onClick={() => updateBtnClicked("")}>
            <FaRegWindowClose className="icon" />
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          accusamus est exercitationem explicabo officia, aut aliquid ullam
          impedit doloremque dignissimos quam laudantium nostrum harum omnis
          deserunt voluptate rem rerum delectus? Eligendi esse, doloribus
          repellendus quia eos minima enim quo facilis sunt, saepe iusto ipsa
          vel ut asperiores perspiciatis itaque unde quos cumque porro sit
          veniam aspernatur velit quam aliquam. Molestias placeat dignissimos
          minus, possimus nihil et culpa pariatur! Expedita et dolor sequi enim
          voluptatum ea eum illum quos nobis, quis molestias eius at ipsa
          recusandae laudantium culpa reiciendis amet dolorum explicabo. Tempore
          quis suscipit quod hic expedita, incidunt consectetur nulla.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .panel {
    opacity: 0;
    z-index: 4;
    transition: 0.2s linear;
    position: fixed;
    top: 220px;
    width: 0;
    height: 0;
    transition: height 0.2s linear, width 0.2s linear, padding 0.2s linear,
      left 0.2s linear, opacity 0.1s linear 0.1s;
    border: 4px solid ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.hoverColor};
    overflow-y: scroll;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
      width: 12px;
    }

    &::-webkit-scrollbar:horizontal {
      height: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.textColorMuted};
      border: 2px solid ${(props) => props.theme.hoverColor};
    }

    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.hoverColor};
    }

    & * {
      opacity: 0;
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
      button {
        padding: 0;
        border: none;
        background: none;
        &:hover {
          cursor: pointer;
        }
        .icon {
          font-size: 1.4rem;
        }
      }
    }
    h1,
    p,
    .icon {
      color: ${(props) => props.theme.textColor};
    }
  }
  .open {
    left: 0 !important;
    right: 0;
    width: 100vw;
    opacity: 1;
    bottom: 0;
    height: calc(100vh - 220px);
    padding: 1rem;
    transition: height 0.4s linear 0.7s, width 0.2s linear 0.6s,
      padding 0.2s linear 0.6s, left 0.2s linear 0.6s, opacity 0.01s linear 0.6s;
    & * {
      opacity: 1;
    }
  }
  @media (min-width: 990px) {
    .open {
      transition: height 0.4s linear 0.8s, width 0.4s linear 0.6s,
        padding 0.3s linear 0.6s, left 0.3s linear 0.6s,
        opacity 0.01s linear 0.6s;
    }
  }
`;

export default InfoPanelNew;
