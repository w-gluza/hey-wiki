import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import avatar from '../../assets/avatar.svg';

const BotMessage = ({ msg }) => (
  <span className="avatar-container">
    <img className="avatar-msg" src={avatar} alt="wiki avatar" />
    <article className="bot">
      <ReactMarkdown linkTarget="_blank" children={msg} />
    </article>
  </span>
);

BotMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default BotMessage;
