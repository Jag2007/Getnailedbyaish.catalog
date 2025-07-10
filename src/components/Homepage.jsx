import React from "react";
import Navbar from "./Navbar";
import SolidHues from "./SolidHues";
import CasualChic from "./CasualChic";
import BowBubbly from "./BowBubbly";
import CateyeCanvasPreview from "./CateyeCanvas";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import Background from "../Images/background.jpeg";
import MinimalMagicPreview from "./MinimalMagic";
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[url('../Images/background.jpeg')] bg-cover bg-center text-[#e28dac] flex flex-col "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "repeat",
        backgroundSize: "80px",
        backgroundPosition: "top center",
      }}
    >
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-white/70 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        {/* Announcement Bar - Scrolling Marquee */}
        <div className="w-full bg-[#e10053] overflow-hidden py-2 relative">
          <div className="whitespace-nowrap animate-marquee text-white text-sm md:text-base font-semibold flex items-center">
            <span className="mx-8">
              Luxe Luxury and Bold Bling Launching Soon !!!
            </span>
            <span className="mx-8">
              Luxe Luxury and Bold Bling Launching Soon !!!
            </span>
            <span className="mx-8">
              Luxe Luxury and Bold Bling Launching Soon !!!
            </span>
          </div>
        </div>
        <HeroSection />

        <main className="flex-grow px-2 sm:px-4 md:px-8">
          {/* SolidHues Preview */}
          <section className="pt-10 md:pt-20 pb-10 md:pb-16">
            <SolidHues preview onViewAll={() => navigate("/category1")} />
          </section>
          {/* CasualChic Preview */}
          <section className="pb-10 md:pb-16">
            <CasualChic preview onViewAll={() => navigate("/category2")} />
          </section>
          {/* BowBubbly Preview */}
          <section className="pb-10 md:pb-16">
            <BowBubbly preview onViewAll={() => navigate("/category3")} />
          </section>
          {/* CateyeCanvas Preview */}
          <section className="pb-10 md:pb-16">
            <CateyeCanvasPreview
              preview
              onViewAll={() => navigate("/category4")}
            />
          </section>
          {/* MinimalMagic Preview */}
          <section className="pb-10 md:pb-16">
            <MinimalMagicPreview
              preview
              onViewAll={() => navigate("/category5")}
            />
          </section>
          {/* Reviews */}
          <section className="pb-10 md:pb-16">
            <ReviewSection />
          </section>
        </main>
        <Footer id="contact" />
      </div>
    </div>
  );
}
