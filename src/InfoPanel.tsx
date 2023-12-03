import styled from "styled-components";

interface IInfoPanelProps {
  text?: string;
  btnClicked?: string;
}

const InfoPanel = (props: IInfoPanelProps) => {
  const { text, btnClicked } = props;

  const isOpen = text === btnClicked;

  return (
    <Wrapper>
      <div className={`panel ${isOpen ? "open" : ""}`}>
        <h1>{text}</h1>
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
    position: absolute;
    top: 0;
    left: calc(30vw - 2px);
    width: 0;
    height: 0;
    padding: 1rem;
    border: 2px solid aquamarine;
    transition: linear 0.2s;
    opacity: 0;
    overflow: hidden;
    h1,
    p {
      color: aquamarine;
    }
  }
  .open {
    position: fixed;
    width: calc(50vw);
    height: 75vh;
    transition: linear 0.5s 0.8s;
    opacity: 1;
    background-color: #122;
  }
`;

export default InfoPanel;
