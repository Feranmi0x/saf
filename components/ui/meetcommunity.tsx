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

export default function MeetCommunity() {
  return (
    <section className="w-full bg-[#f8eed366] px-6 lg:px-32 py-25 flex flex-col items-center text-center">
      {/* Header Text */}
      <div className="max-w-3xl mb-16">
        <h2
          className={`${kazimir.className} text-[34px] md:text-[38px]  font-bold text-gray-900 leading-tight mb-5`}
        >
          Meet the community changing lives
        </h2>
        <p className="text-[18px] text-gray-700 font-normal leading-tight mb-12">
    The Sam Anisulowo Foundation was established in 2018 by Samuel Olawale Anisulowo, who has been supporting families in Nigeria and across Africa with the help of family and friends. The foundation has empowered many by improving educational status, providing healthcare support, and enhancing livelihoods. We also offer farming aids to local farmers and provide basic necessities to the poor, widows, widowers, and orphanage homes.
        </p>
      </div>

      {/* 3 Testimonial Boxes */}
      <div className="flex flex-col lg:flex-row gap-10 gap-y-18 mb-4 justify-center items-center w-full ">
        {[
          {
            id: 1,
            name: "Dr Eric uwakwe (JP) ",
            quote:
              "The foundation does great humanitarian work for widows and youth in Nigeria. With the right support, I believe it will reach out to the African people at large.",
            img: "/eric.jpeg",
          },
          {
            id: 2,
            name: "Folorunsho Olumide Thomas",
            quote:
              "I support the Sam Anisulowo Foundation because they prioritize action over promises. From JAMB sponsorships to youth empowerment, they are truly dedicated to uplifting our communities.",
            img: "/thomas.png",
          },
          {
            id: 3,
            name: "Oladapo Olayemi Ruth ",
            quote:
              "Because he is so kind and generous, his selfless philanthropy provides a vital lifeline for widows and empowers the youth of Nigeria to build a brighter future.",
            img: "/earl.png",
          },
        ].map((person) => (
          <div
            key={person.id}
            className="relative bg-white border border-gray-300 rounded-sm p-4 pt-16 text-center w-full"
          >
            {/* Circular Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-23 h-23 rounded-full overflow-hidden border-3 border-[#f3d37c]">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Quote */}
            <p className="lg:text-[17px] text-[16px] text-gray-900 mb-4 leading-tight font-normal mt-[-8px]">
              “{person.quote}”
            </p>

            {/* Name */}
            <h3 className="text-gray-700 text-[15px] font-bold uppercase tracking-widest mb-8 mt-6">{person.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}