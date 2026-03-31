"use client";

import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const ImpactStats: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

  const stats = [
    {
      value: "20,000",
      label: "Students projects funded",
      tooltip: "These are projects directly supported by our foundation.",
    },
    {
      value: "29",
      label: "States",
      tooltip: "Currently operating in 29 states across Nigeria.",
    },
    {
      value: "1,000,000",
      label: "People will be served",
      tooltip: "Projected reach based on current funding and initiatives.",
    },
  ];

  return (
    <div className="bg-[#131e3a] text-white w-full py-12 flex flex-col items-center">
      {/* Header */}
      <h2 className="text-[14px] md:text-xl font-bold text-[#5493d3] mb-10 text-center">
        SAM ANISULOWO FOUNDATION: IMPACT TO DATE
      </h2>

      {/* Stats - Always vertical */}
      <div className="flex flex-col gap-10 items-center w-full max-w-3xl px-6">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            {/* Value */}
            <p className="text-4xl md:text-5xl font-extrabold mb-2">{item.value}</p>

            {/* Label with Icon */}
            <div className="flex items-center gap-2 text-lg">
              <span>{item.label}</span>
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(index)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <FaQuestionCircle className="text-gray-400 hover:text-blue-400 cursor-pointer w-5 h-5" />

                {/* Tooltip */}
                {showTooltip === index && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg w-56 z-10">
                    {item.tooltip}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;