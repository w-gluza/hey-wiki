import React from "react";
import BootSingle from "../bot-single/BotSingle";
import UserFeedback from "../user-feedback/UserFeedback";

const BotMultiple = ({ messages }) => {
  const textMessages = messages.filter((obj) => {
    return obj.response_type === "text";
  });

  const optionsMessages = messages.filter((obj) => {
    return obj.response_type === "option";
  });

  const optionsMessagesFlatten =
    Array.isArray(optionsMessages) && optionsMessages.length >= 1
      ? optionsMessages[0].options
      : null;

  console.log("optionsMessagesFlatten", optionsMessagesFlatten);

  return (
    <>
      {textMessages.map((singleMsg) => (
        <BootSingle msg={singleMsg.text} />
      ))}
      {optionsMessagesFlatten && Array.isArray(optionsMessagesFlatten) && (
        <UserFeedback optionsMessagesFlatten={optionsMessagesFlatten} />
      )}
    </>
  );
};

export default BotMultiple;
