import React from "react";
import ContactLink from "./ContactLink";
import "./ContactList.css";

// TODO: Replace with contact info
const contacts = [
  {
    logo: "../assets/images/github-logo.png",
    title: "GitHub",
    url: "https://github.com/yourusername",
  },
  {
    logo: "../assets/images/linkedin-logo.png",
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
  },
  {
    logo: "../assets/images/email-logo.png",
    title: "Email",
    url: "mailto:your@email.com",
  },
];

function ContactList() {
  return (
    <div className="contactlist-list">
      {contacts.map((contact, idx) => (
        <ContactLink
          key={idx}
          logo={contact.logo}
          title={contact.title}
          url={contact.url}
        />
      ))}
    </div>
  );
}

export default ContactList;