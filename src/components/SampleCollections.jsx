import { Link } from "react-router-dom";

const collections = [];

export default function SampleCollections() {
  return (
    <section className="w-full flex flex-col gap-16 py-10 px-4 bg-transparent">
      {collections.map((name) => (
        <div
          key={name}
          className="w-full max-w-7xl mx-auto rounded-2xl shadow-2xl py-8 px-4 border border-[#e7b2c6] flex flex-col items-center justify-center bg-transparent"
          style={{ boxShadow: "0 8px 32px 0 rgba(227, 0, 83, 0.15)" }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-[#e10053] mb-6 text-center">
            {name}
          </h3>
          {/* Product Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-transparent"
              >
                <div className="w-full aspect-[3/4] bg-[#f8d4e6] rounded-xl border-2 border-[#e10053] overflow-hidden shadow-lg transition-all duration-200 hover:scale-105 hover:border-[#e10053] hover:shadow-2xl" />
                <p className="mt-3 text-sm md:text-base font-semibold text-[#222]">
                  Sample Item
                </p>
                <p className="text-sm text-gray-600">₹999</p>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="mt-8 text-center">
            <Link
              to={`/collections/${name.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-block px-6 py-3 bg-[#e10053] text-white rounded-lg font-semibold shadow hover:bg-[#c3547d] transition-colors text-base md:text-lg"
            >
              View All
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
