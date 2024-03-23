import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqknjpzd");
  if (state.succeeded) {
    return (
      <Thanks>
        <p className="thanks">
          Thanks for your message! <br /> I will be in contact soon.
        </p>
        <p>- Alex</p>
      </Thanks>
    );
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label htmlFor="full-name">YOUR NAME</label>
      <input type="text" name="name" id="full-name" required={true} />
      <label htmlFor="email">YOUR CONTACT EMAIL</label>
      <input id="email" type="email" name="email" required={true} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">LEAVE A MESSAGE</label>
      <textarea id="message" name="message" rows={4} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send!
      </button>
    </Wrapper>
  );
};

const Thanks = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 1.5rem 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  margin: 7.5rem 0.5rem;
  font-size: 1.2rem;
  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.form`
  border: var(--small-border);
  padding: 2rem;
  margin-bottom: 5rem;
  background-color: ${props => props.theme.primaryColor};
  width: 95%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  label,
  button {
    color: ${props => props.theme.blackColor};
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 500;
  }
  input {
    margin-bottom: 1rem;
  }
  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.15rem;
    border: 0.15rem solid ${props => props.theme.blackColor};
    border-radius: 0;
    background-color: rgb(74 43 56);
    font-size: 16px;
    &:focus {
      outline: none;
      outline: 0.15rem solid var(--main);
      background-color: rgb(40 23 30);
    }
  }

  button {
    margin-top: 2rem;
    padding: 0.5rem;
    background-color: var(--main);
    border: var(--small-border);
    &:hover {
      transform: translate(-1px, -1px);
      box-shadow: 1px 1px 0 ${props => props.theme.blackColor};
      cursor: pointer;
    }
  }
`;

export default ContactForm;
