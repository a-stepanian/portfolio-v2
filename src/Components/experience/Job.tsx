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
        <div className="title-company">
          <h3>{title}</h3>
        </div>
        <a href={companyUrl} target="_blank" rel="noreferrer">
          <img src={logo} alt={`${company} logo`} />
          <h4>{company}</h4>
        </a>
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
  width: 100%;
  color: ${props => props.theme.blackColor};
  background-color: var(--white-opaque);
  .job-header {
    width: 100%;
    overflow-x: hidden;
    z-index: 1;
    position: sticky;
    top: 6.95rem;
    width: 100%;
    height: 6.3rem;
    background: ${props => props.theme.blackColor};
    padding-right: 7rem;
    padding-left: 0.3rem;
    border-bottom: var(--small-border);
    .title-company {
      height: 100%;
      display: flex;
      align-items: center;
    }
    h3 {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }

    a {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 0 0.1rem 0.25rem;
      height: 1.2rem;
      text-decoration: none;
      background-color: var(--main);
      display: flex;
      align-items: center;
      width: 100%;
      h4 {
        padding: 0.1rem;
        color: ${props => props.theme.blackColor};
        font-size: 0.6rem;
        letter-spacing: -0.02rem;
        white-space: nowrap;
      }
      img {
        height: 80%;
        margin: 0.1rem 0.2rem;
      }
    }
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    .duty {
      padding-bottom: 3rem;
      font-size: 1rem;
    }
  }

  /* ------------- */
  /* MEDIA QUERIES */
  /* ------------- */

  @media (min-width: 330px) {
    .job-header {
      h3 {
        font-size: 1.8rem;
        line-height: 1.8rem;
      }
    }
  }

  @media (min-width: 380px) {
    .job-header {
      h3 {
        margin-top: 0.4rem;
        font-size: 1.9rem;
        line-height: 1.8rem;
      }
    }
  }

  @media (min-width: 520px) {
    .job-header {
      a {
        padding: 0 0 0.25rem 0.25rem;
        height: 1.75rem;
        h4 {
          padding: 0.1rem;
          color: ${props => props.theme.blackColor};
          font-size: 0.75rem;
          letter-spacing: -0.05rem;
          white-space: nowrap;
        }
        img {
          height: 80%;
          margin: 0.1rem 0.2rem;
        }
      }
    }
  }

  @media (min-width: 600px) {
    .job-header {
      h3 {
        margin-top: 0.4rem;
        font-size: 2.1rem;
        line-height: 1.9rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border: var(--small-border);
    border-right: none;
    .job-header {
      padding: 0.3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .title-company {
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
    border: var(--small-border);
    .job-header {
      align-items: center;
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default Job;
