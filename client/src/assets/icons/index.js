import React from "react";

import Positive from "./src/Positive";
import Negative from "./src/Negative";
import VisualEditor from "./src/VisualEditor";
import CodeEditor from "./src/CodeEditor";

const Icon = (props) => {
  switch (props.name) {
    case "Positive":
      return <Positive {...props} />;
    case "Negative":
      return <Negative {...props} />;
    case "VisualEditor":
      return <VisualEditor {...props} />;
    case "CodeEditor":
      return <CodeEditor {...props} />;
    default:
      return;
  }
};

export default Icon;
