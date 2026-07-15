import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  const handleHireMe = () => {

  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = "tel:+917292931928";
  } else {
    alert("Call me at: +91 7292931928");
  }

};

  const [menu, setMenu] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        AK<span>.</span>
      </div>

      {/* Desktop Menu */}

      <nav className={menu ? "nav active" : "nav"}>

        <NavLink to="/" end onClick={() => setMenu(false)}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={() => setMenu(false)}>
          About
        </NavLink>

        <NavLink to="/skills" onClick={() => setMenu(false)}>
          Skills
        </NavLink>

        <NavLink to="/projects" onClick={() => setMenu(false)}>
          Projects
        </NavLink>

        <NavLink to="/resume" onClick={() => setMenu(false)}>
          Resume
        </NavLink>

        <NavLink to="/contact" onClick={() => setMenu(false)}>
          Contact
        </NavLink>
    
      </nav>

      {/* <button className="hire-btn" onClick={handleHireMe}  >
  Hire Me
</button> */}

<a href="tel:+917292931928" className="hire-btn"> Hire Me</a>
      {/* Mobile Icon */}

      <div
        className="menu-btn"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;