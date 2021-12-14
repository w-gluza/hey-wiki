import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const UserMessage = ({ msg }) => (
  <article className="user">
    <ReactMarkdown linkTarget="_blank" children={msg} />
  </article>
);

UserMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default UserMessage;
