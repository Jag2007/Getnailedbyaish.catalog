import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            <h2 className="text-3xl md:text-4xl font-bold text-[#b6004c]">
              Solid Hues Collection 💅 249/- only
            </h2>
            <p className="text-[#e10053] mt-1 text-lg">
              Classic and elegant French tip nail designs that never go out of
              style.
            </p>
          </div>
        </div>

        {/* Grid of Nail Designs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {designs.map((item, i) => (
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
                href={`https://api.whatsapp.com/send?phone=6283449420&text=Hey! I love the '${item.label}' from the Solid Hues collection (₹249). Can I get more details about it?`}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
