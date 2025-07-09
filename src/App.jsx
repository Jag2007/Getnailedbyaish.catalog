import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import SolidHues from "./components/SolidHues";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import Category3 from "./pages/Category3";
import Category4 from "./pages/Category4";
import Category5 from "./pages/Category5";
import CollectionDetail from "./components/CollectionDetail";
import Howto from "./pages/Howto";
import Collections from "./pages/Collections";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solid-hues" element={<SolidHues />} />
        <Route path="/category1" element={<Category1 />} />
        <Route path="/category2" element={<Category2 />} />
        <Route path="/category3" element={<Category3 />} />
        <Route path="/category4" element={<Category4 />} />
        <Route path="/category5" element={<Category5 />} />
        <Route path="/howto" element={<Howto />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/collections/:collectionName"
          element={<CollectionDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}
