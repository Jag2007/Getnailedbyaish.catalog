import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 💅 All 50+ imports from Casual Chic folder
import babyPinkFrenchies from "../Casual Chic/Baby pink Frenchies.429_-.30.png";
import loveBite from "../Casual Chic/Love bite.449_-.43.png";
import basicFrenchChrome from "../Casual Chic/Basic French Chrome.499_-.61.png";
import loveyDovey from "../Casual Chic/Lovey Dovey.399_-26.png";
import basicFrench from "../Casual Chic/Basic French.399_-.62.png";
import marbleMuse from "../Casual Chic/Marble Muse.499_-.36.png";
import blackSwirls from "../Casual Chic/Black Swirls.499_-.18.png";
import marbledMauve from "../Casual Chic/Marbled Mauve.399_-.35.png";
import blackoutHearts from "../Casual Chic/Blackout Hearts.349_-.19.png";
import maroonBloom from "../Casual Chic/Maroon Bloom.349_-.33.png";
import blueStarlight from "../Casual Chic/Blue Starlight.499_-.14.png";
import mauvePetals from "../Casual Chic/Mauve Petals.449_-.40.png";
import blushingAura from "../Casual Chic/Blushing Aura.549_-.56.png";
import midnightTips from "../Casual Chic/Midnight Tips.429_-.46.png";
import blushingBlooms from "../Casual Chic/Blushing Blooms.349_-.16.png";
import mochaBloom from "../Casual Chic/Mocha Bloom.499_-.28.png";
import brownChombre from "../Casual Chic/Brown Chombre.599_-.20.png";
import mochaSwirls from "../Casual Chic/Mocha Swirls.499_-.41.png";
import brownieChrome from "../Casual Chic/Brownie Chrome.499_-.11.png";
import ombreFlorals from "../Casual Chic/Ombre Florals.599_-.59.png";
import caramelSunset from "../Casual Chic/Caramel Sunset.599_-.52.png";
import pastelFrenchies from "../Casual Chic/Pastel Frenchies.499_-.42.png";
import pearlChrome from "../Casual Chic/Pearl Chrome.349_-.25.png";
import pearlFrench from "../Casual Chic/Pearl French.499_-.48.png";
import cherryOnTop from "../Casual Chic/Cherry on Top.599_-.32.png";
import chromeKiss from "../Casual Chic/Chrome kiss.349_-.49.png";
import plumAura from "../Casual Chic/Plum Aura.549_-.55.png";
import prettyInPink from "../Casual Chic/Pretty in Pink.529_-.45.png";
import richRedOmbre from "../Casual Chic/Rich Red Ombre.499_-.54.png";
import daintySwirls from "../Casual Chic/Dainty Swirls.499_-.39.png";
import romanticAura from "../Casual Chic/Romantic Aura.599_-.57.png";
import daisyDreams from "../Casual Chic/Daisy Dreams.549_-.37.png";
import rosyDelight from "../Casual Chic/Rosy Delight.349_-.17.png";
import dramaQueen from "../Casual Chic/Drama Queen.549_-.53.png";
import softPinkChrome from "../Casual Chic/Soft Pink Chrome.349_-.24.png";
import frenchCherryKISS from "../Casual Chic/French Cherry KISS.479_-.47.PNG";
import softSparkle from "../Casual Chic/Soft Sparkle.499_-.44.png";
import frenchFloral from "../Casual Chic/French Floral.499_-.12.png";
import frenchTwist from "../Casual Chic/French Twist,549_-.38.png";
import glidedBlush from "../Casual Chic/GLIDED BLUSH.549_-.23.PNG";
import goldenOutline from "../Casual Chic/Golden outline.499_-.22.png";
import studdedPetals from "../Casual Chic/Studded Petals.599_-.58.png";
import heartMeBlack from "../Casual Chic/Heart me Black.599_-27.png";
import heartMeRed from "../Casual Chic/Heart me Red.599_-21.png";
import justCherry from "../Casual Chic/Just Cherry.529_-.31.png";
import lilacDream from "../Casual Chic/Lilac Dream.499_-.60.png";
import springFling from "../Casual Chic/Spring Fling.549_-.29.png";
import starlightTips from "../Casual Chic/Starlight Tips.499_-.13.png";
import summerOmbre from "../Casual Chic/Summer Ombre.599_-.50.png";
import sunshineTips from "../Casual Chic/Sunshine Tips.449_-.51.png";
import tortoiseTreasure from "../Casual Chic/Tortoise Treasure.499_-.34.png";

