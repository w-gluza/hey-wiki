import React from 'react';
import avatar from '../../assets/avatar.svg';

const TypingPlaceholder = () => (
  <span className="avatar-container">
    <img className="avatar-msg" src={avatar} alt="wiki avatar" />
    <article className="bot">
      <div className="typing">
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
      </div>
    </article>
  </span>
);

export default TypingPlaceholder;
