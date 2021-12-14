import React from "react";
import illustration from "../assets/chat-illustration.svg";
import ChatbotContainer from "./ChatbotContainer.jsx";
import Modal from "../components/modal/Modal.jsx";
import ToggleContent from "../components/modal/ToggleContent";

const HomeContainer = () => {
  return (
    <div>
      <div className="home-container">
        <section className="intro">
          <h1>Hello,</h1>
          <p className="subheading">
            WIKI is here to help you with editing and contributing to Wikipedia.
            Click below to start a chat!
          </p>
          <ToggleContent
            toggle={(show) => (
              <button className="btn-primary" onClick={show}>
                Let's chat
              </button>
            )}
            content={(hide) => (
              <Modal>
                <ChatbotContainer hide={hide} />
              </Modal>
            )}
          />
        </section>
        <section className="illustration-container">
          <img
            className="illustration"
            src={illustration}
            alt="chatting people"
          />
        </section>
      </div>
    </div>
  );
};

export default HomeContainer;
