import React, { useState } from "react";
import PropTypes from "prop-types";
import sendVector from "../../assets/sendVector.svg";

const ChatbotFooter = ({
  userMessage,
  sendMessage,
  optionRequired,
}) => {
  const [message, setMessage] = useState("");

  // Check if a variable is not blank
  function isBlank(str) {
    return !str || /^\s*$/.test(str);
  }
  const sendRegularMsg = (msg) => {
    if (typeof msg === "string" && !isBlank(msg)) {
      userMessage(msg);
      sendMessage(msg);
      setMessage("");
    }
  };


  const handleMsgUI = (msg) => {
    if (typeof msg === "string" && !isBlank(msg) && msg !== "SKIP") {
      userMessage(msg);
      setMessage("");
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

  const handleKeyDown = async (event) => {
    const code = event.keyCode || event.which;

    if (code === 13) {
      sendMsg(message);
    }
  };

  return (
    <div className="form-container">
      <input
        className="chatbot-form"
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        value={message}
        placeholder="How can I help you?"
      />
      <div>
        <button className="btn-send" onClick={() => sendMsg(message)}>
          <img src={sendVector} className="plane-vector" alt="send button" />
        </button>
      </div>
    </div>
  );
};

ChatbotFooter.propTypes = {
  userMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ChatbotFooter;
