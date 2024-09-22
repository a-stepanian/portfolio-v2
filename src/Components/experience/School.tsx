import styled from "styled-components";

const School = () => {
  return (
    <Wrapper id="psu-button">
      <header className="school-header">
        <div className="title-company">
          <h3>The Pennsylvania State University</h3>
        </div>
      </header>
      <p className="major">B.S. Industrial Engineering</p>
      <div className="line"></div>
      <p className="minor">Six Sigma Minor</p>
      <div className="old-main">
        <img className="old-main-light" src="/portfolio-v2/images/oldmain.png" alt="Old Main Building at PSU" />
        <img className="old-main-dark" src="/portfolio-v2/images/oldmaindark.png" alt="Old Main Building at PSU" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  z-index: 999;
  width: 100%;
  color: ${props => props.theme.primaryColor};
  .old-main {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      transform: translateY(100px);
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
    z-index: 999;
    & * {
      z-index: 999;
    }
    position: sticky;
    top: 0;
    background: #393850ef;
    padding: 4px 34px 8px 1rem;
    box-shadow: rgb(29, 211, 176) 0 0 4px, rgb(29, 211, 176) 0 0 4px inset;
    .school-title {
      position: relative;
      z-index: 999;
      background-color: #3938507a;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    .school-name {
      position: relative;
      z-index: 999;
      background-color: #3938507a;
      line-height: 10px;
      a {
        text-decoration: none;
        color: ${props => props.theme.primaryColor};
        font-size: 0.6rem;
        letter-spacing: -0.02rem;
        white-space: nowrap;
      }
    }
  }

  .courses {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 34px;
  }

  .course {
    width: 100%;
    text-align: center;
    padding: 7.5rem 0.5rem 2.5rem;
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
  .certificate-wrapper {
    margin: 0 5%;
    width: 90%;
    max-width: 400px;
    box-shadow: 3px 3px 8px black;
    img {
      width: 100%;
    }
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      color: ${props => props.theme.jobInfoTextColor};
      padding-bottom: 3rem;
      font-size: 1rem;
    }
  }

  .line {
    width: 90%;
  }

  @media (min-width: 480px) {
    .school-header {
      h3 {
        margin-top: 0.4rem;
        font-size: 1.9rem;
        line-height: 1.8rem;
      }
    }
    ul {
      .duty {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border-right: none;
    .school-header {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
      display: flex;
      justify-content: center;
      h3 {
        font-size: 2.4rem;
        line-height: 2rem;
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
