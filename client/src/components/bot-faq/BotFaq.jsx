import React from "react";
import BootSingle from "../bot-single/BotSingle";

const BotFaq = ({ faqArray, textMessages, userMessage, sendMessage }) => {
  console.log("labels", faqArray);

  const filteredArray = faqArray.filter((e) => e !== "SKIP"); // will return ['A', 'C']

  return (
    <>
      {textMessages.map((singleMsg) => (
        <BootSingle key={singleMsg.text} msg={singleMsg.text} />
      ))}
      <div className="options-container">
        {filteredArray.map((suggestion) => (
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
    </>
  );
};

export default BotFaq;
