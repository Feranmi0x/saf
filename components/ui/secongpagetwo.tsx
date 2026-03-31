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

const infoCards = [
  {
    title: "Empowerment",
    image: "/empower.jpg",
    description:
      "Many families in Ekiti State struggle to access basic healthcare and sanitation, increasing child illness and mortality.",
    description2:
      "Local health initiatives supported by the foundation reduce preventable illnesses and improve family wellbeing.",
  },
  {
    title: "Education",
    image: "/bags.jpg",
    description:
      "Many children miss school because families cannot afford fees or supplies; scholarships and sponsorships help keep them learning.",
    description2:
      "Education empowers — our sponsorships and programs make school attendance possible.",
  },
  {
    title: "Women",
    image: "/women1.jpg",
    description:
      "Women in Ekiti State often shoulder the burden of household costs and caregiving; vocational training empowers them with income-generating skills.",
    description2:
      "Supporting women creates ripple effects: stronger families and more resilient communities.",
  },
{
  title: "Scholarship",
  image: "/scholarships.jpg",
  description:
    "Many talented students in Ekiti State cannot afford quality education, limiting their future opportunities.",
  description2:
    "Scholarship programs provide financial support and mentorship, helping students achieve academic success and pursue their dreams.",
},
];

export default function ImpactGrid() {
  return (
    <section className="bg-white py-16 px-6">
     <div>
  <h3
    className={`${kazimir.className} mt-[40px] text-[32px] lg:text-[40px] font-normal text-center leading-tight text-gray-700`}
  >
    Sam Anisulowo Foundation <br /> changes lives.
  </h3>
  <p className="font-bold text-center mb-[80px] mt-[20px] leading-tight lg:text-[18px] text-gray-800">
    Our work focuses on education, livelihoods, and wellbeing — <br />especially for women and children in Ekiti State.
  </p>
</div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {infoCards.map((card, index) => (
          <div key={index}>
            {/* ===== Image Box ===== */}
            <div className="group relative overflow-hidden rounded-lg border-2 border-gray-300">
              <div className="relative w-full h-[400px] md:h-[400px]">
                {/* Image (always visible on mobile) */}
                <div className="absolute inset-0 transition-all duration-500 md:group-hover:opacity-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Desktop Title */}
                  <div className="hidden md:block absolute bottom-0 w-full text-center text-white bg-blue-400 py-2 text-[16px] font-normal tracking-widest uppercase">
                    {card.title}
                  </div>
                </div>

                {/* Desktop Hover Description */}
                <div className="hidden md:flex absolute inset-0 flex-col justify-center items-center text-center px-6 text-black opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-white">
                  <p className="text-[14px] uppercase text-[#5493d3] font-normal mb-2 tracking-widest text-center">
                    {card.title}
                  </p>
                  <p className="text-[16px] leading-tight max-w-[55ch] whitespace-pre-line text-center mx-auto mb-[20px]">
                    {card.description}
                  </p>
                  <p className="text-[16px] font-bold leading-tight max-w-[65ch] text-center mb-[40px]">
                    {card.description2}
                  </p>
                </div>
              </div>
            </div>

            {/* ===== Mobile Description (below image, plain background) ===== */}
            <div className="md:hidden mt-4 text-gray-800 text-center">
              <p className="text-[14px] uppercase text-[#5493d3] font-normal mb-2 tracking-widest">
                {card.title}
              </p>
              <p className="text-[16px] leading-tight max-w-[55ch] whitespace-pre-line mx-auto mb-[20px]">
                {card.description}
              </p>
              <p className="text-[16px] font-bold leading-tight max-w-[65ch] mx-auto mb-[40px]">
                {card.description2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}