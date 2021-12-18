import React from "react";
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


  // <a href="#0"class="icon-expand-link">
  // <Icon name="CodeEditor"/>
  // </a>
  return (
    <div>
      {textMessages && textMessages.map((singleMsg) => (
        <BootSingle key={singleMsg.text} msg={singleMsg.text} />
      ))}
      {filteredOptions && filteredOptions.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => sendMsg(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default BotEditor;
