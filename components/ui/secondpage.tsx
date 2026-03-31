"use client";

import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


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

export default function SecondPage() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col lg:flex-row bg-[#f8fafc]">
      {/* ===== MOBILE VIEW (Overlay Style) ===== */}
      <div className="relative w-full h-[100vh] lg:hidden">
        <Image
          src="/noslippers.JPG"
          alt="Sam Anisulowo Foundation"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Overlay Text on Mobile */}
        <div className="absolute inset-0 flex justify-center items-center px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 w-[90%] h-[65%] flex flex-col justify-center text-center shadow-xl">
            <h1 className="tracking-widest text-[14px] md:text-[16px] font-bold mb-4 text-[#5493d3]">
              WHY SAF?
            </h1>

            <p
              className={`${kazimir.className} leading-tight mb-3 text-[33px] font-normal text-black`}
            >
              Sam Anisulowo Foundation
            </p>

            <p className="text-[16px] leading-tight mb-3 text-gray-700">
              The foundation is dedicated to helping as many people as possible.
              Founded by Samuel Anisulowo in 2018, the foundation has focused on
              supporting communities in Ekiti State, especially in
              Irepodun/Ifelodun local government.
            </p>

            <p className="text-[16px] leading-tight mb-5 text-gray-800">
              This is an area where poverty persists: many cannot afford daily
              needs and sending children to school is a struggle. With help from
              friends and family, the foundation has empowered many people —
              improving livelihoods, supporting education, and providing essential
              assistance to families in need.
            </p>

            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-md transition tracking-widest mx-auto">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP VIEW (Side-by-Side Style) ===== */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-start px-16 py-10 bg-white/80 backdrop-blur-sm z-10">
        <div className="max-w-2xl">
          <h1 className="tracking-widest text-[16px] font-bold mb-4 text-[#5493d3]">
            WHY SAF?
          </h1>

          <p
            className={`${kazimir.className} leading-tight mb-3 text-[34px] font-normal`}
          >
            Sam Anisulowo Foundation
          </p>

          <p className="text-base leading-relaxed mb-3">
            The foundation is dedicated to helping as many people as possible.
            Founded by Samuel Anisulowo in 2018, the foundation has focused on
            supporting communities in Ekiti State, especially in
            Irepodun/Ifelodun local government.
          </p>

          <p className="text-base leading-relaxed mb-5 font-normal">
          Many families face poverty and education challenges. Through support, we provide essential aid, improve livelihoods, and empower communities.
          </p>
          <Link href="/articles/how-we-help-communities">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-md transition tracking-widest">
            LEARN MORE
            </button>
           </Link>
        
        </div>
      </div>

      {/* Background Image on Desktop */}
      <div className="hidden lg:block relative flex-1">
        <Image
          src="/noslippers.JPG"
          alt="Sam Anisulowo Foundation"
          fill
          priority
          className="object-cover object-right mt-[80px]"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
}