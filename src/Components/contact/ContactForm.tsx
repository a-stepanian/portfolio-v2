import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { IoIosCheckboxOutline } from "react-icons/io";

interface IContactFormProps {
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm = (props: IContactFormProps) => {
  const { setIsSent } = props;
  const [state, handleSubmit] = useForm("xqknjpzd");

  if (state.succeeded) {
    setIsSent(true);
    return (
      <Thanks>
        <h3>
          <IoIosCheckboxOutline />
          <span>Sent</span>
        </h3>
        <p className="thanks">Thank you for your message, I'll be in contact soon!</p>
        <p>- Alex</p>
      </Thanks>
    );
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label htmlFor="full-name">Name</label>
      <input type="text" name="name" id="full-name" required={true} />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required={true} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={4} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} aria-label="Submit" title="Submit">
        Send
      </button>
    </Wrapper>
  );
};

const Thanks = styled.div`
  h3 {
    color: #affc41;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0 1rem;
    svg {
      margin-right: 5px;
      font-size: 1.2rem;
    }
    span {
      margin-right: 5px;
    }
  }
  p {
    color: ${props => props.theme.primaryColor};
    &:nth-of-type(2) {
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
    line-height: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.primaryColor};
  }
  input {
    margin-bottom: 1rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${props => props.theme.primaryColor};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #534555;
  }
  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 4px 8px;
    border: 0.15rem solid ${props => props.theme.blackColor};
    color: ${props => props.theme.primaryColor};
    border-radius: 5px;
    background-color: rgb(74 43 56);
    font-size: 16px;
    resize: none;
    &:focus {
      border-radius: 1px;
      outline: none;
      outline: 0.15rem solid ${props => props.theme.primaryColor};
      background-color: #534555;
    }
  }

  button {
    margin-top: 2rem;
    padding: 1rem;
    border: var(--small-border);
    color: ${props => props.theme.blackColor};
    background-color: ${props => props.theme.primaryColor};
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
`;

export default ContactForm;
