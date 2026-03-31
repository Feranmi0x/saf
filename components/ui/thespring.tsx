"use client";

import Image from "next/image";

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

export default function TheSpringSection() {
  return (
    <section className="w-full bg-[#f8eed347] px-6 lg:px-16 py-16 flex flex-col items-center justify-center text-gray-900">
      {/* === TITLE SECTION === */}
      <div className="flex flex-col items-center text-center mb-10">
        {/* THE SPRING Title */}
        <div className="flex items-end justify-center mb-2">
          <div className="flex flex-col items-center mr-3">
            <span className="transform -rotate-90 origin-center text-[18px] mb-[-12px] font-normal ">E</span>
            <span className="transform -rotate-90 origin-center text-[18px] mb-[-12px] font-normal ">H</span>
            <span className="transform -rotate-90 origin-center text-[18px]  font-normal ">T</span>
          </div>
          <span className="text-[42px] font-bold tracking-widest border-b-[10px] border-dotted border-gray-800 leading-[0.8] pb-1">
           TRANSFORM
        </span>
        </div>

        {/* Subtitle */}
        <h2 className={`${kazimir.className} text-[35px] md:text-[45px] mb-4 mt-[30px] text-gray-800 leading-tight`}>
          Join the community supporting Ekiti State families
        </h2>

        {/* Description */}
        <p className="max-w-[70ch] lg:text-[18px] text-[18px] leading-tight font-normal text-gray-900 mt-[17px]">
          When you give to the Sam Anisulowo Foundation, your support directly funds programs that uplift families in Ekiti State. Founded in 2018 by Samuel Anisulowo, we focus on areas like Irepodun/Ifelodun Local Government where poverty prevents many from meeting daily needs and sending children to school.
        </p>
      </div>
      {/* === CONTENT SECTION === */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl gap-10 mt-10">
        {/* Box 1 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 flex-1">
          {/* Icon/Image */}
          <div className="relative w-[100px] h-[100px] flex-shrink-0">
            <Image
              src="/icon2.png" // replace with your actual image path
              alt="Education & Community Program Icon"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <p className="max-w-[50ch] mx-auto text-[18px] leading-tight font-normal text-gray-700 text-center lg:text-left">
            Our programs are locally-led and community-owned. We deploy support to the field where trusted partners
            deliver education sponsorships, vocational training, and small grants that directly benefit families in need.
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 flex-1">
          {/* Icon/Image */}
          <div className="relative w-[100px] h-[100px] flex-shrink-0">
            <Image
              src="/icon1.png" // replace with your actual image path
              alt="Cycle Icon"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <p className="max-w-[50ch] mx-auto text-[18px] leading-tight font-normal text-gray-900 text-center lg:text-left">
          Essential to this work. We count on monthly gifts to fill in any funding gaps that may arise or
            account for potential changes in program timelines. The Spring enables us to fund our local partners with
            confidence and make long-term investments in rural communities.
          </p>
        </div>
      </div>
    </section>
  );
}