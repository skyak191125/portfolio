import "./Home.css";
import profile from "../assets/profile.png";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section className="hero">

      {/* Background Blur */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      {/* Left Side */}
      <div className="hero-left">

        <p className="greeting">👋 Hello, I'm</p>

        <h1>
          AKASH <span>Kumar</span>
        </h1>

        <div className="typing">

          <TypeAnimation
            sequence={[
              "React Developer",
              2000,
              "Frontend Developer",
              2000,
              "UI Designer",
              2000,
              "JavaScript Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />

        </div>

        <p className="description">
          I create beautiful, responsive and modern web applications
          using React, JavaScript and CSS. Passionate about creating
          user-friendly interfaces with clean design and smooth
          user experience.
        </p>

        {/* Buttons */}

        <div className="buttons">

          <button className="btn primary">
            Download CV
          </button>

          <button className="btn secondary">
            View Projects
          </button>

        </div>

        {/* Tech Stack */}

        <div className="tech-stack">

          <span>React</span>

          <span>JavaScript</span>

          <span>CSS3</span>

          <span>HTML5</span>

          <span>Node.js</span>

        </div>

        {/* Social */}

        <div className="socials">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

        </div>

      </div>

      {/* Right Side */}

      <div className="hero-right">

        <div className="image-box">
<img
  src={profile}
  alt="Profile"
/>
        </div>

      </div>

      {/* Bottom Cards */}

      <div className="stats">

        <div className="card">
          <h2>20+</h2>
          <p>Projects</p>
        </div>

        <div className="card">
          <h2>100%</h2>
          <p>Responsive</p>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>Learning</p>
        </div>

        <div className="card">
          <h2>2+</h2>
          <p>Years Practice</p>
        </div>

      </div>

      {/* Scroll */}

      <div className="scroll-down">

        <FaArrowDown />

        <span>Scroll Down</span>

      </div>

    </section>
  );
}

export default Home;