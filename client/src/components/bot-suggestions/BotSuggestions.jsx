import React from 'react';
import BootSingle from '../bot-single/BotSingle';

const BotSuggestions = ({ suggestions, userMessage, sendMessage }) => {
  return (
    <>
      <BootSingle msg={"Did you mean:"} />
      <div className="options-container">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.label}
            className="btn-options"
            onClick={() => {
              userMessage(suggestion.label);
              sendMessage(suggestion.label);
            }}
          >
            {suggestion.label}
          </button>
        ))}
      </div>
    </>
  );
};
export default BotSuggestions;
