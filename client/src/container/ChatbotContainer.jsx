import React from 'react';
import { connect } from 'react-redux';
import { userMessage, sendMessage } from '../actions/queue';
import Bot from '../components/bot/Bot.jsx';

const ChatbotContainer = ({ ...props }) => <Bot {...props} />;

const mapStateToProps = (state) => ({
  chat: state.queue.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(
  ChatbotContainer
);
