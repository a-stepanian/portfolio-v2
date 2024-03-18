import styled from "styled-components";
import data from "../../data";
import IndividualProject from "./IndividualProject";

const Projects = () => {
  return (
    <Wrapper>
      <h3 className="instructions">Select a project below to get started.</h3>
      <div className="project-wrapper">
        {data.map(site => {
          return <IndividualProject key={site.id} site={site} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    z-index: 1;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    background-color: var(--black);
    color: var(--white);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    h2,
    p {
      font-size: 0.7rem;
      font-weight: 500;
    }
  }

  .instructions {
    margin: 7.5rem 0 5rem;
    padding: 0 5%;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: var(--black);
  }

  .project-wrapper {
    padding: 0 5% 7.5rem;
    display: grid;
    row-gap: 5rem;
    justify-items: center;
  }

  @media (min-width: 480px) {
    header {
      h2,
      p {
        font-size: 0.8rem;
      }
    }
    .project-wrapper {
      padding: 5rem 10%;
    }
    .instructions {
      margin: 15rem 0 5rem;
      font-size: 2.4rem;
      line-height: 2.8rem;
      padding: 5%;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    header {
      h2,
      p {
        font-size: 1rem;
      }
    }
    .instructions {
      margin: 20rem 0 17.5rem;
      font-size: 3rem;
      line-height: 3.2rem;
      padding: 0;
      max-width: 40rem;
    }
  }

  @media (min-width: 992px) {
    .project-wrapper {
      grid-template-columns: 1fr 1fr;
      column-gap: 5rem;
      margin-bottom: 5rem;
    }
    .instructions {
      margin: 7.5rem 0 0;
      font-size: 2.4rem;
      line-height: 2.8rem;
      max-width: 52rem;
    }
  }

  @media (min-width: 1200px) {
    .instructions {
      margin: 15rem 0 7.5rem;
      font-size: 2.6rem;
      line-height: 2.8rem;
      max-width: 56rem;
    }
  }
`;

export default Projects;
