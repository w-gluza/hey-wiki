import React, { useState } from "react";
import TypingPlaceholder from "../typing-placeholder/TypingPlaceholder.jsx";

const TypingContainer = ({ children }) => {
  const [isTyping, setIsTyping] = useState(true);

  setTimeout(() => {
    setIsTyping(false);
  }, 650);
  
  return <>{isTyping ? <TypingPlaceholder /> : <>{children}</>}</>;
};

export default TypingContainer;
