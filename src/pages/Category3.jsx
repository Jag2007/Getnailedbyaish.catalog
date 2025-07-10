import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PressOnInfoBox from "../components/PressOnInfoBox";
import formalBow from "../Bow Bubbly/formal bow.329_-.114.png";
import bowTifulNude from "../Bow Bubbly/bow-tiful nude.329_-.126.png";
import dottedBowCharm from "../Bow Bubbly/dotted bow charm.379_-.115.png";
import sereneBow from "../Bow Bubbly/serene bow.349_-.132.png";
import classicFrenchBow from "../Bow Bubbly/classic french bow.479_-.125.png";
import softPinkBow from "../Bow Bubbly/soft pink bow.479_-.129.png";
import roseGoldBow from "../Bow Bubbly/rose gold bow.499_-.120.png";
import firstKissBow from "../Bow Bubbly/first kiss bow.499_-.128.png";
import girlyBowFrench from "../Bow Bubbly/girly bow french.499_-.135.png";
import elegantRubyBow from "../Bow Bubbly/ elegant ruby bow.449_-.118.png";
import belleFleur from "../Bow Bubbly/belle fleur.449_-.133.png";
import glitterBows from "../Bow Bubbly/glitter bows.549_-.119.png";
import bowAndStarLight from "../Bow Bubbly/bow and star light.549_-.122.png";
import princessBowGlitter from "../Bow Bubbly/princess bow glitter.549_-.121.png";
import dreamyBows from "../Bow Bubbly/dreamy bows.649_-.124.png";
import frenchBowKiss from "../Bow Bubbly/french bow kiss.479_-.123.png";
import blushBowAndPearl from "../Bow Bubbly/blush bow and pearl.579_-.127.png";
import iridescentBows from "../Bow Bubbly/iridescent bows.599_-.134.png";
import loveAndLiteBow from "../Bow Bubbly/love and lite bow.599_-.138.png";
import softRibbonFrench from "../Bow Bubbly/soft ribbon french.599_-.117.png";
import starAndBow from "../Bow Bubbly/star and bow.599_-.113.png";
import twinkleBow from "../Bow Bubbly/twinkle bow.649_-.131.png";
import moonlitPearlBow from "../Bow Bubbly/moonlit pearl bow.699_-.139.png";
import glidedBowTips from "../Bow Bubbly/glided bow tips.699_-.130.png";
import heartfeltCharms from "../Bow Bubbly/heartfelt charms.649_-.140.png";
import princessBowFrench from "../Bow Bubbly/princess bow french.549_-.137.png";
import fairyTale from "../Bow Bubbly/fairy tale.649_-.136.png";
import blackPearlBow from "../Bow Bubbly/black pearl bow.749_-.116.png";

// 🎀 Designs Array
const designs = [
  { label: "Formal Bow", price: 329, src: formalBow },
  { label: "Bow-tiful Nude", price: 329, src: bowTifulNude },
  { label: "Dotted Bow Charm", price: 379, src: dottedBowCharm },
  { label: "Serene Bow", price: 349, src: sereneBow },
  { label: "Classic French Bow", price: 479, src: classicFrenchBow },
  { label: "Soft Pink Bow", price: 479, src: softPinkBow },
  { label: "Rose Gold Bow", price: 499, src: roseGoldBow },
  { label: "First Kiss Bow", price: 499, src: firstKissBow },
  { label: "Girly Bow French", price: 499, src: girlyBowFrench },
  { label: "Elegant Ruby Bow", price: 449, src: elegantRubyBow },
  { label: "Belle Fleur", price: 449, src: belleFleur },
  { label: "Glitter Bows", price: 549, src: glitterBows },
  { label: "Bow and Star Light", price: 549, src: bowAndStarLight },
  { label: "Princess Bow Glitter", price: 549, src: princessBowGlitter },
  { label: "Princess Bow French", price: 549, src: princessBowFrench },
  { label: "French Bow Kiss", price: 479, src: frenchBowKiss },
  { label: "Dreamy Bows", price: 649, src: dreamyBows },
  { label: "Blush Bow and Pearl", price: 579, src: blushBowAndPearl },
  { label: "Iridescent Bows", price: 599, src: iridescentBows },
  { label: "Love and Lite Bow", price: 599, src: loveAndLiteBow },
  { label: "Soft Ribbon French", price: 599, src: softRibbonFrench },
  { label: "Star and Bow", price: 599, src: starAndBow },
  { label: "Twinkle Bow", price: 649, src: twinkleBow },
  { label: "Moonlit Pearl Bow", price: 699, src: moonlitPearlBow },
  { label: "Glided Bow Tips", price: 699, src: glidedBowTips },
  { label: "Heartfelt Charms", price: 649, src: heartfeltCharms },
  { label: "Fairy Tale", price: 649, src: fairyTale },
  { label: "Black Pearl Bow", price: 749, src: blackPearlBow },
];

// 🧠 Sort by price (low to high)
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

// 💅 Final Component
export default function BowBubbly50() {
  const category = "Bow Bubbly";
  return (
    <div className="bg-[#fff0f6] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-8xl mx-auto rounded-3xl shadow-xl py-10 px-6 border border-pink-200 bg-[#fff0f6]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#b6004c]">
              Bow Bubbly Collection 🎀
            </h2>
            <p className="text-[#e10053] mt-1 text-xs md:text-lg">
              Sorted by Price (Low to High) – Playful, bubbly, and cute! 🎀
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {sortedDesigns.map((item, i) => {
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
                  ₹{item.price}/-
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=6283449420&text=Hey! I love the '${
                    item.label
                  }' from the ${category} collection${
                    item.price ? ` (₹${item.price})` : ""
                  }. Can I get more details about it?`}
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
