import React from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";

function Portfolio() {
  return (
    <>
      <Navbar />
      <h1 className="page-header">My Projects</h1>
      <hr className="page-header-hr" />
      <ProjectList />
    </>
  );
}

export default Portfolio;
