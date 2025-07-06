import { Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function ImageGallery({ placeholderCount = 4, viewAllLink }) {
  return (
    <div className="bg-gradient-to-br from-[#f2a8cd] via-white to-[#f8d4e6] rounded-2xl p-2 sm:p-3 md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-3 md:gap-6">
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={i}
            className="group flex flex-col items-center bg-white rounded-xl shadow-md border border-[#f8d4e6] transition-transform duration-100 hover:scale-101 hover:border-[#e10053] overflow-hidden w-half"
          >
            <div className="w-100 aspect-square flex items-center justify-center bg-gradient-to-tr from-[#e7b2c6] via-[#fff0f6] to-[#e28dac]">
              <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#e10053] opacity-60" />
            </div>
            <div className="p-0.5 sm:p-1.5 md:p-2 flex flex-col gap-0.5 w-100">
              <h3 className="text-[#e10053] font-bold text-[10px] sm:text-xs md:text-sm mb-0.5 text-center">
                Collection Name {i + 1}
              </h3>
              <p className="text-[#c3547d] text-[8px] sm:text-[10px] md:text-xs text-center leading-tight">
                Description of the collection.
                <br />
                Description of the collection.
                <br />
                Description of the collection.
                <br />
                Description of the collection.
              </p>
            </div>
          </div>
        ))}
      </div>
      {viewAllLink && (
        <div className="mt-4 flex justify-center">
          <Link
            to={viewAllLink}
            className="inline-block px-6 py-2 bg-[#e10053] text-white rounded-lg font-semibold shadow hover:bg-[#c3547d] transition-colors text-xs sm:text-sm md:text-base"
          >
            View All
          </Link>
        </div>
      )}
    </div>
  );
}
