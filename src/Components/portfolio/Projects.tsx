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
    padding: 1rem 3rem;
    max-width: 580px;
  }
  @media (min-width: 922px) {
    .project-wrapper {
      display: grid;
      grid-template-columns: 50% 50%;
      padding: 1rem 5rem;
      max-width: 992px;
    }
  }
`;

export default Projects;
