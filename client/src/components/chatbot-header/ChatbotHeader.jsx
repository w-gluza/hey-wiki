import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../assets/avatar.svg';
import close from '../../assets/close.svg';

const ChatbotHeader = ({ hide }) => (
  <header className="chatbot-header">
    <div className="chatbot-intro">
      <img className="avatar-header" src={avatar} alt="wiki avatar" />
      <div>
        <h2>Wiki Bot</h2>
        <p className="chatbot-subtitle">I'm here to help you with Wikipedia editing.</p>
      </div>
    </div>
    <button onClick={hide} className="close-button">
      <img src={close} alt="close chat" />
    </button>
  </header>
);

ChatbotHeader.propTypes = {
  hide: PropTypes.func.isRequired,
};

export default ChatbotHeader;