const designs = [
  { label: "Blackout Hearts", price: 349, src: blackoutHearts },
  { label: "Blushing Blooms", price: 349, src: blushingBlooms },
  { label: "Chrome Kiss", price: 349, src: chromeKiss },
  { label: "Pearl Chrome", price: 349, src: pearlChrome },
  { label: "Rosy Delight", price: 349, src: rosyDelight },
  { label: "Soft Pink Chrome", price: 349, src: softPinkChrome },
  { label: "Basic French", price: 399, src: basicFrench },
  { label: "Lovey Dovey", price: 399, src: loveyDovey },
  { label: "Marbled Mauve", price: 399, src: marbledMauve },
  { label: "Golden Outline", price: 499, src: goldenOutline },
  { label: "Brownie Chrome", price: 499, src: brownieChrome },
  { label: "Blue Starlight", price: 499, src: blueStarlight },
  { label: "Black Swirls", price: 499, src: blackSwirls },
  { label: "French Floral", price: 499, src: frenchFloral },
  { label: "Basic French Chrome", price: 499, src: basicFrenchChrome },
  { label: "Mocha Bloom", price: 499, src: mochaBloom },
  { label: "Mocha Swirls", price: 499, src: mochaSwirls },
  { label: "Pastel Frenchies", price: 499, src: pastelFrenchies },
  { label: "Pearl French", price: 499, src: pearlFrench },
  { label: "Rich Red Ombre", price: 499, src: richRedOmbre },
  { label: "Soft Sparkle", price: 499, src: softSparkle },
  { label: "Starlight Tips", price: 499, src: starlightTips },
  { label: "Tortoise Treasure", price: 499, src: tortoiseTreasure },
  { label: "Dainty Swirls", price: 499, src: daintySwirls },
  { label: "Midnight Tips", price: 429, src: midnightTips },
  { label: "Baby Pink Frenchies", price: 429, src: babyPinkFrenchies },
  { label: "Sunshine Tips", price: 449, src: sunshineTips },
  { label: "Mauve Petals", price: 449, src: mauvePetals },
  { label: "Love Bite", price: 449, src: loveBite },
  { label: "French Cherry KISS", price: 479, src: frenchCherryKISS },
  { label: "Drama Queen", price: 549, src: dramaQueen },
  { label: "Plum Aura", price: 549, src: plumAura },
  { label: "Blushing Aura", price: 549, src: blushingAura },
  { label: "French Twist", price: 549, src: frenchTwist },
  { label: "Glided Blush", price: 549, src: glidedBlush },
  { label: "Daisy Dreams", price: 549, src: daisyDreams },
  { label: "Pretty in Pink", price: 529, src: prettyInPink },
  { label: "Just Cherry", price: 529, src: justCherry },
  { label: "Caramel Sunset", price: 599, src: caramelSunset },
  { label: "Cherry on Top", price: 599, src: cherryOnTop },
  { label: "Heart Me Red", price: 599, src: heartMeRed },
  { label: "Heart Me Black", price: 599, src: heartMeBlack },
  { label: "Romantic Aura", price: 599, src: romanticAura },
  { label: "Summer Ombre", price: 599, src: summerOmbre },
  { label: "Brown Chombre", price: 599, src: brownChombre },
  { label: "Studded Petals", price: 599, src: studdedPetals },
  { label: "Ombre Florals", price: 599, src: ombreFlorals },
  { label: "Maroon Bloom", price: 349, src: maroonBloom },
  { label: "Lilac Dream", price: 499, src: lilacDream },
  { label: "Spring Fling", price: 549, src: springFling },
  { label: "Marble Muse", price: 499, src: marbleMuse },
];

const sortedDesigns = designs.sort((a, b) => a.price - b.price);

export default function CasualChic50() {
  const category = "Casual Chic";
  return (
    <div className="bg-[#fff0f6] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-8xl mx-auto rounded-3xl shadow-xl py-10 px-6 border border-pink-200 bg-[#fff0f6]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b6004c]">
              Casual Chic Collection 💅
            </h2>
            <p className="text-[#e10053] mt-1 text-lg">
              Sorted by Price (Low to High) – Pretty nails for every vibe ✨
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
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
      </main>
      <Footer />
    </div>
  );
}
