import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PressOnInfoBox from "../components/PressOnInfoBox";

import cherryRed from "../Images/Cherry red.249_-.1.png";
import softPink from "../Images/Soft Pink.249_-.2.png";
import mochaBrown from "../Images/Mocha Brown.249_-.3.png";
import dustyBeige from "../Images/Dusty Beige.249_-.4.png";
import wineAndDine from "../Images/Wine and Dine.249_-.5.png";
import rubyRed from "../Images/Ruby Red.249_-.6.png";
import milkyWhite from "../Images/Milky White.249_-.7.png";
import classyChocolate from "../Images/Classy Chocolate.249_-.8.png";
import softNude from "../Images/Soft nude.249_-.9.png";
import blackBeauty from "../Images/Black beauty.249_-.10.png";

const BESTSELLERS = [
  "basic french chrome",
  "basic french",
  "black swirls",
  "bow-tiful nude",
  "cherry on top",
  "cherry red",
  "classic french bow",
  "daisy dreams",
  "fairy tale",
  "first kiss bow",
  "girly bow french",
  "glided blush",
  "glided french",
  "glided gradient",
  "glided wave tips",
  "gold frame",
  "heartfelt charms",
  "holographic ombre",
  "love and lite bow",
  "luxe gold tip",
  "midnight french",
  "mocha brown",
  "pastel frenchies",
  "serene bow",
  "soft nude",
  "starlight french",
  "starlight tips",
  "starry pink cateye",
  "tortoise treasure",
  "iridescent sparkle",
];

const designs = [
  { label: "Cherry Red", src: cherryRed },
  { label: "Soft Pink", src: softPink },
  { label: "Mocha Brown", src: mochaBrown },
  { label: "Dusty Beige", src: dustyBeige },
  { label: "Wine and Dine", src: wineAndDine },
  { label: "Ruby Red", src: rubyRed },
  { label: "Milky White", src: milkyWhite },
  { label: "Classy Chocolate", src: classyChocolate },
  { label: "Soft Nude", src: softNude },
  { label: "Black Beauty", src: blackBeauty },
];

export default function SolidHues10() {
  return (
    <div className="bg-[#fff0f6] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-8xl mx-auto rounded-3xl shadow-xl py-10 px-6 border border-pink-200 bg-[#fff0f6]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#b6004c]">
              Simple Solids Collection 🎨
            </h2>
            <p className="text-[#e10053] mt-1 text-xs md:text-lg">
              Solid perfection in every detail ✨ Handcrafted 🖌️ reusable
              press-on nails 💅 for a flawless, long-lasting look ♾️💖🫶🏻
            </p>
          </div>
        </div>

        {/* Grid of Nail Designs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {designs.map((item, i) => {
            const isBestseller = BESTSELLERS.includes(
              item.label.trim().toLowerCase()
            );
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-pink-100 hover:scale-105 transition-transform duration-300 relative">
                  {isBestseller && (
                    <span
                      className="absolute top-2 left-2 flex items-center px-2 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold rounded-tr-lg rounded-bl-lg shadow z-20"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      <svg
                        className="w-3 h-3 mr-1 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                      </svg>
                      Bestseller
                    </span>
                  )}
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-pink-600 font-medium text-sm md:text-base">
                  {item.label}
                </p>
                <p className="text-[#b6004c] text-sm md:text-base font-semibold">
                  ₹249/-
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=6283449420&text=Hey! I love the '${item.label}' from the Solid Hues collection (₹249). Can I get more details about it?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full md:w-auto bg-gradient-to-r from-[#e10053] to-[#ff5e8e] text-white px-4 py-2 md:px-8 md:py-3 font-semibold shadow hover:brightness-110 transition-all text-sm md:text-lg"
                  style={{ borderRadius: "10px" }}
                >
                  DM to Order
                </a>
              </div>
            );
          })}
        </div>
      </main>

      {/* Place PressOnInfoBox just before Footer */}
      <PressOnInfoBox />
      {/* Footer */}
      <Footer />
    </div>
  );
}
