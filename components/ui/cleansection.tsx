"use client";

import Image from "next/image";
import localFont from "next/font/local";
import CleanDonation from "./cleandonation";

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

export default function CleanWaterSection() {
  return (
    <section className="mt-[5%] w-full flex flex-col-reverse lg:flex-row items-stretch justify-center bg-[#000000d4]">
      {/* Image (below on mobile, left on desktop) */}
      <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto">
        <Image
          src="/women2v.jpg"
          alt="Sam Anisulowo Foundation"
          fill
          priority
          className="w-full h-autoobject-cover object-center"
        />
      </div>

      {/* Text + Component */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-8 py-12 lg:px-16 bg-[#0000002c]">
        <div className="max-w-xl">
          <h2
            className={`${kazimir.className} mt-[20%] md:mt-[10%] lg:mt-[10%] text-[34px] lg:max-w-[15ch] md:text-[38px] font-bold text-white mb-4 leading-tight text-center mx-auto`}
          >
            Sam Anisulowo Foundation
          </h2>

          <p className="text-[18px] text-white leading-tight font-normal max-w-[45ch] mx-auto mb-4">
            The Sam Anisulowo Foundation works with communities in Ekiti State to
            improve health, education, and livelihoods. Founded in 2018 by
            Samuel Anisulowo, we focus our efforts in places like Irepodun/Ifelodun
            local government where many families struggle to meet daily needs and
            keep children in school.
          </p>

          <p className="text-[18px] text-white leading-tight font-normal max-w-[49ch] mx-auto">
            Your monthly gift helps fund education sponsorships, vocational
            training, and small grants that empower families and create lasting
            opportunities in their communities.
          </p>
        </div>

        {/* Donation Component */}
        <div className="w-full flex justify-center items-center">
          <div className="mt-[40px]" >
            <CleanDonation />
          </div>
        </div>
      </div>
    </section>
  );
}