import styled from "styled-components";

const School = () => {
  return (
    <Wrapper id="psu-min-button">
      <header className="school-header">
        <div className="title-company">
          <h3>The Pennsylvania State University</h3>
        </div>
      </header>
      <p className="major">B.S. Industrial Engineering</p>
      <div className="line"></div>
      <p className="minor">Six Sigma Minor</p>
      <div className="psu-seal">
        <img src="/portfolio-v2/images/psucrestcutout.png" alt="The Pennsylvania State University Seal" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  .school-header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 6.6rem;
    z-index: 1;
    background: ${props => props.theme.blackColor};
    padding-right: 6.5rem;
    padding-left: 0.3rem;
    .title-company {
      padding: 0.5rem 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    h3 {
      margin-top: 0.5rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }
  .major,
  .minor {
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
  }
  .line {
    width: 5rem;
    margin-bottom: 1rem;
  }
  .major {
    padding: 8rem 0 1rem;
  }
  .psu-seal {
    padding: 5rem 5%;
    width: 70%;
    img {
      width: 100%;
    }
  }
  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      padding-bottom: 3rem;
      font-size: 0.8rem;
    }
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
    .psu-seal {
      width: 60%;
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
    ul {
      .duty {
        font-size: 1.1rem;
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
