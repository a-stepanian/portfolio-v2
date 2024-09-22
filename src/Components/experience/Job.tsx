import styled from "styled-components";
import { TExperience } from "../../data";

interface IJobProps {
  job: TExperience;
}

const Job = (props: IJobProps) => {
  const { job } = props;
  const { company, companyUrl, title, description, id, logo } = job;

  return (
    <Wrapper id={id}>
      <header className="job-header">
        <h3 className="job-title">{title}</h3>
        <h4 className="company-name">
          <a href={companyUrl} target="_blank" rel="noreferrer">
            {company}
          </a>
        </h4>
      </header>
      <ul>
        {description?.map((jobDuty: string, index: number) => {
          return (
            <li key={index} className="duty">
              {jobDuty}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  z-index: 10;
  width: 100%;
  color: ${props => props.theme.primaryColor};
  .job-header {
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
    .job-title {
      position: relative;
      z-index: 10;
      color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.jobInfoTextColor : "#eee")};
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    .company-name {
      position: relative;
      z-index: 10;
      line-height: 10px;
      a {
        color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#ccc")};
        text-decoration: none;
        font-size: 0.6rem;
        letter-spacing: -0.02rem;
        white-space: nowrap;
      }
    }
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      color: ${props => (props.theme.siteBg === "#29222a" ? "#ddd" : "#222")};
      padding-bottom: 3rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    border-right: none;
    .job-header {
      top: 55px;
      padding: 1rem 3rem;
      display: flex;
      flex-direction: column;
      .job-title {
        height: auto;
        margin-bottom: 8px;
      }
      a {
        position: relative;
        width: auto;
      }
    }
    ul {
      padding: 3rem 5rem;
      .duty {
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 992px) {
    .job-header {
      .job-title {
        font-size: 2.2rem;
      }
    }
    ul {
      padding: 4rem 10vw;
      .duty {
        max-width: 600px;
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 1200px) {
    ul {
      padding: 5rem 15vw;
      .duty {
        font-size: 1.3rem;
      }
    }
  }
`;

export default Job;
