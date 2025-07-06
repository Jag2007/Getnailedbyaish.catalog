import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import ReviewSection from "./components/ReviewSection";
import Bow from "../images/background.jpeg";
import SampleCollections from "./components/SampleCollections";
import CollectionDetail from "./components/CollectionDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-[#e28dac]">
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<SampleCollections />} />
          <Route
            path="/collections/:collectionName"
            element={<CollectionDetail />}
          />
        </Routes>
        <div
          style={{
            backgroundImage: `url(${Bow})`,
            backgroundRepeat: "repeat",
            backgroundSize: "80px",
            backgroundPosition: "top center",
          }}
        >
          <CategorySection />
          <ReviewSection />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
