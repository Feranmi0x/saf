"use client";

import localFont from "next/font/local";

const kazimir = localFont({
  src: [
    {
      path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

export default function CleanImpact() {
  return (
    <section id="events" className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center bg-[#f8eed3f6] px-8 lg:px-32 py-12">
      {/* Text Section */}
      <div className="mt-[80px] lg:mt-[10px] mb-[40px] w-full lg:w-1/2 flex flex-col justify-center text-left text-gray-800 ">
        <h2
          className={`${kazimir.className} lg:text-left text-center text-[35px] md:text-[38px] lg:text-[42px] font-bold leading-tight mb-5`}
        >
          Sam Anisulowo Foundation
        </h2>

        <p className="text-[18px] lg:text-left leading-tight font-normal text-center mb-4">
          Founded in 2018 by Samuel Anisulowo, the foundation exists to help as many people as possible, with a primary focus on communities in Ekiti State — especially Irepodun/Ifelodun local government.
        </p>

        <p className="text-[18px] lg:text-left leading-tight font-normal text-center">
          This area is marked by deep poverty where many cannot afford daily needs and sending children to school is a challenge. With support from friends and family, the foundation has empowered numerous families — improving access to education, livelihoods, and essential support.
        </p>
      </div>

      {/* Video Section */}
{/* Video Section */}
<div className="relative lg:ml-[5%] w-full lg:w-[40vw] h-[25vh] md:h-[55vh] lg:h-[37vh] overflow-hidden lg:rounded-b-[0px] rounded-b-[8px]">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover scale-[1.04]"
    src="/yt_720p.mp4" // <-- path to your video file
    controls // <-- adds play/pause/volume controls
    autoPlay={false} // set true if you want it to auto play
    muted={false}   // optional
    loop={false}    // optional
    preload="metadata" // preload metadata only, faster page load
  />
</div>
    </section>
  );
}