import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-name">Logan Dawes</div>
      <div className="navbar-tabs">
        {/*About Link*/}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            "navbar-tab" + (isActive ? " active" : "")
          }
        >
          About
        </NavLink>

        <span className="navbar-separator">|</span>

        {/*Portfolio Link*/}
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            "navbar-tab" + (isActive ? " active" : "")
          }
        >
          Portfolio
        </NavLink>

        <span className="navbar-separator">|</span>

        {/*Contact Link*/}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            "navbar-tab" + (isActive ? " active" : "")
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Accent Color bar */}
      <div className="navbar-accent" />
    </nav>
  );
}

export default Navbar;
