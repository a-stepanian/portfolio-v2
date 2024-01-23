import styled from "styled-components";
import { useAppContext } from "../AppContext";
import { FaRegWindowClose } from "react-icons/fa";
import ThreeDimensions from "./ThreeDimensions";

interface IInfoPanelContentsProps {
  text: string;
}

const InfoPanelContents = (props: IInfoPanelContentsProps) => {
  const { text } = props;
  const { btnClicked, updateBtnClicked } = useAppContext();

  const isOpen = text === btnClicked;

  const leftOffset =
    text === "background" ? "48.5px" : text === "portfolio" ? "98.5px" : text === "contact" ? "48.5px" : "198.5px";

  return (
    <Wrapper>
      <div className="panel-header">
        <h1>{text}</h1>
        <button type="button" onClick={() => updateBtnClicked("")}>
          <FaRegWindowClose className="icon" />
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, exercitationem eaque, distinctio corporis
        quia facilis atque quibusdam beatae a aperiam minus dignissimos tempora provident delectus quisquam culpa!
        Deleniti, eligendi. Ad laborum, culpa ab doloremque vitae accusamus accusantium unde. Neque vero atque
        voluptatibus expedita odio aliquid eos magni laboriosam blanditiis assumenda.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50%;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  border: 2px solid ${props => props.theme.textColor};
  border-radius: 3px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 6px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.textColorMuted};
    border: 2px solid ${props => props.theme.hoverColor};
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.glowColor};
  }
  .panel-header {
    display: flex;
    justify-content: space-between;
    h1,
    p {
      color: ${props => props.theme.textColor};
    }
    .icon {
      font-size: 9rem;
      color: #274e4b;
    }
    h1 {
      font-size: 4rem;
      margin-bottom: 4rem;
    }
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
    animation: appear 1s linear 0.6s forwards;
  }
}
/* Animations */
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1 !important;
  }
`;

export default InfoPanelContents;
