import styled from "styled-components";
import data from "../../data";
import IndividualProject from "./IndividualProject";

const Projects = () => {
  return (
    <Wrapper>
      <div className="project-wrapper">
        {data.map(site => {
          return <IndividualProject key={site.id} site={site} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .project-wrapper {
    padding: 0 5% 7.5rem;
    display: grid;
    row-gap: 5rem;
    justify-items: center;
  }

  @media (min-width: 480px) {
    .project-wrapper {
      padding: 5rem 10%;
    }
  }

  @media (min-width: 992px) {
    .project-wrapper {
      grid-template-columns: 1fr 1fr;
      column-gap: 5rem;
      margin-bottom: 5rem;
    }
  }
`;

export default Projects;
