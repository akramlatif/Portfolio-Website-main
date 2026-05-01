import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Student</h4>
                <h5>University — BS Information Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently in my 4th semester, studying core CS fundamentals including
              C++, Java, Python, Data Structures, Databases, AI, Machine Learning,
              Robotics, Information Security, and Cyber Security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Taught Full Stack & App Developer</h4>
                <h5>Independent Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Independently mastered JavaScript, TypeScript, React, Node.js,
              Next.js, Express.js, React Native, MySQL, and AWS. Built 6+ real-world
              projects spanning AI security systems, SaaS platforms, and mobile apps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer</h4>
                <h5>Code4all</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to real-world development projects, collaborating with
              teams to build scalable web applications, and applying AI-driven
              solutions to solve practical problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
