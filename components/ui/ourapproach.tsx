"use client";

import localFont from "next/font/local";

const kazimir = localFont({
  src: [
    { path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

export default function OurApproach() {
  const steps = [
    {
      number: "1",
      title: "Assessment",
      description:
        "We work with local leaders to assess community needs like education, livelihood, and basic necessities, ensuring projects address the most urgent gaps.",
    },
    {
      number: "2",
      title: "Implementation",
      description:
        "Our local partners implement programs — from educational sponsorships to skills training and small grants — with community involvement and transparency.",
    },
    {
      number: "3",
      title: "Sustainability",
      description:
        "To ensure long-term impact, we build local capacity, monitor progress, and support follow-up activities so communities can continue thriving.",
    },
  ];

  return (
    <section className="w-full min-h-[80vh] bg-[#f8eed300] flex flex-col justify-center items-center py-16 px-6">
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className={`${kazimir.className} text-[26px] md:text-3xl font-normal text-gray-900 mb-4`}>
          Our Approach
        </h2>
        <p className="text-base md:text-lg font-bold text-gray-700 leading-tight mb-4">
          We partner with trusted local organizations to support community-led
          programs in education, livelihoods, and health across Ekiti State. Our work
          extends beyond initial activities — we invest in monitoring, evaluation,
          and local capacity so initiatives continue to deliver results long after
          projects are launched.
        </p>
<a
  href="#"
  className="relative inline-block uppercase tracking-widest text-[14px] font-medium transition before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:w-full before:h-[2px] before:bg-blue-500 hover:before:bg-blue-400 text-gray-700"
>
  Learn more
</a>
      </div>

      {/* Steps Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4 md:px-6"
          >
            {/* Number Circle */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-800 bg-blue-500 text-white text-lg font-normal mb-4">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-normal text-gray-900 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 font-bold leading-tight text-[15px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}