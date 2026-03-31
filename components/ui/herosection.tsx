"use client";

import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FiX } from "react-icons/fi"; // Close icon
import Donation from "./donation"; // import your donation component


const kazimir = localFont({
  src: [
    { path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

export default function HeroSection() {
  const [showDonation, setShowDonation] = useState(false);

  return (
    <div className="relative w-full min-h-[120vh]">
      {/* Background Image (hidden on mobile if donation is open) */}
      {!showDonation && (
        <>
          <Image
            src="/safbg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </>
      )}

      {/* Mobile Donation Fullscreen Overlay */}
      {showDonation && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
          {/* Close Button */}
          <button
            onClick={() => setShowDonation(false)}
            className="self-end text-black text-2xl"
          >
            <FiX />
          </button>

          {/* Donation Form */}
          <div className="flex-1 flex items-center justify-center">
            <Donation />
          </div>
        </div>
      )}

      {/* Hero Content (hidden on mobile when donation is open) */}
      {!showDonation && (
        <div className="absolute inset-0 flex flex-col items-center lg:items-start px-4">
          <h1
            className={`${kazimir.className} text-white text-[34px] p-[5%] lg:text-[32px] font-normal text-center max-w-[22ch] lg:max-w-[28ch] mt-[80%] md:mt-[30%] lg:mt-[3.5%] lg:ml-[4%] leading-tight`}
          >
            Join us in changing lives one child, one elder together.
          </h1>

          {/* Mobile Give Button */}
          <div className="w-full lg:max-w-md mt-[-2%] lg:ml-[10%] flex flex-col items-center lg:items-start">
            <button
              onClick={() => setShowDonation(true)}
              className="lg:hidden bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 tracking-widest"
            >
              GIVE TODAY
            </button>

            {/* Desktop donation form always visible */}
            <div className="hidden lg:block w-full mt-[-14px] ">
              <Donation />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}