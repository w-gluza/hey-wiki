import React from 'react';

const BotSuggestions = ({ suggestions, userMessage, sendMessage }) => {
  return (
    <div className="suggestions-container">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.label}
          className="btn-suggestions"
          onClick={() => {
            userMessage(suggestion.label);
            sendMessage(suggestion.label);
          }}
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );
};
export default BotSuggestions;
