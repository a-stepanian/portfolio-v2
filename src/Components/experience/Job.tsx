import styled from "styled-components";
import { TExperience } from "../../data";

interface IJobProps {
  job: TExperience;
}

const Job = (props: IJobProps) => {
  const { job } = props;
  const { company, companyUrl, title, description, id, logo } = job;

  return (
    <Wrapper>
      <header className={`job-header ${id}`}>
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
    top: 10px;
    background: #393850e6;
    padding: 4px 1rem 8px;
    margin: 0 34px 0 8px;
    box-shadow: rgb(29, 211, 176) 0 0 4px, rgb(29, 211, 176) 0 0 4px inset;
    .job-title {
      position: relative;
      z-index: 999;
      background-color: #3938507a;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    .company-name {
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
      padding: 0.3rem;
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
