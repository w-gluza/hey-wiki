import React from 'react';

const SVG = ({
  style = {},
  fill = "",
  alt = "",
  width = "100%",
  className = "",
  viewBox = "0 0 42 42",
}) => (
  <svg
    fill={fill}
    alt={alt}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M30.84 13.338h-4.8a.72.72 0 0 0-.72.72v.838h-.388a6.747 6.747 0 0 1-3.56-1.015c-1.335-.828-2.805-.897-4.32-.897h-3.906a2.054 2.054 0 0 0-1.798 3.049 2.052 2.052 0 0 0-.364 3.036 2.094 2.094 0 0 0-.022 2.716 1.972 1.972 0 0 0 1.486 3.271h4.845a.315.315 0 0 1 .313.281 4.42 4.42 0 0 1-.255 2.025 6.915 6.915 0 0 0-.443 2.438v.46a2.984 2.984 0 0 0 2.98 2.98.72.72 0 0 0 .712-.61l.254-1.66c.256-1.659.9-3.234 1.878-4.597a2.61 2.61 0 0 1 2.107-1.074h.481v1.04a.72.72 0 0 0 .72.72h4.8a.72.72 0 0 0 .72-.72V14.058a.72.72 0 0 0-.72-.72Zm-6.001 10.521a4.056 4.056 0 0 0-3.274 1.67 12.121 12.121 0 0 0-2.134 5.222l-.143.927a1.542 1.542 0 0 1-.94-1.418v-.46c0-.66.118-1.314.35-1.932a5.87 5.87 0 0 0 .34-2.687 1.753 1.753 0 0 0-1.745-1.565h-4.845a.535.535 0 1 1 0-1.069h1.154c.03 0 .06-.002.09-.006h.73a.72.72 0 0 0 0-1.44h-1.846a.661.661 0 0 1-.257-1.277.661.661 0 0 1 .257-.048h1.847a.72.72 0 0 0 0-1.44h-1.889a.622.622 0 1 1 0-1.242h2.723a.72.72 0 1 0 0-1.44h-2.111a.616.616 0 1 1 0-1.23h3.907c1.347 0 2.545.051 3.56.68a8.184 8.184 0 0 0 4.32 1.232h.387v7.523h-.481Zm5.28 1.76h-3.36V14.778h3.36v10.841Z"
      fill={fill}
    />
  </svg>
);

export default SVG;