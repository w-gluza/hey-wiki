import React from "react";
import MessageTypeEnum from "../../types/MessageTypeEnum";
import BotSingle from "../bot-single/BotSingle.jsx";
import BotSuggestions from "../bot-suggestions/BotSuggestions.jsx";
import BotSnippet from "../bot-snippet/BotSnippet.jsx";
import BotMultiple from "../bot-multiple/BotMultiple.jsx";
import TypingContainer from "../typing-container/TypingContainer";

const BotController = ({
  msg,
  msgType,
  userMessage,
  sendMessage,
}) => {
  const getMessageController = () => {
    switch (msgType) {
      case MessageTypeEnum.CUSTOM:
        return <TypingContainer><BotSingle msg={msg} /></TypingContainer>;
      case MessageTypeEnum.SINGLE:
        return <TypingContainer><BotSingle msg={msg.message} /></TypingContainer>;
      case MessageTypeEnum.MULTIPLE:
        return (
          <BotMultiple
            messages={msg.message}
            sendMessage={sendMessage}
            userMessage={userMessage}
          />
        );
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
