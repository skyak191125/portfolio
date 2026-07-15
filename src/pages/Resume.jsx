import "./Resume.css";

import {
  FaDownload,
  FaEye,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

function Resume() {
  return (
    <section className="resume">

      {/* Heading */}

      <div className="resume-title">

        <h1>Resume</h1>

        <p>
          My education, experience, skills and certifications.
        </p>

      </div>

      {/* Resume Card */}

      <div className="resume-card">

        <h2>Akash Kumar</h2>

        <h3>Frontend React Developer</h3>

        <p>
          Passionate Frontend Developer focused on creating
          responsive, modern and user-friendly web applications
          using React and JavaScript.
        </p>

        <div className="resume-buttons">

          <a
            href="/resume.pdf"
            download
            className="download-btn"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="preview-btn"
          >
            <FaEye />
            View Resume
          </a>

        </div>

      </div>

      {/* Education */}

      <div className="resume-section">

        <h2>
          <FaGraduationCap />
          Education
        </h2>

        <div className="timeline">

          <div className="timeline-card">

            <h3>2023</h3>

            <p>
              Started learning HTML & CSS
            </p>

          </div>

          <div className="timeline-card">

            <h3>2024</h3>

            <p>
              Learned JavaScript and React.js
            </p>

          </div>

          <div className="timeline-card">

            <h3>2025</h3>

            <p>
              Building Full Stack Projects
            </p>

          </div>

        </div>

      </div>

      {/* Experience */}

      <div className="resume-section">

        <h2>
          <FaBriefcase />
          Experience
        </h2>

        <div className="timeline">

          <div className="timeline-card">

            <h3>Portfolio Website</h3>

            <p>
              Built responsive personal portfolio using React.
            </p>

          </div>

          <div className="timeline-card">

            <h3>Weather App</h3>

            <p>
              Created weather application using API integration.
            </p>

          </div>

          <div className="timeline-card">

            <h3>E-Commerce UI</h3>

            <p>
              Designed responsive shopping website interface.
            </p>

          </div>

        </div>

      </div>

      {/* Skills */}

      <div className="resume-section">

        <h2>Skills</h2>

        <div className="skills-tags">

          <span>React</span>

          <span>JavaScript</span>

          <span>HTML</span>

          <span>CSS</span>

          <span>Node.js</span>

          <span>Git</span>

          <span>GitHub</span>

          <span>Responsive Design</span>

        </div>

      </div>

      {/* Certificates */}

      <div className="resume-section">

        <h2>
          <FaCertificate />
          Certifications
        </h2>

        <div className="certificate-grid">

          <div className="certificate-card">
            Responsive Web Design
          </div>

          <div className="certificate-card">
            JavaScript Fundamentals
          </div>

          <div className="certificate-card">
            React Development
          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;
