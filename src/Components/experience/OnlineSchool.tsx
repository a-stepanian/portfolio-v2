import styled from "styled-components";

const OnlineSchool = () => {
  return (
    <Wrapper id="independent-button">
      <header className="school-header" id="school-header">
        <h3 className="school-title">Independent Courses</h3>
        <h4 className="school-name">
          <a href="/" target="_blank" rel="noreferrer">
            udemy
          </a>
        </h4>
      </header>
      <div className="courses">
        <div className="certificate-wrapper">
          <p className="course">React Tutorial and Projects Course</p>
          <img src="/portfolio-v2/images/react.jpg" alt="React Course Certificate of Completion" />
        </div>
        <div className="certificate-wrapper">
          <p className="course">The Git and Github Bootcamp</p>
          <img src="/portfolio-v2/images/gitbootcamplarge.png" alt="Web Developer Bootcamp Certificate of Completion" />
        </div>
        <div className="certificate-wrapper">
          <p className="course">The Web Developer Bootcamp</p>
          <img src="/portfolio-v2/images/webdevcert.png" alt="Web Developer Bootcamp Certificate of Completion" />
        </div>
        <div className="certificate-wrapper">
          <p className="course">JavaScript Algorithms and Data Structures</p>
          <img src="/portfolio-v2/images/fcc2.png" alt="Free code camp certificate" />
        </div>
        <div className="certificate-wrapper">
          <p className="course">Responsive Web Design</p>
          <img src="/portfolio-v2/images/fcc1.png" alt="Free code camp certificate" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  z-index: 10;
  width: 100%;
  color: ${props => props.theme.primaryColor};
  .school-header {
    z-index: 10;
    position: sticky;
    top: 0;
    padding: 4px 34px 8px 1rem;
    box-shadow: ${props =>
      props.theme.siteBg === "#29222a" ? "rgb(29, 211, 176) 0 0 4px, rgb(29, 211, 176) 0 0 4px inset" : "none"};
    border: 2px solid ${props => (props.theme.siteBg === "#29222a" ? "rgb(29, 211, 176)" : "#555")};
    border-radius: ${props => (props.theme.siteBg === "#29222a" ? "0" : "3px")};
    background-color: ${props => (props.theme.siteBg === "#29222a" ? "#393850ef" : "#333")};
    color: ${props => props.theme.jobInfoTextColor};
    .school-title {
      position: relative;
      z-index: 10;
      color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.jobInfoTextColor : "#eee")};
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    .school-name {
      position: relative;
      z-index: 10;
      line-height: 10px;
      a {
        text-decoration: none;
        color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#ccc")};
        font-size: 0.6rem;
        letter-spacing: -0.02rem;
        white-space: nowrap;
      }
    }
  }

  .courses {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .certificate-wrapper {
      background-color: rgba(0, 0, 0, 0.3);
      margin: 3rem 1rem;
      box-shadow: 3px 3px 8px black;
      border-radius: 3px;
      padding: 1rem;
      /* max-width: 400px; */
      .course {
        text-align: center;
        font-size: 1rem;
        font-weight: 900;
        margin-bottom: 12px;
      }
      img {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    border-right: none;
    .school-header {
      top: 55px;
      padding: 1rem 3rem;
      display: flex;
      flex-direction: column;
      .school-title {
        height: auto;
        margin-bottom: 8px;
      }
      h3 {
        font-size: 2.4rem;
        line-height: 2rem;
      }
    }
    .courses {
      padding: 0 5vw;
    }
  }

  @media (min-width: 992px) {
    .school-header {
      h3 {
        font-size: 2.5rem;
      }
      .school-title {
        font-size: 2.2rem;
      }
    }
    .courses {
      padding: 4rem 10vw;
    }
  }
  @media (min-width: 1200px) {
    .courses {
      display: grid;
      grid-template-columns: calc(50% - 12px) calc(50% - 12px);
      grid-gap: 36px;
      align-items: unset;
      .certificate-wrapper {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
`;

export default OnlineSchool;
