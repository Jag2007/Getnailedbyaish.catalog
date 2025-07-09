import React from "react";
import AishImg from "../Images/Aish.jpg";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-2 py-8 md:px-8 md:py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-pink-700 drop-shadow">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-12 max-w-6xl w-full bg-pink-50 rounded-3xl shadow-2xl p-6 md:p-16">
        <img
          src={AishImg}
          alt="Aish Arora"
          className="w-80 h-80 md:w-72 md:h-72 object-cover rounded-full border-8 border-pink-300 shadow-xl mb-8 md:mb-0"
        />
        <div className="flex-1 text-center md:text-left text-gray-700 text-xl md:text-2xl leading-relaxed md:pl-8">
          <p>
            Hi, I’m Aish Arora — a 22-year-old nail artist from Ludhiana,
            Punjab, pouring love into every tiny detail. With 2+ years of
            hands-on experience and 500+ press-ons shipped, I’ve had the joy of
            creating custom nail sets that speak your vibe. Each piece is
            handcrafted with heart, blending art, trend, and personal touch.
            From minimalist magic to bold glam, I design with purpose — to make
            you feel seen, styled, and special. With a growing circle of happy
            clients, GetNailedByAish isn’t just a brand — it’s a love letter in
            every set. 🌸✨ Let’s create your dream nails, one press-on at a
            time 💅💖
          </p>
        </div>
      </div>
    </div>
  );
}
