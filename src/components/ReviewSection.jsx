import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img7368 from "../review/IMG_7368.png";
import img7361 from "../review/IMG_7361.png";
import img7370 from "../review/IMG_7370.png";
import img7371 from "../review/IMG_7371.png";
import img7373 from "../review/IMG_7373.png";
import img7374 from "../review/IMG_7374.png";
import img7375 from "../review/IMG_7375.png";
import img7376 from "../review/IMG_7376.png";
import img7377 from "../review/IMG_7377.png";
import img7379 from "../review/IMG_7379.png";

const reviewImages = [
  img7368,
  img7361,
  img7370,
  img7371,
  img7373,
  img7374,
  img7375,
  img7376,
  img7377,
  img7379,
];

function getVisibleCount() {
  if (typeof window !== "undefined" && window.innerWidth >= 768) {
    return 4;
  }
  return 2;
}

export default function ReviewSection() {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = reviewImages.length;

  const next = () => setStartIndex((prev) => (prev + visibleCount) % total);
  const prev = () =>
    setStartIndex((prev) => (prev - visibleCount + total) % total);

  // Get the visible images, wrap around if needed
  let visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(reviewImages[(startIndex + i) % total]);
  }

  return (
    <section className="py-16 px-4 bg-[#fff0f6]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#e10053] mb-2 drop-shadow-sm">
          Client Spotlight
        </h2>
        <p className="text-[#c3547d] text-lg">
          Real photos from our happy clients ✨
        </p>
      </div>
      {/* Review Images Responsive Carousel */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
        <button
          aria-label="Previous reviews"
          onClick={prev}
          className="p-2 rounded-full bg-white border-2 border-[#f8d4e6] text-[#e10053] hover:bg-[#f8d4e6] transition-colors shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mx-auto`}
        >
          {visibleImages.map((src, idx) => (
            <div
              key={idx}
              className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-pink-200 bg-white mx-auto flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Client review ${((startIndex + idx) % total) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button
          aria-label="Next reviews"
          onClick={next}
          className="p-2 rounded-full bg-white border-2 border-[#f8d4e6] text-[#e10053] hover:bg-[#f8d4e6] transition-colors shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      {/* Instagram Link Section */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="text-[#b6004c] text-lg md:text-xl font-semibold text-center sm:text-left">
            Want to know what our clients say about our custom press-ons?
          </p>
          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/stories/highlights/18201119428307476/",
                "_blank"
              )
            }
            className="px-5 py-2 bg-gradient-to-r from-[#e10053] to-[#ff5e8e] text-white rounded-full font-semibold shadow hover:brightness-110 transition-all text-sm"
          >
            See
          </button>
        </div>
      </div>
    </section>
  );
}
