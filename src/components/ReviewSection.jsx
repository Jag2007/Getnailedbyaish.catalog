import { useState, useEffect, useRef } from "react";
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

export default function ReviewSection() {
  const [start, setStart] = useState(0);
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 900) return 2;
    if (window.innerWidth < 1200) return 3;
    return 4;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const intervalRef = useRef();

  // Carousel navigation
  const move = (dir) => {
    setStart((prev) => {
      if (dir === "left") {
        return (
          (prev - visibleCount + reviewImages.length) % reviewImages.length
        );
      } else {
        return (prev + visibleCount) % reviewImages.length;
      }
    });
  };

  // Auto-scroll with reset on manual navigation
  useEffect(() => {
    const resetInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => move("right"), 3500);
    };
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [start, visibleCount]);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle wrap-around for the carousel
  const visibleImages =
    start + visibleCount <= reviewImages.length
      ? reviewImages.slice(start, start + visibleCount)
      : [
          ...reviewImages.slice(start),
          ...reviewImages.slice(
            0,
            (start + visibleCount) % reviewImages.length
          ),
        ];

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
      <div className="flex items-center justify-center gap-2 md:gap-4">
        {/* Left Arrow */}
        <button
          aria-label="Previous reviews"
          onClick={() => move("left")}
          className="p-2 rounded-full bg-white border-2 border-[#f8d4e6] text-[#e10053] hover:bg-[#f8d4e6] transition-colors shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        {/* Review Images */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-stretch transition-all duration-500 min-h-[320px] w-full max-w-6xl">
          {visibleImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Client review ${idx + 1}`}
              className="min-w-[220px] max-w-xs w-full h-72 object-cover border-4 border-pink-300 rounded-2xl mx-auto"
              loading="lazy"
            />
          ))}
        </div>
        {/* Right Arrow */}
        <button
          aria-label="Next reviews"
          onClick={() => move("right")}
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
