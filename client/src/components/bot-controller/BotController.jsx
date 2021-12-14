import React from 'react';
import MessageTypeEnum from '../../types/MessageTypeEnum';
import BotSingle from '../bot-single/BotSingle.jsx';
import BotSuggestions from '../bot-suggestions/BotSuggestions.jsx';
import BotSnippet from '../bot-snippet/BotSnippet.jsx';

const BotController = ({ msg, msgType, userMessage, sendMessage }) => {
  const getMessageController = () => {
    switch (msgType) {
      case MessageTypeEnum.CUSTOM:
        return <BotSingle msg={msg} />;
      case MessageTypeEnum.SINGLE:
        return <BotSingle msg={msg.message} />;
      case MessageTypeEnum.SNIPPET:
        return <BotSnippet msg={msg.message} />;
      case MessageTypeEnum.SUGGESTIONS:
        return (
          <BotSuggestions
            suggestions={msg.message}
            userMessage={userMessage}
            sendMessage={sendMessage}
          />
        );
      default:
        return null;
    }
  };

  return <>{getMessageController()}</>;
};

export default BotController;
