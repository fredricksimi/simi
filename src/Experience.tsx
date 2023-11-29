import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "./assets/Fredrick_Simi_Resume.pdf";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  const skillStyle = {
    backgroundColor: "#f9ca24",
    color: "#000",
    fontSize: ".75rem",
    lineHeight: "1.5rem",
    fontWeight: 500,
    borderRadius: "9999px",
  };
  const titleStyle = {
    marginRight: "40px",
    lineHeight: 1.25,
    fontWeight: 500,
    fontSize: "1.1rem",
  };
  const descStyle = {
    fontSize: ".91rem",
    lineHeight: 1.5,
    color: "rgb(226 232 240)",
  };
  const timeStyle = {
    color: "rgb(159, 179, 206)",
    fontWeight: 600,
  };
  return (
    <>
      <div className="d-none d-sm-block">
        <main style={{ marginTop: "150px", marginRight: "" }} id="aboutsection">
          <p>
            I'm a software developer based in Kenya, specializing in building
            beautiful and intuitive websites and applications. I enjoy building
            things that live on the internet. I love everything that deals with
            technology, from simply cropping a photo to something as
            sophisticated as Machine Learning and Artificial Intelligence.
          </p>
          <p>
            As a Lead Instructor at Code First Girls, I'm deeply engaged in
            promoting diversity in the tech field through my role. My
            responsibilities include teaching Python and SQL, offering support
            to students via Slack, and mentoring them on their career journeys.
          </p>
        </main>
        <div style={{ marginTop: "6rem" }} id="experiencesection">
          <div>
            <div className="row p-3 hoverdiv">
              <div className="col-4" style={timeStyle}>
                FEB 2023 - PRESENT
              </div>
              <div className="col-8">
                <p style={titleStyle}>Lead Instructor · Code First Girls</p>
                <p style={descStyle}>
                  Leverage expertise in Software Development to teach coding
                  concepts and best practices to students, including data
                  structures, algorithms, and object-oriented programming.
                </p>
                <p style={descStyle}>
                  Contribute to the organization's outreach efforts by promoting
                  the program to potential students and partners, and sharing
                  insights on the importance of diversity and representation in
                  tech.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    SQL
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Pandas
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Data Analysis
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Coaching & Mentoring
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-5 p-3 hoverdiv">
              <div className="col-4" style={timeStyle}>
                AUG 2022 - NOV 2022
              </div>
              <div className="col-8">
                <p style={titleStyle}>
                  Backend Developer · ELAN Dome Consultants
                </p>
                <p style={descStyle}>
                  Designed, developed and maintained the backend architecture of
                  the educational consultancy firm's online platform, ensuring
                  its stability and scalability.
                </p>
                <p style={descStyle}>
                  Implemented custom business logic and algorithms to support
                  the firm's core functionalities.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Git
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    AWS
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Leadership
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Web Development
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Agile
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-5 p-3 hoverdiv">
              <div className="col-4" style={timeStyle}>
                APR 2022 - AUG 2022
              </div>
              <div className="col-8">
                <p style={titleStyle}>
                  Backend Developer · Pamoja Community Based Organization
                </p>
                <p style={descStyle}>
                  Developed and maintained web applications for the Non-Profit
                  Organization. Contributed to the development of new features
                  and improvements to existing ones, based on user feedback and
                  analytics.
                </p>
                <p style={descStyle}>
                  Ensured website accessibility and compliance with web
                  standards and regulations.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Vue.JS
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    AWS
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Git
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Web Development
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Agile
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-5 p-3 hoverdiv">
              <div className="col-4" style={timeStyle}>
                NOV 2021 - APR 2022
              </div>
              <div className="col-8">
                <p style={titleStyle}>Backend Developer · EPIC Consultants</p>
                <p style={descStyle}>
                  Designed and developed web applications, ensuring highquality
                  code and efficient performance. Participated in code reviews,
                  providing constructive feedback to colleagues and
                  incorporating feedback into future development efforts.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Git
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Collaboration
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Web Development
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-5 p-3 hoverdiv">
              <div className="col-4" style={timeStyle}>
                FEB 2021 - APR 2022
              </div>
              <div className="col-8">
                <p style={titleStyle}>Backend Developer · StepWise</p>
                <p style={descStyle}>
                  Worked closely with the front-end development team to ensure
                  seamless integration and optimal performance of the backend
                  applications. Worked with project managers to prioritize and
                  plan development tasks based on business requirements and
                  deadlines.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Agile
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Collaboration
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Software Development
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Linux
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <a href={resume} target="_blank">
                  <p style={{ marginRight: "40px" }}>
                    View Full Résumé <FontAwesomeIcon icon={faArrowRight} />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View Here */}
      <div className="d-block d-sm-none">
        <main className="mx-2" id="aboutsection">
          <p>
            I'm a software developer based in Kenya, specializing in building
            beautiful and intuitive websites and applications. I enjoy building
            things that live on the internet. I love everything that deals with
            technology, from simply cropping a photo to something as
            sophisticated as Machine Learning and Artificial Intelligence.
          </p>
          <p>
            As a Lead Instructor at Code First Girls, I'm deeply engaged in
            promoting diversity in the tech field through my role. My
            responsibilities include teaching Python and SQL, offering support
            to students via Slack, and mentoring them on their career journeys.
          </p>
        </main>
        <div style={{ marginTop: "4rem" }} id="experiencesection">
          <h3 className="mx-2" style={{letterSpacing:'.1em',fontWeight:700,fontSize:'1.175rem', lineHeight:'1.25rem'}}>EXPERIENCE</h3>
          <div>
            <div className="mt-4">
              <div className="mx-2" style={{color:'rgb(159, 179, 206)',fontWeight: 600, fontSize:'.75rem'}}>
                FEB 2023 - PRESENT
              </div>
              <p className="mx-2 mt-2" style={{lineHeight:1.23,fontWeight:500,fontSize:'1rem'}}>Lead Instructor · Code First Girls</p>
              <div className="mx-2">
                <p style={{lineHeight:1.5, fontSize:'0.875rem', marginTop:'0.5rem'}}>
                  Leverage expertise in Software Development to teach coding
                  concepts and best practices to students, including data
                  structures, algorithms, and object-oriented programming.
                </p>
                <p style={{lineHeight:1.5, fontSize:'0.875rem', marginTop:'0.5rem'}}>
                  Contribute to the organization's outreach efforts by promoting
                  the program to potential students and partners, and sharing
                  insights on the importance of diversity and representation in
                  tech.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    SQL
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Pandas
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Data Analysis
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Coaching & Mentoring
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="mx-2" style={{color:'rgb(159, 179, 206)',fontWeight: 600, fontSize:'.75rem'}}>
                AUG 2022 - NOV 2022
              </div>
              <p className="mx-2 mt-2" style={{lineHeight:1.23,fontWeight:500,fontSize:'1rem'}}>
                  Backend Developer · ELAN Dome Consultants
                </p>
              <div className="mx-2">
                <p style={{lineHeight:1.5, fontSize:'0.875rem', marginTop:'0.5rem'}}>
                  Designed, developed and maintained the backend architecture of
                  the educational consultancy firm's online platform, ensuring
                  its stability and scalability.
                </p>
                <p style={{lineHeight:1.5, fontSize:'0.875rem', marginTop:'0.5rem'}}>
                  Implemented custom business logic and algorithms to support
                  the firm's core functionalities.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Git
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    AWS
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Leadership
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Web Development
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Agile
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="mx-2" style={{color:'rgb(159, 179, 206)',fontWeight: 600, fontSize:'.75rem'}}>
                APR 2022 - AUG 2022
              </div>
              <p className="mx-2 mt-2" style={{lineHeight:1.23,fontWeight:500,fontSize:'1rem'}}>
                  Backend Developer · Pamoja Community Based Organization
                </p>
              <div className="mx-2">
                <p style={{lineHeight:1.5, fontSize:'0.875rem', marginTop:'0.5rem'}}>
                  Developed and maintained web applications for the Non-Profit
                  Organization. Contributed to the development of new features
                  and improvements to existing ones, based on user feedback and
                  analytics.
                </p>
                <p style={{lineHeight:1.5, fontSize:'0.875rem', marginTop:'0.5rem'}}>
                  Ensured website accessibility and compliance with web
                  standards and regulations.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Vue.JS
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    AWS
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Git
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Web Development
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Agile
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="mx-2" style={{color:'rgb(159, 179, 206)',fontWeight: 600, fontSize:'.75rem'}}>
                NOV 2021 - APR 2022
              </div>
              <p className="mx-2 mt-2" style={{lineHeight:1.23,fontWeight:500,fontSize:'1rem'}}>Backend Developer · EPIC Consultants</p>
              <div className="mx-2">
                <p style={descStyle}>
                  Designed and developed web applications, ensuring highquality
                  code and efficient performance. Participated in code reviews,
                  providing constructive feedback to colleagues and
                  incorporating feedback into future development efforts.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Git
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Collaboration
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Web Development
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="mx-2" style={{color:'rgb(159, 179, 206)',fontWeight: 600, fontSize:'.75rem'}}>
                FEB 2021 - APR 2022
              </div>
              <p className="mx-2 mt-2" style={{lineHeight:1.23,fontWeight:500,fontSize:'1rem'}}>Backend Developer · StepWise</p>
              <div className="mx-2">
                <p style={{lineHeight:1.5, fontSize:'0.875rem', marginTop:'0.5rem'}}>
                  Worked closely with the front-end development team to ensure
                  seamless integration and optimal performance of the backend
                  applications. Worked with project managers to prioritize and
                  plan development tasks based on business requirements and
                  deadlines.
                </p>
                <p className="pt-2">
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Agile
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    JavaScript
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Python
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Collaboration
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Software Development
                  </span>
                  <span
                    className="badge py-1 px-3 mx-1 mb-2"
                    style={skillStyle}
                  >
                    Linux
                  </span>
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <a href={resume} target="_blank">
                  <p className="mx-2" style={{ marginRight: "40px" }}>
                    <b>View Full Résumé</b> <FontAwesomeIcon icon={faArrowRight} />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Mobile View */}
    </>
  );
};

export default Experience;
