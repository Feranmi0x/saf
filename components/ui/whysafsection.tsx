"use client";

import { useState } from "react";
import Image from "next/image";
import Donation from "./donation"; // Your donation component
import ThankYouCard from "./thankyoucard";
import localFont from "next/font/local";

const kazimir = localFont({
  src: [
    { path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});


export default function WhySafSection() {
  const [selectedImage, setSelectedImage] = useState<"elders" | "students">("elders");

  const images: Record<"elders" | "students", string> = {
    elders: "/women2.jpg", // Replace with actual image paths
    students: "/two.jpg",
  };

  return (
    <div className={`w-full min-h-screen bg-white flex flex-col items-center justify-center lg:px-6 px-2 py-10`}>
      {/* Heading */}
      <h1 className="text-sm text-center font-bold text-[#5493d3] mt-10 tracking-widest">
        WHY SAF?
      </h1>

      {/* Subheading */}
      <p className={`${kazimir.className} text-[32px] text-center text-gray-700 mt-4 max-w-[450px] leading-tight lg:text-[36px]`}>
        Because elevating lives is crucial to humanity
      </p>

     {/* Image Switcher */}
<div className="mt-8 flex flex-col items-center">
  {/* Image Container */}
  <div className="min-w-[100vw] lg:min-w-[80vw] h-[700px] relative lg:rounded-lg overflow-hidden shadow-lg object-contain">
    <Image
      src={images[selectedImage]}
      alt={selectedImage}
      fill
      className="w-full h-full object-cover"
    />

    {/* Buttons on top of the image */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4 text-sm">
      <button
        onClick={() => setSelectedImage("elders")}
        className={`py-2 px-4 rounded font-bold ${
          selectedImage === "elders"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        ELDERS
      </button>
      <button
        onClick={() => setSelectedImage("students")}
        className={`py-2 px-4 rounded font-bold ${
          selectedImage === "students"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        STUDENTS
      </button>
    </div>
  </div>
</div>

      {/* Impact Statement */}
      <p className={`${kazimir.className} text-[35px]  text-center text-gray-700 mt-[150px] max-w-3xl leading-tight`}>
        6 billion people lack access to basic amenities and infrastructure
      </p>

      {/* Small Supporting Text */}
      <p className="text-sm text-center text-gray-600 mt-3 max-w-xl mb-6">
        Our work to end poverty needs your support. You can help provide
        education, income, dignity and health – especially for women and
        children.
      </p>

      {/* Donation Component */}
      <div className="w-full max-w-md mt-6">
        <Donation />
      </div>
      <ThankYouCard />
    </div>
  );
}