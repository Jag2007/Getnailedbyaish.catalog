import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../Images/Subject.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex flex-wrap justify-between items-center p-1 sm:p-3 bg-white shadow-md sticky top-0 z-50 min-h-[44px]">
      <div className="flex items-center gap-1 sm:gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-7 w-7 sm:h-9 sm:w-9 rounded-full border-2 border-[#e7b2c6]"
        />
        <span className="text-[#e10053] font-bold text-sm sm:text-base md:text-xl">
          get.nailedbyaish
        </span>
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-2 sm:gap-4 font-regular text-[#c3547d] text-xs sm:text-sm md:text-lg">
        <li>
          <button className="hover:underline" onClick={() => navigate("/")}>
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => navigate("/collections")}
          >
            Collections
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => navigate("/howto")}
          >
            How to ?
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => navigate("/about")}
          >
            About Me
          </button>
        </li>
      </ul>
      {/* Mobile Hamburger */}
      <button className="md:hidden p-1" onClick={() => setOpen((v) => !v)}>
        {open ? (
          <X className="w-6 h-6 text-[#e10053]" />
        ) : (
          <Menu className="w-6 h-6 text-[#e10053]" />
        )}
      </button>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-3 py-4 z-50 md:hidden animate-fade-in">
          <button
            className="text-[#c3547d] text-base"
            onClick={() => {
              setOpen(false);
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="text-[#c3547d] text-base"
            onClick={() => {
              setOpen(false);
              navigate("/collections");
            }}
          >
            Collections
          </button>
          <button
            className="text-[#c3547d] text-base"
            onClick={() => {
              setOpen(false);
              navigate("/howto");
            }}
          >
            How to ?
          </button>
          <button
            className="text-[#c3547d] text-base"
            onClick={() => {
              setOpen(false);
              navigate("/about");
            }}
          >
            About Me
          </button>
        </div>
      )}
    </nav>
  );
}
