import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import photo1 from "../Images/photo1.jpg";
import photo2 from "../Images/photo2.jpg";

export default function HowToPage() {
  return (
    <div className="bg-[#fff0f6] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full max-w-6xl mx-auto py-8 px-2 sm:py-12 sm:px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#b6004c] mb-2">
          How to Use Our Press-On Nails
        </h1>
        <p className="text-center text-[#e10053] text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
          Everything you need to know—from sizing to application & removal 💅✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* How to Apply */}
          <div className="bg-white rounded-3xl shadow-xl border border-pink-200 p-6">
            <h2 className="text-2xl font-semibold text-[#b6004c] mb-4">
              How to Apply Press-On Nails
            </h2>
            <ol className="list-decimal list-inside text-pink-600 text-sm space-y-2">
              <li>Gently push back cuticles with cuticle pusher.</li>
              <li>Buff nail bed with filler to remove shine.</li>
              <li>Clean nails with lint-free wipe.</li>
              <li>Apply 2 drops nail glue or adhesive tabs.</li>
              <li>Apply press-on nail; hold 10 seconds.</li>
              <li>Repeat for each nail. YOU ARE DONE!</li>
            </ol>
          </div>

          {/* How to Remove */}
          <div className="bg-white rounded-3xl shadow-xl border border-pink-200 p-6">
            <h2 className="text-2xl font-semibold text-[#b6004c] mb-4">
              How to Remove Press-On Nails
            </h2>
            <ol className="list-decimal list-inside text-pink-600 text-sm space-y-2">
              <li>Fill a bowl with warm water and soap.</li>
              <li>Soak nails for 5–10 minutes to loosen glue.</li>
              <li>Use a cuticle pusher to loosen and lift the nail.</li>
              <li>Use sharp end of pusher to remove glue.</li>
              <li>Buff your nails to remove glue stains.</li>
              <li>Repeat steps 1–5 for all fingers. You’re done!</li>
            </ol>
          </div>

          {/* How to Measure */}
          <div className="bg-white rounded-3xl shadow-xl border border-pink-200 p-6">
            <h2 className="text-2xl font-semibold text-[#b6004c] mb-4">
              How to Measure Your Size
            </h2>
            <p className="text-pink-600 text-sm">
              📸 Send a clear picture of your thumb and fingers next to any coin
              (₹2 or ₹1 recommended) for best custom fit. Please make sure the
              images are taken vertically from top for the coin for the best
              fit.
            </p>
            <div className="flex flex-row justify-center items-center gap-2 mt-4">
              <img
                src={photo1}
                alt="How to measure example 1"
                className="w-1/2 max-w-[160px] rounded-xl border border-pink-200 object-cover"
              />
              <img
                src={photo2}
                alt="How to measure example 2"
                className="w-1/2 max-w-[160px] rounded-xl border border-pink-200 object-cover"
              />
            </div>
          </div>

          {/* Quick Guide */}
          <div className="bg-white rounded-3xl shadow-xl border border-pink-200 p-6">
            <h2 className="text-2xl font-semibold text-[#b6004c] mb-4">
              Quick Guide – Apply & Remove
            </h2>
            <p className="text-pink-600 text-sm space-y-2">
              <strong>Apply:</strong> Push, buff, clean, glue, press & done in
              10 seconds!
              <br />
              <strong>Remove:</strong> Soak, loosen, lift, clean glue & reuse
              💧💖
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
