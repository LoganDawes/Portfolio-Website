import React from "react";
import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";

function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="page-header">Contact Me</h1>
      <hr className="page-header-hr" />
      <ContactList />
    </>
  );
}

export default Contact;