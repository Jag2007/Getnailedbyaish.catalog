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

export default function SolidHues({ preview = false, onViewAll }) {
  const navigate = useNavigate();
  const displayDesigns = preview ? designs.slice(0, 4) : designs;
  const category = "Casual Chic";

  return (
    <section className="w-full max-w-[105rem] mx-auto rounded-3xl shadow-xl py-12 px-8 border border-pink-200 bg-[#fff0f6]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#b6004c]">
            Casual Chic
          </h2>
          <p className="text-[#e10053] mt-1 text-lg">
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
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6`}>
        {displayDesigns.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-pink-100 hover:scale-105 transition-transform duration-300">
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
        ))}
      </div>
    </section>
  );
}
