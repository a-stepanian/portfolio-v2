import { useState } from "react";
import styled from "styled-components";
import InfoToggleButton from "./InfoToggleButton";
import { RiExternalLinkFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { TProject } from "../../data";

interface IIndividualProjectProps {
  site: TProject;
}

const IndividualProject = (props: IIndividualProjectProps) => {
  const { site } = props;

  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const toggleInfo = () => setIsInfoOpen(prev => !prev);

  return (
    <Wrapper>
      {site.repo2 && (
        <div className="featured">
          <BsFillStarFill className="star" />
          <h4>Featured Project</h4>
          <BsFillStarFill className="star" />
        </div>
      )}

      <div className="img-container">
        <img
          src={`/portfolio-v2/images/${site.thumbnail}`}
          alt={`screenshot of ${site.title} website`}
          onClick={toggleInfo}
          loading="lazy"
        />
        <div className={`${isInfoOpen ? "info info-open" : "info"}`}>
          <div>
            <h4>Built with:</h4>
            <div className="tech">
              {site.builtWith.map((tech, index) => {
                return <p key={index}>{tech}</p>;
              })}
            </div>
          </div>
          <div className="links">
            <a href={site.url} target="_blank" rel="noreferrer">
              <RiExternalLinkFill className="web" />
              <span>Website</span>
            </a>
            {site.repo2 ? (
              <>
                <a href={site.repo} target="_blank" rel="noreferrer">
                  <BsGithub />
                  <span>Client</span>
                </a>
                <a href={site.repo2} target="_blank" rel="noreferrer">
                  <BsGithub />
                  <span>Server</span>
                </a>
              </>
            ) : (
              <a href={site.repo} target="_blank" rel="noreferrer">
                <BsGithub />
                <span>Git Repo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <footer onClick={toggleInfo}>
        <div>
          <h3 className="project-title">{site.title}</h3>
          <InfoToggleButton isInfoOpen={isInfoOpen} />
        </div>
        <p>{site.description}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  color: ${props => props.theme.blackColor};
  background-color: ${props => props.theme.primaryColor};
  border: 3px solid ${props => props.theme.blackColor};
  padding: 1rem;
  max-width: 25rem;
  .featured {
    position: absolute;
    top: calc(-2rem - 3px);
    left: calc(50% - 7.5rem - 3px);
    width: 15rem;
    background-color: ${props => props.theme.blackColor};
    color: goldenrod;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      font-size: 1.2rem;
    }
    .star {
      margin: 0 0.5rem;
      font-size: 1rem;
      color: gold;
      animation: rotate 20s linear infinite;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .img-container {
    position: relative;
    background-color: ${props => props.theme.blackColor};
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    padding: 0 0.5rem;
    background-color: ${props => props.theme.blackColor};
    transition: height 0.5s;
    box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.1), inset 3px 0 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-size: 0.8rem;
      font-weight: 900;
    }
    .tech {
      display: flex;
      flex-wrap: wrap;
      p {
        font-size: 0.7rem;
        margin: 0.2rem;
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.blackColor};
        padding: 0 0.3rem 0.2rem;
        white-space: nowrap;
      }
    }
    .links {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 1rem;
    }
    a {
      height: 4.2rem;
      width: 4.2rem;
      color: ${props => props.theme.primaryColor};
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      .web {
        font-size: 1.3rem;
      }
      span {
        font-size: 0.8rem;
        font-weight: 900;
      }
    }
  }
  .info-open {
    height: 100%;
  }

  footer {
    margin-top: 0.8rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .project-title {
        font-size: 1.8rem;
        font-weight: 600;
        padding: 0;
      }
    }
    p {
      padding: 0.5rem 0;
      color: ${props => props.theme.blackColor};
    }
  }

  @media (min-width: 330px) {
    .info {
      .tech {
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
  @media (min-width: 360px) {
    .info {
      .tech {
        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 480px) {
    img:hover {
      cursor: pointer;
    }
    .info:hover {
      cursor: auto;
    }
    .info {
      h4 {
        font-size: 1rem;
      }
      .tech {
        display: flex;
        flex-wrap: wrap;
        p {
          padding: 0 0.3rem 0.2rem;
          font-size: 1.1rem;
        }
      }
      a {
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        .web {
          font-size: 2.3rem;
        }
        span {
          font-size: 1rem;
          font-weight: 900;
        }
      }
    }
    footer {
      div {
        .project-title {
          font-size: 2.8rem;
        }
      }
    }
  }
`;

export default IndividualProject;
