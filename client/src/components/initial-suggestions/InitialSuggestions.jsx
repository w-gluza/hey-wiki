import React from "react";

const InitialSuggestions = ({ sendMessage, userMessage }) => {
  const initialSuggestions = [
    "Editing",
    "Policies and guidelines",
    "Referencing",
    "Images",
    "Technical",
  ];

  return (
    <div className="options-container">
      {initialSuggestions.map((suggestion) => (
        <button
          key={suggestion}
          className="btn-options"
          onClick={() => {
            userMessage(suggestion);
            sendMessage(suggestion);
          }}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default InitialSuggestions;
