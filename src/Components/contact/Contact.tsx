import styled from "styled-components";
import ContactForm from "./ContactForm";
import { useAppContext } from "../../AppContext";

const Contact = () => {
  const { emailSent } = useAppContext();

  return (
    <Wrapper>
      <div className="form-wrapper" id="contact">
        <div className="background-card">
          {!emailSent && <h3 className="lets-connect">Let's connect!</h3>}
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100% - 80px);
  .form-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    .background-card {
      margin-top: 2rem;
      height: 370px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      padding: 0 0.5rem 1rem;
      width: calc(100% - 10px);
      background: ${props =>
        props.theme.siteBg === "#29222a"
          ? props.theme.blackColor
          : "url('/portfolio-v2/images/lightbg.jpg') center center / cover"};
      box-shadow: ${props => (props.theme.siteBg === "#29222a" ? "0px 0px 0px #0000009b" : "-6px 14px 5px #0000006b")};
      transition: transform 0.5s, box-shadow 0.5s;
      .lets-connect {
        color: ${props => props.theme.formTextColor};
        margin: 1rem 0;
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 480px) {
    .form-wrapper {
      .background-card {
        padding: 0 1rem 1.5rem;
        width: 340px;
        background-color: ${props => props.theme.blackColor};
      }
    }
  }
  @media (min-width: 768px) {
    .form-wrapper .background-card {
      height: 470px;
      margin-top: 30px;
    }
  }
  @media (min-width: 990px) {
    transition: 0.1s;
    .form-wrapper {
      .background-card {
        height: 560px;
        padding: 4rem;
        width: 480px;
        transform: ${props =>
          props.theme.siteBg === "#29222a" ? "translate(0, 0) rotate(0)" : "translate(5px, -10px) rotate(-2deg)"};
        border: ${props => (props.theme.siteBg === "#29222a" ? "" : "12px dashed #444")};
      }
    }
  }
`;

export default Contact;
