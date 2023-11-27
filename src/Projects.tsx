import showApp from "./assets/ShowApp.png";
import gameHub from './assets/GameHub.png';
import elanDome from './assets/ElanDome.png';
import blogArticle from './assets/blogArticle.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";

const Projects = () => {
  const skillStyle ={
    backgroundColor:'#f9ca24', color: '#000', fontSize:'.75rem', lineHeight:'1.5rem', fontWeight:500,borderRadius:'9999px'
  }
  const titleStyle = {
    marginRight: "40px", lineHeight:1.25, fontWeight:500,fontSize: '1.1rem'
  }
  const descStyle = {
    fontSize:'.91rem', lineHeight:1.5, color:'rgb(226 232 240)'
  }
  return (
    <>
    <div className="d-none d-sm-block">
      <div style={{ marginTop: "6rem" }} id="projectsection">
        <div className="row p-3 hoverdiv">
          <div className="col-4">
            <img
              src={showApp}
              className="img-fluid"
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div className="col-8">
            <h5 style={titleStyle}>ShowApp</h5>
            <p className="mt-3" style={descStyle}>
                Wep App for visualizing Movie(s) & TV Show(s) data, trending entries, top rated entries, search functionality and more.
            </p>
            <p className="pt-2">
              <a href="https://show-app-sigma.vercel.app/" target="_blank">
              <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>Visit project</span></span>
              </a>
              <a href="https://github.com/fredricksimi/ShowApp" target="_blank">
              <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>GitHub Repo</span></span>
              </a>
            </p>
            <p className="pt-2">
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>React</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>TMDb API</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Git</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Vercel</span>
            </p>
          </div>
        </div>
        <div className="row mt-5 p-3 hoverdiv">
          <div className="col-4">
            <img
              src={gameHub}
              className="img-fluid"
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div className="col-8">
            <h5 style={titleStyle}>GameHub</h5>
            <p className="mt-3" style={descStyle}>
                Wep App for visualizing Game(s) data, including game platforms, search functionality, genres and more.
            </p>
            <p className="pt-2">
              <a href="https://game-hub-five-indol.vercel.app/" target="_blank">
                <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>Visit project</span></span>
              </a>
              <a href="https://github.com/fredricksimi/game-hub" target="_blank">
                <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>GitHub Repo</span></span>
              </a>
            </p>
            <p className="pt-2">
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>React</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>RAWG API</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Git</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Vercel</span>
            </p>
          </div>
        </div>
        <div className="row my-5 p-3 hoverdiv">
          <div className="col-4">
            <img
              src={elanDome}
              className="img-fluid"
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div className="col-8">
            <h5 style={titleStyle}>ELAN Dome Consultants</h5>
            <p className="mt-3" style={descStyle}>
                Worked and collaborated with a client to create their official website for their company.
            </p>
            <p className="pt-2">
              <a href="https://elandome-1.vercel.app/" target="_blank">
              <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>Visit project</span></span>
              </a>
            </p>
            <p className="pt-2">
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>JavaScript</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>AWS</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Git</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>SQL</span>
            </p>
          </div>
        </div>
        <div className="row my-5 p-3 hoverdiv">
          <div className="col-4">
            <img
              src={blogArticle}
              className="img-fluid"
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div className="col-8">
            <h5 style={titleStyle}>2023</h5>
            <p className="mt-3" style={descStyle}>
            Deploying a High Availability Web Application on AWS
            </p>
            <p className="pt-2">
              <a href="https://fredricksimi.hashnode.dev/deploying-a-high-availability-web-application-on-aws" target="_blank">
              <span className="mx-2 mb-2"><FontAwesomeIcon icon={faBookOpen} style={{fontSize:'12px'}}/> <span style={{fontSize:'14px'}}>Read Blog</span></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
      
    {/* Mobile View Here */}
    <div className="d-block d-sm-none">
      <h3 className="mt-5 mx-2" style={{letterSpacing:'.1em',fontWeight:700,fontSize:'1.175rem', lineHeight:'1.25rem'}}>PROJECTS</h3>
    <div style={{ marginTop: "2rem" }} id="projectsection">
        <div className="mx-2 mt-4">
        <h5 style={titleStyle}>ShowApp</h5>
        <p className="mt-3" style={descStyle}>
            Wep App for visualizing Movie(s) & TV Show(s) data, trending entries, top rated entries, search functionality and more.
        </p>
        <div>
          <img
            src={showApp}
            className="img-fluid"
            style={{ width: "150px", height: "auto", borderRadius: "5px" }}
          />
        </div>
        <div>
          <p className="pt-2">
            <a href="https://show-app-sigma.vercel.app/" target="_blank">
            <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>Visit project</span></span>
            </a>
            <a href="https://github.com/fredricksimi/ShowApp" target="_blank">
            <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>GitHub Repo</span></span>
            </a>
          </p>
          <p className="pt-2">
            <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>React</span>
            <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>TMDb API</span>
            <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Tailwind</span>
            <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Vercel</span>
          </p>
        </div>
        </div>
        <div className="mx-2 mt-5">
        <h5 style={titleStyle}>GameHub</h5>
        <p className="mt-3" style={descStyle}>
            Wep App for visualizing Game(s) data, including game platforms, search functionality, genres and more.
        </p>
          <div>
            <img
              src={gameHub}
              className="img-fluid"
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div>
            <p className="pt-2">
              <a href="https://game-hub-five-indol.vercel.app/" target="_blank">
                <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>Visit project</span></span>
              </a>
              <a href="https://github.com/fredricksimi/game-hub" target="_blank">
                <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>GitHub Repo</span></span>
              </a>
            </p>
            <p className="pt-2">
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>React</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>RAWG API</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Git</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Vercel</span>
            </p>
          </div>
        </div>
        <div className="mx-2 mt-5">
        <h5 style={titleStyle}>ELAN Dome Consultants</h5>
        <p className="mt-3" style={descStyle}>
            Worked and collaborated with a client to create their official website for their company.
        </p>
          <div>
            <img
              src={elanDome}
              className="img-fluid"
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div>
            <p className="pt-2">
              <a href="https://elandome-1.vercel.app/" target="_blank">
              <span className="mx-2 mb-2"><FontAwesomeIcon icon={faLink} style={{fontSize:'10px'}}/> <span style={{fontSize:'14px'}}>Visit project</span></span>
              </a>
            </p>
            <p className="pt-2">
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>JavaScript</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>AWS</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>Git</span>
              <span className="badge py-1 px-3 mx-1 mb-2" style={skillStyle}>SQL</span>
            </p>
          </div>
        </div>
        <div className="mx-2 my-5">
        <h5 style={titleStyle}>2023</h5>
        <p className="mt-3" style={descStyle}>
          Deploying a High Availability Web Application on AWS
        </p>
          <div>
            <img
              src={blogArticle}
              className="img-fluid"
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div>            
            <p className="pt-2">
              <a href="https://fredricksimi.hashnode.dev/deploying-a-high-availability-web-application-on-aws" target="_blank">
              <span className="mx-2 mb-2"><FontAwesomeIcon icon={faBookOpen} style={{fontSize:'12px'}}/> <span style={{fontSize:'14px'}}>Read Blog</span></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* End of Mobile View */}
    </>
  );
};

export default Projects;
