import React from "react";

const InitialSuggestions = ({ sendMessage, userMessage, optionRequired }) => {
  const initialSuggestions = [
    "Editing",
    "Policies and guidelines",
    "Referencing",
    "Images",
    "Technical",
  ];

  // Check if a variable is not blank
  function isBlank(str) {
    return !str || /^\s*$/.test(str);
  }
  const sendRegularMsg = (msg) => {
    if (typeof msg === "string" && !isBlank(msg)) {
      userMessage(msg);
      sendMessage(msg);
    }
  };

  const handleMsgUI = (msg) => {
    if (typeof msg === "string" && !isBlank(msg) && msg !== "SKIP") {
      userMessage(msg);
    }
  };

  async function sendAsyncMsg(queue) {
    for (let singleMessage of queue) {
      handleMsgUI(singleMessage);
      await sendMessage(singleMessage);
    }
  }
  const sendMsg = (msg) => {
    if (typeof msg === "string" && !isBlank(msg)) {
      if (optionRequired) {
        const messageQueue = ["SKIP", msg];
        sendAsyncMsg(messageQueue);
      } else {
        sendRegularMsg(msg);
      }
    }
  };

  return (
    <div className="options-container">
      {initialSuggestions.map((suggestion) => (
        <button
          key={suggestion}
          className="btn-options"
          onClick={() => sendMsg(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default InitialSuggestions;
