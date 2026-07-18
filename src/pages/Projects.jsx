import "./Projects.css";

import portfolio from "../assets/project1.jpg";
import weather from "../assets/project2.jpg";
import ecommerce from "../assets/project3.jpg";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Feedback ",
    image: portfolio,
    description:
      "Modern responsive feddback system.",

    tech: ["React", "CSS", "Responsive"],

    github: "#",
    demo: "https://feeds.free.nf/feedback.php?bill_no=7292931",
  },

  {
    id: 2,
    title: "Wedding website",
    image: weather,
    description:
      "Wedding application with admin dashboard.",

    tech: ["React", "API", "JavaScript"],

    github: "#",
    demo: "https://ykjfeedback.free.nf/wed/index.php",
  },

  {
    id: 3,
    title: "Advertisement website",
    image: ecommerce,
    description:
      "Responsive Advertisement website with modern UI.",

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