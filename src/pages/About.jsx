import React from "react";
import AishImg from "../Images/Aish.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgImg from "../Images/background.jpeg";

export default function About() {
  return (
    <div
      className="flex flex-col min-h-screen relative"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "80px",
        backgroundPosition: "top center",
      }}
    >
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-white/70 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col items-center justify-center flex-1 px-2 py-4 md:px-8 md:py-16 text-[#e28dac]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#e10053] drop-shadow">
            About Me
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-12 max-w-6xl w-full bg-[#fff0f6]/90 rounded-3xl shadow-2xl p-6 md:p-16 border border-pink-200">
            <img
              src={AishImg}
              alt="Aish Arora"
              className="w-full max-w-xs md:max-w-md h-auto object-contain rounded-2xl border-8 border-pink-300 shadow-xl mb-8 md:mb-0 bg-white"
            />
            <div className="flex-1 text-center md:text-left text-[#c3547d] text-xl md:text-2xl leading-relaxed md:pl-8">
              <p>
                Hi, I’m Aish Arora — a 22-year-old nail artist from Ludhiana,
                Punjab, pouring love into every tiny detail. With 2+ years of
                hands-on experience and 500+ press-ons shipped, I’ve had the joy
                of creating custom nail sets that speak your vibe. Each piece is
                handcrafted with heart, blending art, trend, and personal touch.
                From minimalist magic to bold glam, I design with purpose — to
                make you feel seen, styled, and special. With a growing circle
                of happy clients, GetNailedByAish isn’t just a brand — it’s a
                love letter in every set. 🌸✨ Let’s create your dream nails,
                one press-on at a time 💅💖
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
