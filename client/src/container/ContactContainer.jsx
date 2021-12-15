import React from "react";
import contact from "../assets/contact.svg";

const ContactContainer = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Contact</h1>
        <p className="contact-paragraph">
          Did you enjoy the project, and are you interested to know more about
          how it was coded? Or maybe do you have some suggestions on how to
          improve it? Feel free to check this repository on{" "}
          <a
            href="https://github.com/w-gluza/hey-wiki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github repository"
          >
            GitHub
          </a>
          .
        </p>
      </section>
      <section className="illustration-container">
        <img className="illustration-contact" src={contact} alt="MVP" />
      </section>
    </div>
  );
};

export default ContactContainer;
