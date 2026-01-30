import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PressOnInfoBox from "../components/PressOnInfoBox";

// ✨ Cateye Canvas Collection Images
import burgundyBow from "../Cateye Canvas/burgundy bow cateye.599_-.112.png";
import glidedPearl from "../Cateye Canvas/glided pearl cateye.749_-.108.png";
import champagneGaze from "../Cateye Canvas/champagne gaze.499_-.105.png";
import midnightCateye from "../Cateye Canvas/midnight cateye.499_-.104.png";
import cosmicCurves from "../Cateye Canvas/cosmic curves.699_-.103.png";
import mysticButterfly from "../Cateye Canvas/mystic butterfly.699_-.107.png";
import crimsonCateye from "../Cateye Canvas/crimson cateye.649_-.109.png";
import roseQuartz from "../Cateye Canvas/rose quarts cateye.699_-.110.png";
import frameCateye from "../Cateye Canvas/frame cateye.699_-.106.png";
import starryPink from "../Cateye Canvas/starry pink cateye.499_-.111.png";

// 💫 Cateye Canvas with Prices
const designs = [
  { label: "Champagne Gaze", src: champagneGaze, price: 599 },
  { label: "Midnight Cateye", src: midnightCateye, price: 599 },
  { label: "Starry Pink Cateye", src: starryPink, price: 599 },
  { label: "Burgundy Bow", src: burgundyBow, price: 699 },
  { label: "Crimson Cateye", src: crimsonCateye, price: 749 },
  { label: "Cosmic Curves", src: cosmicCurves, price: 799 },
  { label: "Mystic Butterfly", src: mysticButterfly, price: 799 },
  { label: "Rose Quartz Cateye", src: roseQuartz, price: 799 },
  { label: "Frame Cateye", src: frameCateye, price: 799 },
  { label: "Glided Pearl", src: glidedPearl, price: 849 },
];

// 🎨 Sort by price low to high
const sortedDesigns = designs.sort((a, b) => a.price - b.price);

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

export default function CateyeCanvas() {
  const category = "Cateye Canvas";
  return (
    <div className="bg-[#fff0f6] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-8xl mx-auto rounded-3xl shadow-xl py-10 px-6 border border-pink-200 bg-[#fff0f6]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#b6004c]">
              Cateye Canvas Collection 🧲
            </h2>
            <p className="text-[#e10053] mt-1 text-xs md:text-lg">
              Sorted by Price (Low to High) – Glossy, magnetic styles & cosmic
              sparkles 🌌💖
            </p>
          </div>
        </div>

        {/* Grid of Nail Designs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {sortedDesigns.map((item, i) => {
            const isBestseller = BESTSELLERS.includes(
              item.label.trim().toLowerCase(),
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
                  ₹{item.price}/-
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=6283449420&text=Hey! I love the '${item.label}' from the ${category} collection (₹${item.price}). Can I get more details about it?`}
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
      <PressOnInfoBox />
      <Footer />
    </div>
  );
}
