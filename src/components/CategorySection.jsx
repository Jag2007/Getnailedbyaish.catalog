import ImageGallery from "./ImageGallery";
import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <section id="categories" className="p-6 space-y-10">
      {[
        "Solid Hues",
        "Customer Favourites",
        "Pop Culture Picks",
        "Bow & Blush",
        "Midnight Spark",
        "Boss Babe Bling",
        "Festive Feels",
      ].map((label, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-4">
            <span className="bg-[#e10053] text-[#f8d4e6] px-2 py-1 rounded-xl shadow-sm inline-block">
              💅 {label}
            </span>
          </h2>
          <ImageGallery
            placeholderCount={4}
            viewAllLink={`/collections/${label
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          />
        </div>
      ))}
    </section>
  );
}
