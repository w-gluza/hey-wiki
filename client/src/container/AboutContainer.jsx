import React from "react";
import about from "../assets/about.svg";

const AboutContainer = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>The project</h1>
        <p className="about-paragraph">
          The idea behind this project is to create a tool that will help new
          Wikipedians with their first steps in editing Wikipedia articles.
          Chatbot aspires to explain complex concepts in a friendly and
          approachable way using answers from experienced editors.
        </p>
        <p className="about-paragraph">
          We used Node, React, SCSS, and IBM Watson Assistant to create this MVP.
        </p>
      </section>
      <section className="illustration-container">
        <img
          className="illustration-about"
          src={about}
          alt="MVP"
        />
      </section>
    </div>
  );
};

export default AboutContainer;
