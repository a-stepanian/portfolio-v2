import styled from "styled-components";

interface InfoToggleButton {
  isInfoOpen: boolean;
}

const InfoToggleButton = (props: InfoToggleButton) => {
  const { isInfoOpen } = props;
  return (
    <Wrapper
      type="button"
      aria-label={`${
        isInfoOpen
          ? "Hide project information and links to website and github"
          : "Show project information and links to website and github"
      }`}
      style={{
        backgroundColor: `${isInfoOpen ? "transparent" : "var(--main)"}`,
        transform: `${isInfoOpen ? "rotate(90deg)" : "rotate(0)"}`
      }}>
      <div className={`${isInfoOpen ? "line vertical vertical-open" : "line vertical"}`} />
      <div className={`${isInfoOpen ? "line horizontal horizontal-open" : "line horizontal"}`} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  border: none;
  transition: background-color 0.5s, transform 0.5s;
  border: var(--small-border);

  .line {
    position: absolute;
    right: 0.55rem;
    width: 1.5rem;
    height: 0.2rem;
    background-color: ${props => props.theme.blackColor};
    transition: 0.5s;
  }

  .vertical {
    top: 1.2rem;
    transform: rotate(90deg);
  }
  .vertical-open {
    transform: rotate(180deg);
    width: 0;
    right: 1.3rem;
  }

  .horizontal {
    top: 1.2rem;
  }
  .horizontal-open {
    transform: rotate(90deg);
  }

  @media (min-width: 480px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default InfoToggleButton;
