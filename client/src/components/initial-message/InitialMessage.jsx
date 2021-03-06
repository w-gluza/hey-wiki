import React from "react";
import TypingContainer from "../typing-container/TypingContainer";
import BotMessage from "../bot-message/BotMessage.jsx";
import InitialSuggestions from "../initial-suggestions/InitialSuggestions.jsx";

const InitialMessage = ({ userMessage, sendMessage, optionRequired }) => {
  return (
    <TypingContainer>
      <div className="bot-container">
        <BotMessage msg="Hello š, Iām Wiki chatbot. Iām excited that you are a part of Wikipedia š! How can I help you?" />
      </div>
      <InitialSuggestions userMessage={userMessage} sendMessage={sendMessage} optionRequired={optionRequired} />
    </TypingContainer>
  );
};

export default InitialMessage;
