import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    text: "Absolutely loved my custom set! The attention to detail and creativity is unmatched. Highly recommend Get Nailed by Aish!",
    rating: 5,
  },
  {
    name: "Megha R.",
    text: "The designs are so classy and cute. My nails have never looked better. Will definitely be coming back!",
    rating: 5,
  },
  {
    name: "Aarav T.",
    text: "Professional service and beautiful results. Booking was easy and the experience was wonderful.",
    rating: 5,
  },
  {
    name: "Simran K.",
    text: "Aish is so talented! My nails were exactly how I imagined. The baby pink ombré was stunning.",
    rating: 5,
  },
  {
    name: "Riya M.",
    text: "Super hygienic and friendly service. The nail art lasted for weeks and I got so many compliments!",
    rating: 5,
  },
  {
    name: "Divya P.",
    text: "Loved the custom designs and the attention to detail. The deep pink shades are my new favorite!",
    rating: 5,
  },
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

  // Helper to move carousel
  const move = (dir) => {
    setStart((prev) => {
      if (dir === "left") {
        return (prev - visibleCount + reviews.length) % reviews.length;
      } else {
        return (prev + visibleCount) % reviews.length;
      }
    });
  };

  // Auto-scroll with reset on manual navigation
  useEffect(() => {
    const resetInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => move("right"), 3000);
    };
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [start]);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle wrap-around for the carousel
  const visibleReviews =
    start + visibleCount <= reviews.length
      ? reviews.slice(start, start + visibleCount)
      : [
          ...reviews.slice(start),
          ...reviews.slice(0, (start + visibleCount) % reviews.length),
        ];

  return (
    <section className="py-16 px-4 bg-[#fff0f6]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#e10053] mb-2 drop-shadow-sm">
          What Our Clients Say
        </h2>
        <p className="text-[#c3547d] text-lg">
          Real reviews from our happy customers ✨
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
        {/* Reviews */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-stretch transition-all duration-500 min-h-[320px] w-full max-w-6xl">
          {visibleReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg p-6 flex-1 flex flex-col items-center border border-[#e7b2c6] min-w-[220px] max-w-xs mx-auto"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#e10053] fill-[#e10053]"
                  />
                ))}
              </div>
              <p className="text-[#c3547d] italic mb-4 text-center">
                "{review.text}"
              </p>
              <span className="font-semibold text-[#e10053]">
                - {review.name}
              </span>
            </div>
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
    </section>
  );
}
