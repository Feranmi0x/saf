"use client";

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

export default function SecondPageThree() {
  return (
    <section className="w-full min-h-[70vh] bg-green-100 flex flex-col justify-center items-center px-6 py-20">
      <div className="w-full max-w-3xl text-center">
        <h1 className="tracking-widest text-[14px] md:text-[16px] font-bold mb-4 text-[#5493d3] uppercase">
          how we work
        </h1>

        <p
          className={`${kazimir.className} leading-tight mb-3 text-[35px] md:text-[36px] font-normal text-black`}
        >
          How we support Ekiti communities
        </p>

        <p className="text-[16px] md:text-[18px] leading-relaxed mb-8 font-normal text-gray-800">
         We collaborate with local leaders and community members to identify the most urgent needs in each community. Our programs include educational support, small business training, direct family assistance, and community-led initiatives. With every project we support, partners help build capacity so communities can sustain improvements for years to come.
        </p>

       <Link href="/articles/how-we-help-communities">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-md transition tracking-widest">
            LEARN MORE
            </button>
           </Link>
      </div>
    </section>
  );
}