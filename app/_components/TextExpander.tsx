"use client";

import { useState } from "react";

type TextExpanderProps = {
  children: string;
  maxWords?: number;
};

function TextExpander({ children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children?.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="border-b border-primary-700 pb-1 leading-3 text-primary-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Свернуть" : "Развернуть"}
      </button>
    </span>
  );
}

export default TextExpander;
