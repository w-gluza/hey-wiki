import React from 'react';

const BotSuggestions = ({ suggestions, userMessage, sendMessage }) => {
  console.log('array of suggestions', suggestions);
  return (
    <div className="suggestions-container">
      {suggestions.map((suggestion) => (
        <button
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
