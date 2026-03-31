"use client";

import Image from "next/image";
import localFont from "next/font/local";

const kazimir = localFont({
  src: [
    { path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

export default function LocalPartners() {
  const faqs = [
    {
      title: "Why does Sam Anisulowo Foundation work with local partners?",
      description:
        "Investing in local organizations creates durable, community-led solutions. Our partners bring deep local knowledge and a commitment to accountable, effective programs.",
    },
    {
      title: "What is Sam Anisulowo Foundation’s relationship with local partners?",
      description:
        "Our programs team works closely with partners on planning, monitoring, and ongoing support. Their local presence and skill make long-term impact possible.",
    },
    {
      title: "How are local partners defined?",
      description:
        "We work with a variety of locally-based organizations: small community groups, locally-founded nonprofits, and local branches of larger NGOs. In every case local experts design, implement, and monitor the programs.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8eed337] py-20 px-6 lg:px-16">
      {/* Top Section */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center">
        {/* Mobile View: Text on top */}
        <div className="lg:hidden w-full h-[40vh] bg-white p-8 rounded-t-lg  shadow-lg flex flex-col justify-center">
          <h2 className={`${kazimir.className} text-[28px] font-normal mb-4 text-center`}>
            Local Partners
          </h2>
          <p className="text-[18px] font-normal text-center leading-tight text-gray-700">
            Our carefully-chosen local partners have a community-centered
            approach, excellent reporting practices, and years of experience
            implementing effective, sustainable community programs in their area.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[60vh] lg:h-[500px] lg:w-[600px] lg:ml-[42%]">
          <Image
            src="/locals.jpg"
            alt="Sam Anisulowo Foundation - Local Partners"
            fill
            className="object-cover lg:rounded-md rounded-b-md"
          />
        </div>

        {/* Desktop Overlapping Text Box */}
        <div className="hidden lg:block absolute left-[5%] top-[20%] bg-white p-8 rounded-lg shadow-lg w-[45vw] h-[40vh] z-10">
          <h2 className={`${kazimir.className} text-[45px] pt-[8%] font-bold mb-4 text-center`}>Local Partners</h2>
          <p className="text-center text-[18px] leading-tight text-gray-700 px-[10%] font-normal">
            Our local partners are trusted community organizations and leaders
            in Ekiti State. Together we design and implement programs that aim
            to improve education, livelihoods, and wellbeing in Irepodun/Ifelodun
            and neighboring communities.
          </p>
        </div>
      </div>

      {/* Bottom Section: FAQ Texts */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-[22px] font-bold mb-3 text-gray-900 text-center lg:text-left">
              {faq.title}
            </h3>
            <p className="text-[18px] font-normal leading-tight text-gray-700 text-center lg:text-left">
              {faq.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}