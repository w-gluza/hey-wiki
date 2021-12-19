import React from "react";
import BotMessage from "../bot-message/BotMessage.jsx";
import MediaController from "../media-controller/MediaController.jsx";

const BootSingle = ({ msg }) => {
  const regex =
    /\[(.+)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/;

  const matchedArray = msg && msg.match(regex);
  const matchedURL =
    Array.isArray(matchedArray) && matchedArray.length >= 2
      ? matchedArray[2]
      : null;

  return (
    <>
      <BotMessage msg={msg} />
      {matchedURL && <MediaController matchedURL={matchedURL} />}
    </>
  );
};

export default BootSingle;
