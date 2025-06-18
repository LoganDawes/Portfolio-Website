import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectList.css";

// TODO: Replace with actual project data
const projects = [
  {
    image: "../assets/images/Logan.png",
    title: "Test Project 1",
    description:
      "Test: A personal portfolio website built with React to showcase my projects and skills.",
    githubUrl: "https://github.com/LoganDawes/MealForge",
  },
  {
    image: "../assets/images/Logan.png",
    title: "Test Project 2",
    description:
      "Test: A real-time chat application using Socket.io and Node.js.",
    githubUrl: "https://github.com/LoganDawes/MealForge",
  },
  {
    image: "../assets/images/Logan.png",
    title: "Test Project 3",
    description:
      "Test: A simple 2D game engine demo built with HTML5 Canvas and JavaScript.",
    githubUrl: "https://github.com/LoganDawes/MealForge",
  },
];

// DEBUG: Generates a list of project cards
const testProjects = Array.from({ length: 16 }, (_, i) => ({
  image: "../assets/images/Logan.png",
  title: `Test Project ${i + 1}`,
  description:
    "This is a test project card for horizontal scrolling and layout testing.",
  githubUrl: "https://github.com/LoganDawes/MealForge",
}));

function ProjectList() {
  return (
    <div className="projectlist-scroll">
      {/* TODO: Change test projects to projects */}
      {testProjects.map((project, idx) => (
        <ProjectCard
          key={idx}
          image={project.image}
          title={project.title}
          description={project.description}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
}

export default ProjectList;
