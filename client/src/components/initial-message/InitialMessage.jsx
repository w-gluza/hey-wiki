import React, { useState } from "react";
import TypingPlaceholder from "../typing-placeholder/TypingPlaceholder.jsx";
import BotMessage from "../bot-message/BotMessage.jsx";
import InitialSuggestions from "../initial-suggestions/InitialSuggestions.jsx";

const InitialMessage = ({ userMessage, sendMessage }) => {
  const [isTyping, setIsTyping] = useState(true);

  setTimeout(() => {
    setIsTyping(false);
  }, 650);
  
  return (
    <>
      {isTyping ? (
        <TypingPlaceholder />
      ) : (
        <>
          <div className="bot-container">
            <BotMessage msg="Hello 👋, I’m Wiki chatbot. I’m excited that you are a part of Wikipedia 🚀! How can I help you?" />
          </div>
          <InitialSuggestions
            userMessage={userMessage}
            sendMessage={sendMessage}
          />
        </>
      )}
    </>
  );
};

export default InitialMessage;
