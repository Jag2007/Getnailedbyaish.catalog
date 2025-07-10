import { useNavigate } from "react-router-dom";

import glidedBlush from "../Casual Chic/GLIDED BLUSH.549_-.23.PNG";
import goldenOutline from "../Casual Chic/Golden outline.499_-.22.png";
import studdedPetals from "../Casual Chic/Studded Petals.599_-.58.png";
import heartMeBlack from "../Casual Chic/Heart me Black.599_-27.png";

const designs = [
  { label: "Glided Blush", price: 549, src: glidedBlush },
  { label: "Golden Outline", price: 499, src: goldenOutline },
  { label: "Studded Petals", price: 599, src: studdedPetals },
  { label: "Heart Me Black", price: 599, src: heartMeBlack },
];

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

export default function SolidHues({ preview = false, onViewAll }) {
  const navigate = useNavigate();
  const displayDesigns = preview ? designs.slice(0, 4) : designs;
  const category = "Casual Chic";

  return (
    <section className="w-full max-w-[105rem] mx-auto rounded-3xl shadow-xl py-12 px-8 border border-pink-200 bg-[#fff0f6]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-[#b6004c]">
            Casual Chic
          </h2>
          <p className="text-[#e10053] mt-1 text-xs md:text-lg">
            Nails that move with your life, beautifully🥀!Get that perfectly
            polished look, designed for daily comfort and ease💕
          </p>
        </div>
        <button
          onClick={onViewAll ? onViewAll : () => navigate("/category2")}
          className="bg-gradient-to-r from-[#e10053] to-[#ff5e8e] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition-all text-sm md:text-base cursor-pointer"
        >
          View All →
        </button>
      </div>

      {/* Grid of Nail Designs */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`}>
        {displayDesigns.map((item, i) => {
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
    </section>
  );
}
