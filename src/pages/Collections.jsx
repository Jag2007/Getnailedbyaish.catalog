import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const collections = [
  {
    name: "Solid Hues",
    path: "/category1",
    emoji: "🎨",
    desc: "Classic, bold, and beautiful. Our Solid Hues collection features timeless single-tone press-ons for a flawless, long-lasting look.",
  },
  {
    name: "Casual Chic",
    path: "/category2",
    emoji: "✨",
    desc: "A collection that blends minimal elegance with daily wearability. Think soft neutrals, glossy finishes, and timeless tips — perfect for the effortlessly stylish.",
  },
  {
    name: "Bow Bubbly",
    path: "/category3",
    emoji: "🎀",
    desc: "Inspired by charm and cheer, this collection features pastel tones, bubbly textures, and tiny bows — made for days you want to feel cute, sweet, and playful.",
  },
  {
    name: "Cateye Canvas",
    path: "/category4",
    emoji: "🌌",
    desc: "Mystical and magnetic, this set is all about that cosmic pull. With shimmering shifts, glowing gradients, and that signature cat eye glow — it’s art for your fingertips.",
  },
  {
    name: "Minimal Magic",
    path: "/category5",
    emoji: "💅",
    desc: "Subtle sparkles and smooth silhouettes define this set. Created for lovers of clean lines, glassy nudes, and an understated sparkle that catches the light.",
  },
];

export default function Collections() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff0f6] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full max-w-7xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#b6004c] mb-10">
          Explore Our Collections 💖
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-3xl border border-pink-200 shadow-md hover:shadow-xl hover:scale-105 transition-all text-center flex flex-col items-center"
            >
              <div className="text-3xl">{item.emoji}</div>
              <h2 className="text-xl font-semibold text-[#b6004c] mt-2">
                {item.name}
              </h2>
              <p className="text-sm text-pink-600 mt-1 mb-4">{item.desc}</p>
              <button
                onClick={() => navigate(item.path)}
                className="bg-gradient-to-r from-[#e10053] to-[#ff5e8e] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition-all text-sm md:text-base cursor-pointer mt-auto"
              >
                View {item.name}
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
