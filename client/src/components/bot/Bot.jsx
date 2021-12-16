import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChatbotHeader from '../chatbot-header/ChatbotHeader.jsx';
import UserMessage from '../user-message/UserMessage.jsx';
import ChatbotFooter from '../chatbot-footer/ChatbotFooter.jsx';
import BootController from '../bot-controller/BotController.jsx';
import MessageTypeEnum from '../../types/MessageTypeEnum';

const Bot = ({ chat, userMessage, sendMessage, hide }) => {
  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [chat]);

  function checkForSnippet(text) {
    if (typeof text === 'string') {
      return text.includes('~~~');
    }
    return false;
  }
  return (
    <>
      <section className="chatbot">
        <ChatbotHeader hide={hide} />
        <article className="chatbot-stream">
          <div className="bot-container">
            <BootController
              msg="Hello 👋, I’m Wiki chatbot. I’m excited that you are a part of Wikipedia 🚀! How can I help you?"
              msgType={MessageTypeEnum.CUSTOM}
            />
          </div>
          {chat.length !== 0 &&
            chat.map((msg, index) => (
              <div key={index} className={`${msg.type}-container`}>
                {msg.type === 'bot' ? (
                  <BootController
                    msgType={
                      checkForSnippet(msg.message) ? MessageTypeEnum.SNIPPET : msg.msgType
                    }
                    msg={msg}
                    userMessage={userMessage}
                    sendMessage={sendMessage}
                  />
                ) : (
                  <UserMessage msg={msg.message} />
                )}
              </div>
            ))}

          <div ref={endOfMessages}></div>
        </article>
        <ChatbotFooter userMessage={userMessage} sendMessage={sendMessage} />
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
