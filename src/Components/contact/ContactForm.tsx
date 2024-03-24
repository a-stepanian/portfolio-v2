import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { IoIosCheckboxOutline, IoIosSquareOutline } from "react-icons/io";
import { useAppContext } from "../../AppContext";
import { useEffect, useState } from "react";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [values, setValues] = useState<IValues>({ name: "", email: "", message: "" });
  const [readyToSubmit, setReadyToSubmit] = useState<boolean>(false);
  const { emailSent, updateEmailSent } = useAppContext();
  const [state, handleSubmit] = useForm("xqknjpzd");

  useEffect(() => {
    setReadyToSubmit(values.name?.length > 0 && values.email?.length > 0);
  }, [values]);

  useEffect(() => {
    if (state.succeeded) {
      updateEmailSent(true);
    }
  }, [state.succeeded]);

  if (state.submitting) {
    setTimeout(() => {
      const span = document.querySelector(".sending-text") as HTMLSpanElement;
      if (span) span.innerText = "Sending.";
    }, 75);
    setTimeout(() => {
      const span = document.querySelector(".sending-text") as HTMLSpanElement;
      if (span) span.innerText = "Sending..";
    }, 150);
    setTimeout(() => {
      const span = document.querySelector(".sending-text") as HTMLSpanElement;
      if (span) span.innerText = "Sending...";
    }, 225);
    setTimeout(() => {
      const span = document.querySelector(".sending-text") as HTMLSpanElement;
      if (span) span.innerText = "Sending....";
    }, 300);
    setTimeout(() => {
      const span = document.querySelector(".sending-text") as HTMLSpanElement;
      if (span) span.innerText = "Sending.....";
    }, 375);
    setTimeout(() => {
      const span = document.querySelector(".sending-text") as HTMLSpanElement;
      if (span) span.innerText = "Sending......";
    }, 450);
    return (
      <Thanks>
        <h3>
          <span className="sending-text">Sending</span>
        </h3>
      </Thanks>
    );
  }

  if (emailSent) {
    return (
      <Thanks>
        <h3>
          <IoIosCheckboxOutline />
          <span>Sent</span>
        </h3>
        <p className="thanks">
          Thank you for your message,
          <br />
          I'll be in contact soon! <br /> <span>- Alex</span>
        </p>
      </Thanks>
    );
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label htmlFor="full-name">Name</label>
      <input
        type="text"
        name="name"
        style={{ backgroundColor: values.name.length > 0 ? "#3d5752" : "rgb(74, 43, 56)" }}
        id="full-name"
        required={true}
        onChange={e =>
          setValues(prev => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <label htmlFor="email">Email</label>
      <input
        style={{ backgroundColor: values.email.length > 0 ? "#3d5752" : "rgb(74, 43, 56)" }}
        id="email"
        type="email"
        name="email"
        required={true}
        onChange={e =>
          setValues(prev => {
            return { ...prev, email: e.target.value };
          })
        }
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows={3}
        style={{ backgroundColor: values.message.length > 0 ? "#3d5752" : "rgb(74, 43, 56)" }}
        onChange={e =>
          setValues(prev => {
            return { ...prev, message: e.target.value };
          })
        }
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className={readyToSubmit ? "" : "disabled-btn"}
        aria-label="Submit"
        title="Submit">
        Send
      </button>
    </Wrapper>
  );
};

const Thanks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h3 {
    color: #affc41;
    font-size: 2.3rem;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0 1rem;
    svg {
      margin-right: 5px;
      font-size: 2.4rem;
    }
    span {
      margin-right: 5px;
    }
  }
  p {
    background-color: rgba(127, 191, 240, 0.084);
    padding: 12px;
    border-radius: 3px;
    font-size: 1.2rem;
    color: ${props => props.theme.primaryColor};
    span {
      display: inline-block;
      width: 100%;
      text-align: end;
    }
  }
`;

const Wrapper = styled.form`
  border: var(--small-border);
  width: 95%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  label,
  button {
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 500;
    color: #1dd3b0;
  }
  input {
    margin-bottom: 8px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #1dd3b0;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #3d5752;
  }
  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 4px 8px;
    border: 0.15rem solid ${props => props.theme.blackColor};
    color: #1dd3b0;
    border-radius: 5px;
    background-color: rgb(74 43 56);
    font-size: 16px;
    resize: none;
    &:focus {
      border-radius: 1px;
      outline: none;
      outline: 0.15rem solid #1dd3b0;
      background-color: #3d5752;
    }
  }

  button {
    margin-top: 10px;
    padding: 1rem;
    border: var(--small-border);
    color: ${props => props.theme.blackColor};
    background-color: #1dd3b0;
    font-size: 1.2rem;
    opacity: 0.9;
    transition: 0.2s;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      color: #633a4a;
      opacity: 1;
      box-shadow: 0 0 5px #be6f6c;
    }
  }
  .disabled-btn {
    background-color: #1dd3ae3d;
    &:hover {
      cursor: unset;
      color: ${props => props.theme.blackColor};
      opacity: 0.9;
      box-shadow: none;
    }
  }

  @media (min-width: 768px) {
    button {
      margin-top: 30px;
    }
    input {
      margin-bottom: 12px;
    }
    label,
    button {
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }
`;

export default ContactForm;
