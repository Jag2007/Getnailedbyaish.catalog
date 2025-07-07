import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import SolidHues from "./components/SolidHues";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import CollectionDetail from "./components/CollectionDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solid-hues" element={<SolidHues />} />
        <Route path="/category1" element={<Category1 />} />
        <Route path="/category2" element={<Category2 />} />
        <Route
          path="/collections/:collectionName"
          element={<CollectionDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}
