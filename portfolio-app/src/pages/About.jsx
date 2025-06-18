import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import TabContainer from "../components/TabContainer";

function About() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <h1 className="page-header">My Services</h1>
      <hr className="page-header-hr" />
      <TabContainer />
    </>
  );
}

export default About;