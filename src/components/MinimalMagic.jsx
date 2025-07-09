import { useNavigate } from "react-router-dom";

// 💫 Minimal Magic Preview Images (4 handpicked)
import bridalBow from "../Minimal Magic/bridal bow.529_-.87.png";
import goldenFusion from "../Minimal Magic/golden fusion.499_-.86.png";
import softSparkle from "../Minimal Magic/soft sparkle.499_-.78.png";
import crystalTips from "../Minimal Magic/crystal tips.599_-.88.png";

const designs = [
  { label: "Bridal Bow", price: 529, src: bridalBow },
  { label: "Golden Fusion", price: 499, src: goldenFusion },
  { label: "Soft Sparkle", price: 499, src: softSparkle },
  { label: "Crystal Tips", price: 599, src: crystalTips },
];

export default function MinimalMagicPreview({ preview = true, onViewAll }) {
  const navigate = useNavigate();
  const displayDesigns = preview ? designs.slice(0, 4) : designs;
  const category = "Minimal Magic";

  return (
    <section className="w-full max-w-[105rem] mx-auto rounded-3xl shadow-xl py-12 px-8 border border-pink-200 bg-[#fff0f6]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#b6004c]">
            Minimal Magic
          </h2>
          <p className="text-[#e10053] mt-1 text-lg">
            Elegant, bridal, and radiant ✨ A soft-glam nail collection that
            whispers luxury 🌸💍
          </p>
        </div>
        <button
          onClick={onViewAll ? onViewAll : () => navigate("/minimal-magic")}
          className="bg-gradient-to-r from-[#e10053] to-[#ff5e8e] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition-all text-sm md:text-base cursor-pointer"
        >
          View All →
        </button>
      </div>

      {/* Grid of Nail Designs */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`}>
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
              href={`https://api.whatsapp.com/send?phone=6283449420&text=Hey! I love the '${item.label}' from the ${category} collection. Can I get more details about it?`}
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
