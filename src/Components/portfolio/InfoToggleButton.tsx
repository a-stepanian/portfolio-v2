import styled from "styled-components";

interface InfoToggleButtonProps {
  isInfoOpen: boolean;
  toggleInfo: () => void;
}

const InfoToggleButton = (props: InfoToggleButtonProps) => {
  const { isInfoOpen, toggleInfo } = props;
  return (
    <Wrapper
      type="button"
      onClick={toggleInfo}
      aria-label={`${
        isInfoOpen
          ? "Hide project information and links to website and github"
          : "Show project information and links to website and github"
      }`}
      style={{
        transform: `${isInfoOpen ? "rotate(90deg)" : "rotate(0)"}`
      }}>
      <div className={`${isInfoOpen ? "line vertical vertical-open" : "line vertical"}`} />
      <div className={`${isInfoOpen ? "line horizontal horizontal-open" : "line horizontal"}`} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  margin-left: 1rem;
  border: none;
  transition: background-color 0.5s, transform 0.5s;
  border: var(--small-border);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  .line {
    position: absolute;
    right: 11px;
    width: 16px;
    border-radius: 1px;
    height: 3px;
    background-color: #222;
    transition: 0.5s;
  }

  .vertical {
    top: 21px;
    transform: rotate(90deg);
  }
  .vertical-open {
    transform: rotate(180deg);
    width: 0;
    right: 23px;
  }

  .horizontal {
    top: 21px;
  }
  .horizontal-open {
    transform: rotate(90deg);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export default InfoToggleButton;
