import { useState } from "react";
import styled from "styled-components";
import InfoToggleButton from "./InfoToggleButton";
import { RiExternalLinkFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { TProject } from "../../data";

interface IIndividualProjectProps {
  site: TProject;
}

const IndividualProject = (props: IIndividualProjectProps) => {
  const { site } = props;

  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const toggleInfo = () => setIsInfoOpen(prev => !prev);

  return (
    <Wrapper style={{ gridColumn: `${site?.videoUrl ? "1/3" : ""}` }}>
      <div className="img-container">
        {site.videoUrl ? (
          <video
            id="menuwebVideo"
            width="320"
            controls
            controlsList="nodownload"
            autoPlay={site.videoUrl.includes("applyyourself")}
            muted>
            <source src={site.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={`/portfolio-v2/images/${site.thumbnail}`}
            alt={`screenshot of ${site.title} website`}
            onClick={toggleInfo}
            loading="lazy"
          />
        )}
        {!site.videoUrl && (
          <div className={`info ${isInfoOpen ? "info-open" : ""}`}>
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
        )}
      </div>
      <footer>
        <div className="my-row">
          <div className="my-column" style={{ width: site.videoUrl ? "100%" : "calc(100% - 48px)" }}>
            <h3 className="project-title">{site.title}</h3>
            <p>{site.description}</p>
          </div>
          {!site.videoUrl && <InfoToggleButton isInfoOpen={isInfoOpen} toggleInfo={toggleInfo} />}
        </div>
        {site.videoUrl && (
          <div className="link-wrapper">
            <div className="tech-list">
              {site.builtWith.map((tech, index) => {
                return <p key={index}>{tech}</p>;
              })}
            </div>
            <div className="links">
              {site.repo2 ? (
                <>
                  <a href={site.repo} target="_blank" rel="noreferrer" title="Client Repo">
                    <BsGithub className="repo" />
                    <span>Client</span>
                  </a>
                  <a href={site.repo2} target="_blank" rel="noreferrer" title="Server Repo">
                    <BsGithub className="repo" />
                    <span>Server</span>
                  </a>
                </>
              ) : (
                <a href={site.repo} target="_blank" rel="noreferrer" title="Git Repo">
                  <BsGithub className="repo" />
                  <span>Repo</span>
                </a>
              )}
              <a href={site.url} target="_blank" rel="noreferrer" title="Go to Website">
                <RiExternalLinkFill className="web" />
                <span>Go</span>
              </a>
            </div>
          </div>
        )}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  color: #333;
  background-color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#ecd397")};
  border-radius: ${props => props.theme.panelRadius};
  padding: 0.5rem;
  margin: 36px 12px;
  box-shadow: ${props => (props.theme.siteBg === "#29222a" ? "0 0 10px #a0a4c5" : "3px 3px 7px #96a59e")};
  border: ${props => (props.theme.siteBg === "#29222a" ? "none" : "2px dashed #bbb")};
  .img-container {
    display: flex;
    justify-content: center;
    position: relative;
    background-color: ${props => props.theme.blackColor};
    border-radius: 4px;
    overflow: hidden;
    box-shadow: ${props => (props.theme.siteBg === "#29222a" ? "0 3px 12px #000d83b2" : "0 0 16px #294a5a")};
    video {
      width: 100% !important;
      height: auto !important;
    }
    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
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
        background-color: #333;
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
        font-size: 2rem;
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
    margin-top: 12px;
    .my-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: flex-end;
      .my-column {
        .project-title {
          margin-bottom: 8px;
          font-size: 0.8rem;
          font-weight: 900;
        }
        p {
          font-size: 1rem;
          line-height: 1rem;
          color: #333;
        }
      }
    }
    .tech-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 16px 0 12px;

      p {
        font-size: 0.7rem;
        margin: 0.2rem;
        background-color: #333;
        color: ${props => (props.theme.siteBg === "#29222a" ? props.theme.primaryColor : "#ecd397")};
        padding: 3px 5px;
        border-radius: 2px;
        white-space: nowrap;
      }
    }
    .link-wrapper {
      margin-bottom: 8px;
      .links {
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
      a {
        margin: 0 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #333;
        .repo {
          font-size: 1.8rem;
        }
        .web {
          font-size: 2rem;
        }
        span {
          font-size: 0.7rem;
          font-weight: 900;
        }
      }
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
    footer {
      .link-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .tech-list {
        justify-content: start;
      }
    }
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
  @media (min-width: 768px) {
    padding: 1rem;
    margin: 36px;
  }
  @media (min-width: 992px) {
    padding: 1rem;
    margin: 24px;
  }
`;

export default IndividualProject;
