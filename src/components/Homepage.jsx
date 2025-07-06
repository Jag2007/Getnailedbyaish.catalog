import React from "react";
import Navbar from "./Navbar";
import SolidHues from "./SolidHues";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#e28dac] flex flex-col">
      <Navbar />
      <HeroSection />
      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="w-full py-16 md:py-18 px-4 md:px-8 bg-gradient-to-b from-white to-[#f4ced9]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#f8d4e6] to-[#f0b8d0] rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">💅</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#e10053] mb-4">
              Welcome to Get Nailed by Aish
            </h3>
            <p className="text-[#c3547d] text-lg">
              Professional nail art services with a touch of elegance and
              creativity!
            </p>
          </div>
        </section>

        {/* SolidHues Preview */}
        <section className="pt-16 md:pt-20 pb-16" id="categories">
          {/* You can pass a prop to SolidHues to only show a preview if you want */}
          <SolidHues preview onViewAll={() => navigate("/category1")} />
        </section>

        {/* Reviews */}
        <section className="pb-16 md:pb-20">
          <ReviewSection />
        </section>
      </main>
      <Footer id="contact" />
    </div>
  );
}
