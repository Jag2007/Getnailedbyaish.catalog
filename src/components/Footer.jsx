import { Instagram, Phone } from "lucide-react";
import logo from "../Images/Subject.png";

export default function Footer() {
  return (
    <footer
      className="py-8 md:py-10 lg:py-20 shadow-inner"
      id="contact"
      style={{ backgroundColor: "#fff", color: "#c3547d" }}
    >
      <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2"
            style={{ borderColor: "#e7b2c6", boxShadow: "0 0 5px #e28dac" }}
          />
          <h1 className="text-base md:text-lg font-bold tracking-wide text-[#e10053]">
            get.nailedbyaish
          </h1>
          <p>Created. Designed. Delivered. — Jagruthi Pulumati 💅🌸</p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5" style={{ color: "#c3547d" }} />
            <a
              href="https://www.instagram.com/get.nailedbyaish/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm md:text-base"
            >
              @get.nailedbyaish
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" style={{ color: "#c3547d" }} />
            <a
              href="https://wa.me/6283449420"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm md:text-base"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p
            className="text-xs md:text-sm text-center md:text-right"
            style={{ color: "#c3547d" }}
          >
            Professional Nail Art Services ✨ Book your custom set today!
          </p>
        </div>
      </div>
    </footer>
  );
}
