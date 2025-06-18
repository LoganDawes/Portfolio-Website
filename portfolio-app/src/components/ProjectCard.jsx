import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, title, description, githubUrl }) {
  return (
    <div className="projectcard-box">
      {/* Project Image */}
      <div className="projectcard-image-wrapper">
        <img src={image} alt={title} className="projectcard-image" />
      </div>

      {/* Project Content: Header and Description*/}
      <div className="projectcard-content">
        <h3 className="projectcard-header">{title}</h3>
        <div className="projectcard-description">{description}</div>

        {/* Github Button */}
        <a
          className="projectcard-github-btn"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
