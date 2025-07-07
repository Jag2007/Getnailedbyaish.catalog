import React from "react";
import Navbar from "./Navbar";
import SolidHues from "./SolidHues";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import Background from "../Images/background.jpeg";
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[url('../Images/background.jpeg')] bg-cover bg-center text-[#e28dac] flex flex-col"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "repeat",
        backgroundSize: "80px",
        backgroundPosition: "top center",
      }}
    >
      <Navbar />
      <HeroSection />
      <main className="flex-grow">
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
