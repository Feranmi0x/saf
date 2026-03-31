"use client";


import CleanImpact from "@/components/ui/cleanimpact";
import CleanSection from "@/components/ui/cleansection";
import Footer from "@/components/ui/footer";
import MeetCommunity from "@/components/ui/meetcommunity";
import NavBar from "@/components/ui/navbar";

import SubscribeSectionInline from "@/components/ui/subscribesection";
import TheSpringSection from "@/components/ui/thespring";




export default function SafHomePage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
         <NavBar />
      </div>
      <main className="">  {/* pushes content below navbar */}
        <CleanSection />
        <TheSpringSection />
        <CleanImpact />
        <MeetCommunity />
        <SubscribeSectionInline />
        <Footer />
      </main>
    </div>
  );
}