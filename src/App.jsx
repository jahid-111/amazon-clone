import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import your page components
import Electronics from "./pages/home/Electronics";
import HomePage from "./pages/home/HomePage";
import ProductDetailsPage from "./pages/home/ProductDetailsPage";
import TodaysDeals from "./pages/home/TodaysDeals";
import NotFound from "./components/utilsPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/todays-deals" element={<TodaysDeals />} />

      {/* DYNAMIC PAGE */}
      <Route path="/product/:id" element={<ProductDetailsPage />} />

      {/* NOT FOUND 404  */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
