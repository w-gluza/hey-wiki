import React from "react";
import TypingContainer from "../typing-container/TypingContainer";
import BootSingle from "../bot-single/BotSingle";

const BotEditor = ({
  labels,
  sendMessage,
  textMessages,
}) => {
  // Check if a variable is not blank
  function isBlank(str) {
    return !str || /^\s*$/.test(str);
  }

  const sendMsg = (msg) => {
    if (typeof msg === "string" && !isBlank(msg)) {
      sendMessage(msg);
    }
  };

  const filteredOptions = labels.filter((obj) => {
    return obj === "VISUAL-EDITOR" || obj === "CODE-EDITOR";
  });


  return (
    <TypingContainer>
      <div>
        {textMessages &&
          textMessages.map((singleMsg) => (
            <BootSingle key={singleMsg.text} msg={singleMsg.text} />
          ))}
        {filteredOptions &&
          filteredOptions.map((option) => (
            <button type="button" key={option} onClick={() => sendMsg(option)}>
              {option.label}
            </button>
          ))}
      </div>
    </TypingContainer>
  );
};

export default BotEditor;
