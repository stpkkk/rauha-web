"use client";

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

function Accordion() {
  const accordionData: AccordionItem[] = [
    {
      title: "Есть место, где припарковать машину?",
      content: "Да, конечно. Парковка бесплатная.",
    },
    {
      title: "Не будут ли отдыхающие друг другу мешать?",
      content:
        "Нет, потому домики разделены значительным расстоянием, а потому отдыхающие совершенно не мешают друг другу.",
    },
    {
      title: "Можно ли взять с собой собаку, кошку или другое животное?",
      content: "Да, конечно.",
    },
    {
      title: "Нужно ли бронировать домик заранее?",
      content:
        "Да, потому что так домик гарантированно остается за Вами на выбранные даты.",
    },
    {
      title:
        "Если вдруг не получится приехать, возвращается ли оплата за бронь?",
      content:
        "Да, при условии, что отмена брони не позже чем за неделю до заезда.",
    },
  ];

  return (
    <div className="container mb-10 rounded-2xl bg-primary-950 p-2">
      <div className="mx-auto">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            index={index}
            length={accordionData.length}
          />
        ))}
      </div>
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  content: string;
  index: number;
  length: number;
}

function AccordionItem({ title, content, index, length }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={index !== length - 1 ? "border-b border-accent-400" : ""}>
      <button
        className="w-full p-4 text-left hover:bg-primary-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{title}</span>
          <span className={`transform transition-transform duration-200`}>
            {isOpen ? (
              <ArrowUpCircleIcon className="h-10 w-10 text-accent-400" />
            ) : (
              <ArrowDownCircleIcon className="h-10 w-10 text-accent-400" />
            )}
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="p-4 text-sm">{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
