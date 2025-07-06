import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CollectionDetail from "./components/CollectionDetail";
import SolidHues from "./components/SolidHues";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";

// Background
import Bow from "../images/background.jpeg";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#e28dac]">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-[#f4ced9]">
                  <div className="max-w-7xl mx-auto text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#f8d4e6] to-[#f0b8d0] rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-3xl">💅</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#e10053] mb-4">
                      Welcome to Get Nailed by Aish
                    </h3>
                    <p className="text-[#c3547d] text-lg">
                      Professional nail art services with a touch of elegance
                      and creativity!
                    </p>
                  </div>
                </section>
              }
            />
            <Route
              path="/collections/:collectionName"
              element={<CollectionDetail />}
            />
          </Routes>
        </main>

        {/* Background Pattern Section */}
        <div
          className="relative"
          style={{
            backgroundImage: `url(${Bow})`,
            backgroundRepeat: "repeat",
            backgroundSize: "80px",
            backgroundPosition: "top center",
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/10"></div>

          {/* Content with proper spacing */}
          <div className="relative z-10 space-y-16 md:space-y-24">
            <div className="pt-16 md:pt-20">
              <SolidHues />
            </div>

            <div className="pb-16 md:pb-20">
              <ReviewSection />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
