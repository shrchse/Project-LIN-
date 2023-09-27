"use client"
import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-300 rounded mb-4">
      <div
        className={`flex items-center justify-between bg-accent-2 text-black font-light p-4 cursor-pointer transition-transform ease-in-out duration-200 ${
          isExpanded ? '' : ''
        }`}
        onClick={toggleAccordion}
      >
        <div className="font-semibold">{title}</div>
        <div
          className={`transform ${
            isExpanded ? 'rotate-45' : ''
          } py-2`}
        ></div>
      </div>
      <div
        className={`bg-white transition-all ease-in-out duration-300 ${
          isExpanded ? 'max-h-[500px] p-4' : 'max-h-0'
        } overflow-hidden`}
      >
        {content}
      </div>
    </div>
  );
}

export default Accordion;
