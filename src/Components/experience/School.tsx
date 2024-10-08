import styled from "styled-components";

const School = () => {
  return (
    <Wrapper id="psu-button">
      <header className="school-header">
        <div className="school-title">
          <h3>The Pennsylvania State University</h3>
        </div>
      </header>
      <div>
        <p className="major">B.S. Industrial Engineering</p>
        <div className="line-wrapper">
          <div className="line"></div>
        </div>
        <p className="major">Six Sigma Minor</p>
      </div>
      <div className="old-main">
        <img className="old-main-light" src="/portfolio-v2/images/oldmain.png" alt="Old Main Building at PSU" />
        <img className="old-main-dark" src="/portfolio-v2/images/oldmaindark.png" alt="Old Main Building at PSU" />
      </div>
      <p className="activities">Activities: Society of Manufacturing Engineers (SME), Dean's List</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  z-index: 10;
  width: 100%;
  color: ${props => props.theme.primaryColor};
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .old-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .old-main-light {
      display: ${props => (props.theme.siteBg === "#29222a" ? "none" : "block")};
    }
    .old-main-dark {
      display: ${props => (props.theme.siteBg === "#29222a" ? "block" : "none")};
      filter: drop-shadow(3px 3px 3px rgba(29, 211, 174, 1));
    }
  }
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
  }
  .major {
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem;
    color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#111")};
  }
  .activities {
    font-size: 1.2rem;
    text-align: center;
    color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#111")};
  }
  .line-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .line {
      content: "";
      border-top: 4px solid ${props => props.theme.primaryColor};
      width: 10%;
    }
  }

  @media (min-width: 768px) {
    border-right: none;
    height: calc(100vh - 40px);
    .school-header {
      top: 55px;
      padding: 1rem 3rem;
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 2.4rem;
        line-height: 2rem;
      }
    }
    .major {
      font-size: 1.8rem;
      &:first-of-type {
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 992px) {
    .school-header {
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default School;
