import React from "react";
import BootSingle from "../bot-single/BotSingle";

const UserFeedback = ({
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
    return obj === "YES" || obj === "NO";
  });

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
          {option}
        </button>
      ))}
    </div>
  );
};

export default UserFeedback;
