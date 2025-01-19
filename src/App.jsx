import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import ProductDetailsPage from "./pages/home/ProductDetailsPage";
import NotFound from "./components/utilsPage/NotFoundPage";
import ElectronicPage from "./pages/home/ElectronicPage";
import TodaysDealsPage from "./pages/home/TodaysDealsPage";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/electronics" element={<ElectronicPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/todays-deals" element={<TodaysDealsPage />} />

        {/* DYNAMIC PAGE */}
        <Route path="/product/:id" element={<ProductDetailsPage />} />

        {/* NOT FOUND 404  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
