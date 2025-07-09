import { useNavigate } from "react-router-dom";

import cherryRed from "../Images/Cherry red.249_-.1.png";
import softPink from "../Images/Soft Pink.249_-.2.png";
import mochaBrown from "../Images/Mocha Brown.249_-.3.png";
import dustyBeige from "../Images/Dusty Beige.249_-.4.png";

const designs = [
  { label: "Cherry Red", src: cherryRed },
  { label: "Soft Pink", src: softPink },
  { label: "Mocha Brown", src: mochaBrown },
  { label: "Dusty Beige", src: dustyBeige },
];

export default function SolidHues({ preview = false, onViewAll }) {
  const navigate = useNavigate();
  const displayDesigns = preview ? designs.slice(0, 4) : designs;

  return (
    <section className="w-full max-w-[105rem] mx-auto rounded-3xl shadow-xl py-12 px-8 border border-pink-200 bg-[#fff0f6]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#b6004c]">
            Simple Solids
          </h2>
          <p className="text-[#e10053] mt-1 text-lg">
            Solid perfection in every detail. Handmade, reusable press-on nails
            for a flawless, long-lasting look.
          </p>
        </div>
        <button
          onClick={onViewAll ? onViewAll : () => navigate("/category1")}
          className="bg-gradient-to-r from-[#e10053] to-[#ff5e8e] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition-all text-sm md:text-base cursor-pointer"
        >
          View All →
        </button>
      </div>

      {/* Grid of Nail Designs */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`}
      >
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
              ₹249/-
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=6283449420&text=Hey! I love the '${item.label}' from the Solid Hues collection. Can I get more details about it?`}
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
