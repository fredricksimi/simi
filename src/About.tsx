export const About = () => {
  return (
    <>
      <div
        className="d-flex align-items-start flex-column d-none d-sm-block"
        style={{ marginTop: "150px" }}
      >
        <h2 style={{ fontSize: "48px", color:'#e2e8f0', fontWeight: "bold" }}>Fredrick Simi</h2>
        <h4 style={{fontSize:'20px', color:'#e2e8f0', marginTop:'7px'}}>Software Engineer</h4>
        <p style={{marginTop:'16px',color:'rgb(159, 179, 206)'}}>
          I build accessible, inclusive products and <br />
          digital experiences for the web.
        </p>
      </div>
      {/* Mobile View Here */}
      <div
        className="d-flex align-items-start flex-column d-block d-sm-none"
        style={{ marginTop: "50px" }}
      >
        <h2 style={{ fontSize: "48px", color:'#e2e8f0', fontWeight: "bold" }}>Fredrick Simi</h2>
        <h4 style={{fontSize:'20px', color:'#e2e8f0', marginTop:'7px'}}>Software Engineer</h4>
        <p style={{marginTop:'16px',color:'rgb(159, 179, 206)'}}>
          I build accessible, inclusive products and <br />
          digital experiences for the web.
        </p>
      </div>
      {/* End of Mobile View */}
    </>
  );
};
