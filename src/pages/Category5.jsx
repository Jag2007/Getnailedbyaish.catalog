import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 🌟 Minimal Magic Collection Images
import bridalBow from "../Minimal Magic/bridal bow.529_-.87.png";
import goldenThread from "../Minimal Magic/golden thread.549_-.83.png";
import crystalTips from "../Minimal Magic/crystal tips.599_-.88.png";
import hauteLines from "../Minimal Magic/haute lines.549_-.65.png";
import delicateLuxe from "../Minimal Magic/delicate luxe.579_-.92.png";
import holographicOmbre from "../Minimal Magic/holographic ombre.499_-.101.png";
import diamondDustFrench from "../Minimal Magic/diamond dust french.529_-.67.png";
import iridescentSparkle from "../Minimal Magic/iridescent sparkle.399_-.98.png";
import diamondOutline from "../Minimal Magic/diamond outline.449_-.102.png";
import luxeGoldTip from "../Minimal Magic/luxe gold tip.499_-.84.png";
import everydayOmbreGlitter from "../Minimal Magic/everyday ombre glitter.549_-.97.png";
import luxeSwirl from "../Minimal Magic/luxe swirl.549_-.82.png";
import floralCharm from "../Minimal Magic/floral charm.529_-.73.png";
import midnightElegance from "../Minimal Magic/midnight elegance.499_-.79.png";
import frenchWhirl from "../Minimal Magic/french whirl.549_-.63.png";
import midnightFrench from "../Minimal Magic/midnight french.499_-.90.png";
import frostAndShine from "../Minimal Magic/frost and shine.499_-.81.png";
import nudeGlimmer from "../Minimal Magic/nude glimmer.499_-.96.png";
import glidedButterflyTips from "../Minimal Magic/glided butterfly tips.599_-.95.png";
import nudeShimmer from "../Minimal Magic/nude shimmer.299_-.69.png";
import glidedFrench from "../Minimal Magic/glided french.499_-.68.png";
import rosyRadience from "../Minimal Magic/rosy radience.499_-.100.png";
import glidedGradient from "../Minimal Magic/glided gradient.499_-.75.png";
import silverSwirls from "../Minimal Magic/silver swirls.429_-.99.png";
import glidedWaveTips from "../Minimal Magic/glided wave tips.529_-.74.png";
import softSparkle from "../Minimal Magic/soft sparkle.499_-.78.png";
import glitterEdge from "../Minimal Magic/glitter edge.379_-.71.png";
import starlightBorder from "../Minimal Magic/starlight border.599_-.91.png";
import glitterFrench from "../Minimal Magic/glitter french.499_-.76.png";
import starlightFrench from "../Minimal Magic/starlight french.499_-.89.png";
import glitterSwirl from "../Minimal Magic/glitter swirl.499_-.77.png";
import starlightSerenade from "../Minimal Magic/starlight serenade.549_-.93.png";
import goldFrame from "../Minimal Magic/gold frame.599_-.85.png";
import stellarCharm from "../Minimal Magic/stellar charm.449_-.94.png";
import goldenEmbrace from "../Minimal Magic/golden embrace.549_-.64.png";
import tiedInGold from "../Minimal Magic/tied in gold.499_-.72.png";
import goldenFusion from "../Minimal Magic/golden fusion.499_-.86.png";
import twirlAndShine from "../Minimal Magic/twirl and shine.499_-.80.png";
import goldenSwirl from "../Minimal Magic/golden swirl.499_-.66.png";
import whisperGlitz from "../Minimal Magic/whisper glitz.299_-.70.png";

// 💅 Minimal Magic with Prices
const designs = [
  { label: "Whisper Glitz", src: whisperGlitz, price: 299 },
  { label: "Nude Shimmer", src: nudeShimmer, price: 299 },
  { label: "Glitter Edge", src: glitterEdge, price: 379 },
  { label: "Iridescent Sparkle", src: iridescentSparkle, price: 399 },
  { label: "Silver Swirls", src: silverSwirls, price: 429 },
  { label: "Diamond Outline", src: diamondOutline, price: 449 },
  { label: "Stellar Charm", src: stellarCharm, price: 449 },
  { label: "Diamond Dust French", src: diamondDustFrench, price: 529 },
  { label: "Bridal Bow", src: bridalBow, price: 529 },
  { label: "Floral Charm", src: floralCharm, price: 529 },
  { label: "Glided Wave Tips", src: glidedWaveTips, price: 529 },
  { label: "Haute Lines", src: hauteLines, price: 549 },
  { label: "Golden Embrace", src: goldenEmbrace, price: 549 },
  { label: "French Whirl", src: frenchWhirl, price: 549 },
  { label: "Golden Thread", src: goldenThread, price: 549 },
  { label: "Everyday Ombre Glitter", src: everydayOmbreGlitter, price: 549 },
  { label: "Luxe Swirl", src: luxeSwirl, price: 549 },
  { label: "Starlight Serenade", src: starlightSerenade, price: 549 },
  { label: "Delicate Luxe", src: delicateLuxe, price: 579 },
  { label: "Gold Frame", src: goldFrame, price: 599 },
  { label: "Glided Butterfly Tips", src: glidedButterflyTips, price: 599 },
  { label: "Crystal Tips", src: crystalTips, price: 599 },
  { label: "Starlight Border", src: starlightBorder, price: 599 },
  { label: "Midnight Elegance", src: midnightElegance, price: 499 },
  { label: "Midnight French", src: midnightFrench, price: 499 },
  { label: "Frost and Shine", src: frostAndShine, price: 499 },
  { label: "Nude Glimmer", src: nudeGlimmer, price: 499 },
  { label: "Glided French", src: glidedFrench, price: 499 },
  { label: "Rosy Radience", src: rosyRadience, price: 499 },
  { label: "Glided Gradient", src: glidedGradient, price: 499 },
  { label: "Luxe Gold Tip", src: luxeGoldTip, price: 499 },
  { label: "Tied In Gold", src: tiedInGold, price: 499 },
  { label: "Twirl and Shine", src: twirlAndShine, price: 499 },
  { label: "Golden Swirl", src: goldenSwirl, price: 499 },
  { label: "Golden Fusion", src: goldenFusion, price: 499 },
  { label: "Soft Sparkle", src: softSparkle, price: 499 },
  { label: "Glitter French", src: glitterFrench, price: 499 },
  { label: "Glitter Swirl", src: glitterSwirl, price: 499 },
  { label: "Starlight French", src: starlightFrench, price: 499 },
  { label: "Holographic Ombre", src: holographicOmbre, price: 499 },
];

// 🔽 Sort by price (Low to High)
const sortedDesigns = designs.sort((a, b) => a.price - b.price);

export default function MinimalMagic() {
  const category = "Minimal Magic";
  return (
    <div className="bg-[#fff0f6] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-8xl mx-auto rounded-3xl shadow-xl py-10 px-6 border border-pink-200 bg-[#fff0f6]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b6004c]">
              Minimal Magic Collection ✨
            </h2>
            <p className="text-[#e10053] mt-1 text-lg">
              Sorted by Price (Low to High) – Subtle shine, fine glam, bridal
              shimmer 💍🌸
            </p>
          </div>
        </div>

        {/* Grid of Nail Designs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {sortedDesigns.map((item, i) => (
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
                href={`https://api.whatsapp.com/send?phone=6283449420&text=Hey! I love the '${item.label}' from the ${category} collection (₹${item.price}). Can I get more details about it?`}
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
      </main>
      <Footer />
    </div>
  );
}
