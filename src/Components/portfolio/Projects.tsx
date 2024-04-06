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
    padding: 1rem;
    max-width: 580px;
  }
  @media (min-width: 1200px) {
  }
  .project-wrapper {
    padding: 1rem;
    max-width: 992px;
  }
`;

export default Projects;
