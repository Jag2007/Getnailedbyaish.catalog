import { useState } from "react";
import logo from "/images/Subject.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 rounded-full border-2 border-[#e7b2c6]"
        />
        <span className="text-[#e10053] font-bold text-lg md:text-xl">
          get.nailedbyaish
        </span>
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 font-regular text-[#c3547d] text-base md:text-lg">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#categories" className="hover:underline">
            Categories
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      {/* Mobile Hamburger */}
      <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)}>
        {open ? (
          <X className="w-7 h-7 text-[#e10053]" />
        ) : (
          <Menu className="w-7 h-7 text-[#e10053]" />
        )}
      </button>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 z-50 md:hidden animate-fade-in">
          <a
            href="#"
            className="text-[#c3547d] text-lg"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#categories"
            className="text-[#c3547d] text-lg"
            onClick={() => setOpen(false)}
          >
            Categories
          </a>
          <a
            href="#contact"
            className="text-[#c3547d] text-lg"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
