import "./About.css";
 import profile from "../assets/profile.png";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaDownload,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-title">
        <h1>About Me</h1>
        <p>Know more about me and my journey.</p>
      </div>

      <div className="about-container">

        {/* Left Side */}

        <div className="about-image">

          <div className="image-circle">

           <img
  src={profile}
  alt="Profile"
/>

          </div>

        </div>

        {/* Right Side */}

        <div className="about-content">

          <h2>
            Hi, I'm <span>Akash Kumar</span>
          </h2>

          <h3>Frontend React Developer</h3>

          <p>
            I am a passionate Frontend Developer who loves building
            modern, responsive and interactive websites using
            React.js, JavaScript and CSS.

            I enjoy creating clean user interfaces,
            solving problems and learning new technologies every day.
          </p>

          {/* Information */}

          <div className="about-info">

            <div className="info-card">

              <FaUser />

              <div>
                <h4>Name</h4>
                <span>AK Kumar</span>
              </div>

            </div>

            <div className="info-card">

              <FaEnvelope />

              <div>
                <h4>Email</h4>
                <span>example@email.com</span>
              </div>

            </div>

            <div className="info-card">

              <FaPhone />

              <div>
                <h4>Phone</h4>
                <span>+91 XXXXX XXXXX</span>
              </div>

            </div>

            <div className="info-card">

              <FaMapMarkerAlt />

              <div>
                <h4>Location</h4>
                <span>India</span>
              </div>

            </div>

          </div>

          {/* Skills */}

          <div className="skills-box">

            <span>React</span>

            <span>JavaScript</span>

            <span>HTML</span>

            <span>CSS</span>

            <span>Node.js</span>

            <span>Git</span>

            <span>Responsive Design</span>

            <span>UI Design</span>

          </div>

          <button className="resume-btn">

            <FaDownload />

            Download Resume

          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="stats-section">

        <div className="stat-card">
          <h2>20+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Responsive Design</p>
        </div>

        <div className="stat-card">
          <h2>2+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Learning Mindset</p>
        </div>

      </div>

      {/* Education */}

      <div className="education">

        <h2>Education & Journey</h2>

        <div className="timeline">

          <div className="timeline-item">

            <FaGraduationCap className="icon" />

            <div>
              <h3>2023</h3>
              <p>Started Learning HTML & CSS</p>
            </div>

          </div>

          <div className="timeline-item">

            <FaLaptopCode className="icon" />

            <div>
              <h3>2024</h3>
              <p>JavaScript & React Development</p>
            </div>

          </div>

          <div className="timeline-item">

            <FaLaptopCode className="icon" />

            <div>
              <h3>2025</h3>
              <p>Building Full Stack Projects</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
