import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>Akash.</h2>

          <p>
            Passionate Frontend Developer creating beautiful,
            responsive and user-friendly web applications using
            React.js.
          </p>

        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>

        </div>

        <div className="footer-right">

          <h3>Follow Me</h3>

          <div className="footer-social">

            <a href="https://github.com/skyak191125" target="_blank">
              <FaGithub />
            </a>

            <a href="#" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/a_k_a_s_h_00500/" target="_blank">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} 
          <FaHeart className="heart" /> DESIGNED BY AKASH KUMAR
        </p>

      </div>

      <button
        className="scroll-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;
