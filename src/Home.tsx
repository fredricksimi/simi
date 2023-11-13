import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { About } from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const iconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    marginRight: "1.25rem",
  };
  return (
    <>
      <div className="container" style={{ maxWidth: "1280px" }}>
        <div className="row">
            <div
              className="col-md-6 d-none d-sm-block"
              style={{ position: "sticky", top: 0, height: "100vh" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  height: "100vh",
                }}
              >
                <div className="mx-5" style={{ width: "100%" }}>
                  <About />
                </div>
                <div
                  className="d-flex align-items-start mx-5 mb-5 flex-column"
                  style={{ width: "100%" }}
                >
                  <p>
                    <span>
                      <a
                        href="https://github.com/fredricksimi"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://linkedin.com/in/fredricksimi"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://fredricksimi.hashnode.dev"
                        target="_blank"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <FontAwesomeIcon icon={faSquareRss} style={iconStyle} />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 scrollable-section  d-none d-sm-block"
              style={{
                height: "100vh",
                overflowY: "auto",
                scrollbarWidth: "none",
              }}
            >
              <Experience />
              <Projects />
            </div>
        </div>
        {/* Mobile View Here */}
        <div className="row">
          <div className="d-block d-sm-none">
            <div className="col-12">
              <div className="mx-2" style={{ width: "100%" }}>
                <About />
              </div>
              <div
                className="d-flex align-items-start mx-2 mb-5 flex-column"
                style={{ width: "100%" }}
              >
                <p className="mt-3">
                  <span>
                    <a
                      href="https://github.com/fredricksimi"
                      target="_blank"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://linkedin.com/in/fredricksimi"
                      target="_blank"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://fredricksimi.hashnode.dev"
                      target="_blank"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <FontAwesomeIcon icon={faSquareRss} style={iconStyle} />
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <h3
              className="mx-2 mt-5 mb-4"
              style={{
                letterSpacing: ".1em",
                fontWeight: 700,
                fontSize: "1.175rem",
                lineHeight: "1.25rem",
              }}
            >
              ABOUT
            </h3>
            <Experience />
            <Projects />
          </div>

          {/* End of Mobile View */}
        </div>
      </div>
    </>
  );
};

export default Home;
