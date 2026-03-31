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

export default function SolutionsSection() {
  const items = [
    {
      icon: "/sponsorship.jpg",
      title: "Education Sponsorships",
      description:
        "Support for school fees, supplies, and programs that keep children in school.",
    },
    {
      icon: "/training.jpg",
      title: "Skills & Vocational Training",
      description:
        "Training programs that equip community members with marketable skills and entrepreneurship support.",
    },
    {
      icon: "/smallgrants.jpg",
      title: "Small Grants",
      description:
        "Microgrants to help families start or grow small businesses and improve livelihoods.",
    },
    {
      icon: "/health.jpg",
      title: "Community Health",
      description:
        "Basic health awareness and support programs improving family wellbeing.",
    },
    {
      icon: "/foodsupport.jpg",
      title: "Food Assistance",
      description:
        "Emergency and ongoing food support for vulnerable families.",
    },
    {
      icon: "/localpartners.jpg",
      title: "Local Partnerships",
      description:
        "Working with trusted local partners to implement and sustain programs.",
    },
    {
      icon: "/community.jpg",
      title: "Community Training",
      description:
        "Educating and empowering local leaders to maintain and manage projects.",
    },
    {
      icon: "/monitor.jpg",
      title: "Monitoring & Support",
      description:
        "Long-term follow-up programs to ensure projects remain functional and impactful.",
    },
    {
      icon: "/awareness.jpg",
      title: "Advocacy & Awareness",
      description:
        "Raising awareness about poverty challenges and mobilizing community solutions.",
    },
  ];

  return (
    <section className="w-full bg-[#f8eed3]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[60vh]">
        {/* Video (left on lg, below text on mobile) */}
        <div className="flex-1 w-full h-[60vh] lg:h-full order-2 lg:order-1">
          <video
            className="w-full h-[60vh] object-cover"
            src="/saf_720p.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/video-poster.jpg"
          ></video>
        </div>

        {/* Text (above video on mobile, right on lg) */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 py-10 bg-gray-900 order-1 lg:order-2">
          <h2 className={`${kazimir.className} text-[26px] md:text-[26px] font-bold text-white mb-4`}>
            We’re community-focused
          </h2>
          <p className="text-white font-normal text-[16px] leading-tight mb-6 max-w-lg">
            Our partners take existing community resources, geography, and population into account when choosing the best programs. From education sponsorships and skills training to small grants and food assistance, we work to fund the most appropriate support for each community — with a priority on Ekiti State and the Irepodun/Ifelodun local government where poverty prevents many families from meeting daily needs and sending children to school.
          </p>
          <a
            href="#"
            className="relative inline-block text-white uppercase tracking-widest text-[14px] font-bold transition before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:w-full before:h-[2px] before:bg-blue-500 hover:before:bg-blue-400"
          >
            Learn more
          </a>
        </div>
      </div>

{/* Bottom Section: Vertical on mobile, 3x3 grid on large screens */}
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 py-16 px-6">
  {items.map((item, index) => (
    <div key={index} className="flex items-start space-x-4">
      {/* Icon */}
      <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
        <Image
          src={item.icon}
          alt={item.title}
          width={56}
          height={56}
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[20px] font-bold text-gray-800 mb-4">
          {item.title}
        </h3>
        <p className="text-[17px] font-normal text-gray-800 leading-tight">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}