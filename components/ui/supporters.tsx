import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const kazimir = localFont({
  src: [
    { path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf", weight: "400", style: "bold" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

interface Supporter {
  id: number;
  name: string;
  contribution: string;
  image: string;
}

const supporters: Supporter[] = [
    {
    id: 1,
    name: "Samuel Anisulowo",
    contribution: "Founder & Lead",
    image: "/samuel.jpeg",
  },
  {
    id: 2,
    name: "Adesina Babajide",
    contribution: "Core Contributor",
    image: "/adesina.jpeg",
  },
  {
    id: 3,
    name: "Olujoro Ibukun",
    contribution: "Voluntery Supporter",
    image: "/ibk.jpeg",
  },
  {
    id: 4,
    name: "Ogungbade Omolara",
    contribution: "Voluntery Supporter",
    image: "/larry.jpeg",
  },
  {
    id: 5,
    name: "Akinola Kemisola",
    contribution: "Contributor",
    image: "/kemi.jpeg",
  },
  {
    id: 6,
    name: "Dudulewa Labake",
    contribution: "Voluntery Supporter",
    image: "/labake.jpg",
  },
];

const SupportersPage: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-6">
      {/* Heading */}
      <h1 className={`${kazimir.className} text-3xl text-gray-700 mb-6 mt-[80px] text-center`}>
        Our Amazing Supporters
      </h1>
      <p className="text-md font-normal text-gray-700 max-w-md text-center mb-[40px]">
        There are lots of great ways to support the Sam Anisulowo Foundation and uplift families in Ekiti State.<span className="text-gray-800 font-bold ">Take action today, and change lives.</span>
      </p>

      {/* Scrollable Horizontal Supporters List */}
      <div className="relative w-full max-w-6xl px-[35px]">
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        >
          {supporters.map((supporter) => (
            <div
              key={supporter.id}
              className="relative w-[250px] h-[320px] rounded-lg overflow-hidden flex-shrink-0"
            >
              {/* Background Image */}
              <Image
                src={supporter.image}
                alt={supporter.name}
                fill
                className="object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Text Overlay */}
              <div className="bg-black/60 rounded-sm absolute bottom-5 left-3 right-3 text-center p-2">
                <h3 className="font-bold text-lg text-white uppercase">{supporter.name}</h3>
                <p className="text-[#5493d3] font-bold">
                  {supporter.contribution}
                </p>
              </div>
            </div>
          ))}
        </div>

{/* Scroll Buttons */}
<div className="justify-center gap-8 mt-6 lg:flex hidden">
  <button
    onClick={() => scroll("left")}
    className="text-gray-600 hover:text-[#003366] text-2xl transition transform hover:-translate-x-1"
    aria-label="Scroll Left"
  >
    <FaLongArrowAltLeft />
  </button>

  <button
    onClick={() => scroll("right")}
    className="text-gray-600 hover:text-[#003366] text-2xl transition transform hover:translate-x-1"
    aria-label="Scroll Right"
  >
    <FaLongArrowAltRight />
  </button>
</div>
      </div>
    </div>
  );
};

export default SupportersPage;