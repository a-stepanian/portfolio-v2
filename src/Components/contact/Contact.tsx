import styled from "styled-components";
import ContactForm from "./ContactForm";
import { GiCircuitry } from "react-icons/gi";

const Contact = () => {
  return (
    <Wrapper>
      <div className="circuit-wrapper">
        <GiCircuitry className="circuit" />
        <GiCircuitry className="circuit" />
        <GiCircuitry className="circuit" />
      </div>
      <div className="form-wrapper" id="contact">
        <div className="background-card">
          <h3 className="lets-connect">Let's connect!</h3>
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100% - 80px);
  .circuit-wrapper {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    svg {
      color: ${props => props.theme.blackColor};
      font-size: 100vw;
      opacity: 0.3;
      filter: blur(5px);
      margin: -4vw -1vw;
      transition: 0.5s;
    }
  }
  .form-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .background-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      padding: 0 0.5rem 1rem;
      width: 280px;
      background-color: ${props => props.theme.blackColor};
      transition: 0.5s;
      .lets-connect {
        color: ${props => props.theme.primaryColor};
        margin: 1rem 0;
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 480px) {
    .circuit-wrapper {
      svg {
        opacity: 0.2;
      }
    }
    .form-wrapper {
      .background-card {
        padding: 0 1rem 1.5rem;
        width: 340px;
        background-color: ${props => props.theme.blackColor};
        .lets-connect {
          color: ${props => props.theme.primaryColor};
          margin: 1rem 0;
          font-size: 2rem;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .circuit-wrapper {
      top: calc(-2vw);
      left: calc(-2vw);
      height: calc(100% + 2vw);
      width: calc(100% + 2vw);
      svg {
        color: ${props => props.theme.blackColor};
        font-size: calc(100vw - 220px);
        opacity: 0.15;
        filter: blur(8px);
      }
    }
  }
`;

export default Contact;
