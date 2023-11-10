import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { About } from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  const iconStyle = {
    width:'1.5rem', height:'1.5rem', marginRight:'1.25rem'
  }
  return (
    <>
      <div className="container" style={{ maxWidth: "1280px" }}>
        <div className="row">
          <div className="col-6 sticky-section" style={{position:'sticky', top:0, height: '100vh'}}>
            <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start',height: '100vh'}}>
              <div style={{width: '100%'}}>
              <About />
              </div>
              <div className="d-flex align-items-start mx-5 mb-5 flex-column" style={{width:'100%'}}>
                <p>
                  <span>
                    <a href="https://github.com/fredricksimi" target="_blank" style={{textDecoration:'none', color:'#fff'}}>
                      <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                    </a>
                  </span>
                  <span>
                    <a href="https://linkedin.com/in/fredricksimi" target="_blank" style={{textDecoration:'none', color:'#fff'}}>
                      <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
                    </a>
                  </span>
                  <span>
                    <a href="https://fredricksimi.hashnode.dev" target="_blank" style={{textDecoration:'none', color:'#fff'}}>
                    <FontAwesomeIcon icon={faSquareRss} style={iconStyle} />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 scrollable-section" style={{height: '100vh', overflowY: 'auto', scrollbarWidth: 'none'}}>
            <Experience/>
            <Projects/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
