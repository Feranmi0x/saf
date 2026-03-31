"use client";


import Footer from "@/components/ui/footer";
import LocalPartners from "@/components/ui/localpartners";
import NavBar from "@/components/ui/navbar";
import OurApproach from "@/components/ui/ourapproach";
import SolutionsSection from "@/components/ui/ourpartners";
import SubscribeSectionInline from "@/components/ui/subscribesection";
import HowWeWorkHero from "@/components/ui/video";



export default function SafHomePage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
         <NavBar />
      </div>
      <main className="">  {/* pushes content below navbar */}
        <HowWeWorkHero /> 
        <OurApproach />
        <SolutionsSection />
        <LocalPartners />
        <SubscribeSectionInline />
        <Footer />
      </main>
    </div>
  );
}