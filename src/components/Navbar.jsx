import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";
import logo from "../Images/Subject.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to navigate and scroll to a section
  const goToSection = useCallback(
    (sectionId) => {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100); // 100ms delay to allow page to render
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [navigate, location.pathname]
  );

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
          <button className="hover:underline" onClick={() => navigate("/")}>
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => goToSection("categories")}
          >
            Collections
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => goToSection("contact")}
          >
            Contact
          </button>
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
          <button
            className="text-[#c3547d] text-lg"
            onClick={() => {
              setOpen(false);
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="text-[#c3547d] text-lg"
            onClick={() => {
              setOpen(false);
              goToSection("categories");
            }}
          >
            Categories
          </button>
          <button
            className="text-[#c3547d] text-lg"
            onClick={() => {
              setOpen(false);
              goToSection("contact");
            }}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
