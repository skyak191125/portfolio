import "./Skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  return (
    <section className="skills">

      {/* Heading */}

      <div className="skills-heading">

        <h1>My Skills</h1>

        <p>
          Technologies, tools and frameworks that I use
          to build modern web applications.
        </p>

      </div>

      {/* Skill Cards */}

      <div className="skill-grid">

        <div className="skill-card">
          <FaReact />
          <h3>React</h3>
          <span>95%</span>
        </div>

        <div className="skill-card">
          <SiJavascript />
          <h3>JavaScript</h3>
          <span>90%</span>
        </div>

        <div className="skill-card">
          <FaHtml5 />
          <h3>HTML5</h3>
          <span>98%</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt />
          <h3>CSS3</h3>
          <span>95%</span>
        </div>

        <div className="skill-card">
          <FaNodeJs />
          <h3>Node.js</h3>
          <span>80%</span>
        </div>

        <div className="skill-card">
          <FaGitAlt />
          <h3>Git</h3>
          <span>85%</span>
        </div>

      </div>

      {/* Progress Bars */}

      <div className="progress-section">

        <h2>Frontend Skills</h2>

        <div className="progress-box">

          <div className="progress-title">
            <span>React</span>
            <span>95%</span>
          </div>

          <div className="progress">
            <div className="progress-fill react"></div>
          </div>

        </div>

        <div className="progress-box">

          <div className="progress-title">
            <span>JavaScript</span>
            <span>90%</span>
          </div>

          <div className="progress">
            <div className="progress-fill js"></div>
          </div>

        </div>

        <div className="progress-box">

          <div className="progress-title">
            <span>HTML</span>
            <span>98%</span>
          </div>

          <div className="progress">
            <div className="progress-fill html"></div>
          </div>

        </div>

        <div className="progress-box">

          <div className="progress-title">
            <span>CSS</span>
            <span>95%</span>
          </div>

          <div className="progress">
            <div className="progress-fill css"></div>
          </div>

        </div>

      </div>

      {/* Tools */}

      <div className="tools">

        <h2>Tools I Use</h2>

        <div className="tools-grid">

          <div className="tool-card">
            <VscVscode  />
            <p>VS Code</p>
          </div>

          <div className="tool-card">
            <FaGithub />
            <p>GitHub</p>
          </div>

          <div className="tool-card">
            <FaFigma />
            <p>Figma</p>
          </div>

          <div className="tool-card">
            <FaGitAlt />
            <p>Git</p>
          </div>

        </div>

      </div>

      {/* Learning */}

      <div className="learning">

        <h2>Currently Learning</h2>

        <div className="learning-grid">

          <div className="learn-card">
            <SiNextdotjs />
            <p>Next.js</p>
          </div>

          <div className="learn-card">
            <SiTypescript />
            <p>TypeScript</p>
          </div>

          <div className="learn-card">
            <SiExpress />
            <p>Express.js</p>
          </div>

          <div className="learn-card">
            <SiMongodb />
            <p>MongoDB</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;