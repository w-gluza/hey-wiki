import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ChatbotHeader from "../chatbot-header/ChatbotHeader.jsx";
import UserMessage from "../user-message/UserMessage.jsx";
import ChatbotFooter from "../chatbot-footer/ChatbotFooter.jsx";
import BootController from "../bot-controller/BotController.jsx";
import MessageTypeEnum from "../../types/MessageTypeEnum";
import axios from 'axios';
import InitialMessage from "../initial-message/InitialMessage.jsx";

const Bot = ({ chat, userMessage, sendMessage, hide }) => {
  const endOfMessages = useRef(null);
  const [optionRequired, setOptionRequired] = useState(false);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      endOfMessages.current.scrollIntoView({ behavior: "smooth" });
    }, 1350);
  };
  useEffect(scrollToBottom, [chat]);

  function checkForSnippet(text) {
    if (typeof text === "string") {
      return text.includes("~~~");
    }
    return false;
  }


  useEffect(() => {
    if (sessionStorage.session) {
      delete axios.defaults.headers.common.session_id;
      axios.defaults.headers.common.session_id = sessionStorage.session;
    } else {
      delete axios.defaults.headers.common.session_id;
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(chat) && chat.length >= 1) {
      const lastElement = chat[chat.length - 1];
      const activeMsgType = lastElement.msgType === "MULTIPLE" ? true : false;
      if (activeMsgType) {
        setOptionRequired(true);
      } else {
        setOptionRequired(false);
      }
    }
  }, [chat]);

  return (
    <>
      <section className="chatbot">
        <ChatbotHeader hide={hide} />
        <article className="chatbot-stream">
          <InitialMessage
            userMessage={userMessage}
            sendMessage={sendMessage}
            optionRequired={optionRequired}
          />
          {chat.length !== 0 &&
            chat.map((msg, index) => (
              <div key={index} className={`${msg.type}-container`}>
                {msg.type === "bot" ? (
                  <BootController
                    msgType={
                      checkForSnippet(msg.message)
                        ? MessageTypeEnum.SNIPPET
                        : msg.msgType
                    }
                    msg={msg}
                    userMessage={userMessage}
                    sendMessage={sendMessage}
                    setOptionRequired={setOptionRequired}
                  />
                ) : (
                  <UserMessage msg={msg.message} />
                )}
              </div>
            ))}

          <div ref={endOfMessages}></div>
        </article>
        <ChatbotFooter
          userMessage={userMessage}
          sendMessage={sendMessage}
          optionRequired={optionRequired}
        />
      </section>
    </>
  );
};

Bot.propTypes = {
  chat: PropTypes.array.isRequired,
  userMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Bot;
