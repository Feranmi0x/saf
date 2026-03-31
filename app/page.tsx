"use client";

import HeroSection from "@/components/ui/herosection";
import WhySafSection from "@/components/ui/whysafsection";
import ContactSection from "@/components/ui/contactsection";
import Footer from "@/components/ui/footer";
import ImpactStats from "@/components/ui/impactstat";
import CardPage from "@/components/ui/supporters";
import NavBar from "@/components/ui/navbar";

export default function SafHomePage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
         <NavBar />
      </div>
      <main className="">  {/* pushes content below navbar */}
        <HeroSection />
        <WhySafSection />
        <ImpactStats />
        <CardPage />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}