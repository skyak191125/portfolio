import "./Projects.css";

import portfolio from "../assets/project1.jpg";
import weather from "../assets/project2.jpg";
import ecommerce from "../assets/project3.jpg";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Modern responsive portfolio built with React and CSS.",

    tech: ["React", "CSS", "Responsive"],

    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "Weather App",
    image: weather,
    description:
      "Weather application using API integration and React.",

    tech: ["React", "API", "JavaScript"],

    github: "#",
    demo: "#",
  },

  {
    id: 3,
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "Responsive shopping website with modern UI.",

    tech: ["React", "Node", "MongoDB"],

    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects">

      <div className="projects-title">

        <h1>My Projects</h1>

        <p>
          Some of the projects I have built while learning
          web development and React.
        </p>

      </div>

      <div className="project-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((item, index) => (

                  <span key={index}>
                    {item}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;