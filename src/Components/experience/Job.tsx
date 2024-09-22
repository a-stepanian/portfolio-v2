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
      <header className={"job-header"}>
        <h4 className="company-name">
          <a href={companyUrl} target="_blank" rel="noreferrer">
            {company}
          </a>
        </h4>
        <h3 className="job-title">{title}</h3>
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
  z-index: 999;
  width: 100%;
  color: ${props => props.theme.primaryColor};
  .job-header {
    z-index: 999;
    & * {
      z-index: 999;
    }
    position: sticky;
    top: 0;
    padding: 4px 34px 8px 1rem;
    box-shadow: ${props =>
      props.theme.siteBg === "#29222a" ? "rgb(29, 211, 176) 0 0 4px, rgb(29, 211, 176) 0 0 4px inset" : "none"};
    border: 2px solid ${props => (props.theme.siteBg === "#29222a" ? "rgb(29, 211, 176)" : "#555")};
    border-radius: ${props => (props.theme.siteBg === "#29222a" ? "0" : "3px")};
    background: ${props => (props.theme.siteBg === "#29222a" ? "#393850ef" : "#eee")};
    .job-title {
      position: relative;
      z-index: 999;
      background-color: ${props => (props.theme.siteBg === "#29222a" ? "#3938507a" : "#eee")};
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    .company-name {
      position: relative;
      z-index: 999;
      background-color: ${props => (props.theme.siteBg === "#29222a" ? "#3938507a" : "#eee")};
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

  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      color: ${props => props.theme.jobInfoTextColor};
      padding-bottom: 3rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border-right: none;
    .job-header {
      padding: 1.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .job-title {
        height: auto;
        display: flex;
        align-items: center;
      }
      a {
        position: relative;
        width: auto;
      }
    }
    ul {
      .duty {
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 992px) {
    .job-header {
      align-items: center;
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default Job;
