"use client";


import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navbar";
import SecondPage from "@/components/ui/secondpage";
import SecondPageThree from "@/components/ui/secondpagethree";
import SecondPageTwo from "@/components/ui/secongpagetwo";
import SubscribeSectionInline from "@/components/ui/subscribesection";
import WhySafSection from "@/components/ui/whysafsection";


export default function SafHomePage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
         <NavBar />
      </div>
      <main className="">  {/* pushes content below navbar */}
        <SecondPage />
        <SecondPageTwo />
        <SecondPageThree />
        <WhySafSection />
        <SubscribeSectionInline />
        <Footer />
      </main>
    </div>
  );
}