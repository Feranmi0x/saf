"use client";

import React from "react";

import localFont from "next/font/local";

const kazimir = localFont({
  src: [
    { path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

export default function HowWeWorkHero() {
  return (
    <section id="impactstories" className="w-full min-h-screen bg-[#f8eed35a] flex flex-col items-center">
      {/* Heading + Description */}
      <div className="mt-[20%] lg:mt-[10%] w-full max-w-4xl px-6 py-12 text-center">
        <h2 className={`${kazimir.className} tracking-wider text-[42px] lg:text-5xl font-bold text-gray-900 mb-4`}>
          How We Work
        </h2>

        <p className="font-bold md:text-lg text-gray-700 leading-tight">
          Many families in Ekiti State live in rural communities with limited
          access to basic services. From the start, the Sam Anisulowo
          Foundation has focused on partnering with trusted local
          organizations to deliver education sponsorships, vocational
          training, small grants, and community health initiatives to the
          communities with the greatest needs — particularly in Irepodun/
          Ifelodun local government.
        </p>
      </div>

      {/* Video — almost full width & height */}
      <div className="w-full flex-1 px-0">
        {/* Wrapper keeps video almost-fullscreen while leaving a small top/bottom margin */}
        <div className="w-[90vw] lg:w-[80vw] h-[70vh] md:h-[85vh] lg:h-[92vh] mx-auto lg:mb-[10%] mb-[15%]">
          {/* Native HTML5 video; replace src with your video file or a poster + source set */}
          <video
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
            // replace src with your video path or multiple <source> tags if needed
            src="/rolling_720p.mp4"
            poster="/images/video-poster.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}