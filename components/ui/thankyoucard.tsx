import React from "react";
import "./builder-video.css"; // Animation CSS

const ThankYouCard: React.FC = () => {
  return (
    <div className="mt-10 mb-20 bg-[#5493d3] flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0 text-white rounded-lg shadow-lg lg:gap-4  max-w-2xl mx-auto border-[1px] border-gray-600">
      {/* Circular Progress */}
      <div className="relative flex items-center justify-center shrink-0 w-48 h-48 lg:w-36 lg:h-36">
        {/* Animated circle */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="66"
            stroke="#1d4ed8"
            strokeWidth="8"
            fill="none"
            className="progress-circle lg:hidden"
          />
          <circle
            cx="50%"
            cy="50%"
            r="50"
            stroke="#1d4ed8"
            strokeWidth="8"
            fill="none"
            className="progress-circle hidden lg:inline"
          />
        </svg>
        {/* Text inside the circle */}
        <span className="text-4xl lg:text-2xl font-bold absolute">100%</span>
      </div>

      {/* Heading */}
      <p className="text-xl font-bold text-white text-center lg:text-left max-w-[600px] leading-snug">
        Thanks to generous private donors who fund our operational expenses, 100% of your donation directly funds Sam Anisulowo foundation projects.
      </p>
    </div>
  );
};

export default ThankYouCard;