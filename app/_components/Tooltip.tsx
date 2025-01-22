"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="text-primary-300 transition-colors hover:text-primary-100"
        aria-label="More information"
      >
        <InformationCircleIcon className="h-6 w-6 text-primary-100" />
      </button>
      {isVisible && (
        <div className="absolute z-10 mt-2 w-64 rounded-lg bg-gray-800 p-2 text-sm text-white shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
}
