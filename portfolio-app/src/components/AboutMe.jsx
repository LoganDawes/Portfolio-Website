import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="aboutme-container">
      <img
        src="../assets/images/Logan.png"
        alt="Image of Logan"
        className="aboutme-image"
      />
      <div className="aboutme-content">
        <h1 className="aboutme-header">Logan Dawes</h1>
        <p className="aboutme-summary">
          Test summary: I am a passionate developer with a love for building engaging and performant web applications. 
          With a strong background in JavaScript, React, and modern web technologies, I enjoy solving complex problems and delivering high-quality user experiences.
        </p>
        <button
          className="aboutme-contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default AboutMe;