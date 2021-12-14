import React, { useState } from 'react';
import TypingPlaceholder from '../typing-placeholder/TypingPlaceholder.jsx';
import BotMessage from '../bot-message/BotMessage.jsx';
import MediaController from '../media-controller/MediaController.jsx';

const BootSingle = ({ msg }) => {
  const [isTyping, setIsTyping] = useState(true);

  setTimeout(() => {
    setIsTyping(false);
  }, 650);

  // const testMsg =
  //   'Hello check this out: [How to Edit Wikipedia Link](https://www.youtube.com/watch?v=w03OMnNpc4s)';

  const regex =
    /\[(.+)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/;

  const matchedArray = msg && msg.match(regex);
  const matchedURL =
    Array.isArray(matchedArray) && matchedArray.length >= 2
      ? matchedArray[2]
      : null;

  return (
    <>
      {isTyping ? (
        <TypingPlaceholder />
      ) : (
        <>
          <BotMessage msg={msg} />
          {matchedURL && <MediaController matchedURL={matchedURL} />}
        </>
      )}
    </>
  );
};

export default BootSingle;
