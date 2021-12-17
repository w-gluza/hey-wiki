import React from "react";

const UserFeedback = ({
  optionsMessagesFlatten,
  sendMessage,
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

  const filteredOptions = optionsMessagesFlatten.filter((obj) => {
    return obj.label === "YES" || obj.label === "NO";
  });


  return (
    <div>
      {filteredOptions.map((option) => (
        <button
          type="button"
          key={option.title}
          onClick={() => sendMsg(option.label)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default UserFeedback;
