import React from "react";
import "./ContactLink.css";

function ContactLink({ logo, title, url }) {
  return (
    <a
      className="contactlink-box"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="contactlink-logo-wrapper">
        <img src={logo} alt={title + " logo"} className="contactlink-logo" />
      </div>
      <div className="contactlink-separator" />
      <span className="contactlink-title">{title}</span>
    </a>
  );
}

export default ContactLink;