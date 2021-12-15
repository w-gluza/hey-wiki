import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BootSingle from '../bot-single/BotSingle.jsx';

const BotSnippet = ({ msg }) => {
  const matchedStringArray = typeof msg === 'string' && msg.match(/^(.*?)~~~/i);

  const matchedString =
    Array.isArray(matchedStringArray) && matchedStringArray.length >= 1
      ? matchedStringArray[1]
      : null;

  const matchedCodeArray =
    typeof msg === 'string' && msg.match(/(?=~~~)[\s\S]*(?=~~~)/i);

  const matchedCodeString =
    Array.isArray(matchedCodeArray) && matchedCodeArray.length >= 1
      ? matchedCodeArray[0]
      : null;

  const cleanedCodeString =
    typeof msg === "string" && matchedCodeString.replaceAll("~~~", "");
  return (
    <>
      {matchedString && <BootSingle msg={matchedString} />}
      {matchedCodeString && (
        <div className="snippet-container">
          <SyntaxHighlighter
            language="markdown"
            style={stackoverflowLight}
            wrapLines={true}
          >
            {cleanedCodeString}
          </SyntaxHighlighter>
        </div>
      )}
    </>
  );
};
export default BotSnippet;
