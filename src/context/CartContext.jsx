import { useState } from "react";
import { CartContext } from "../context/index";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  //   console.log(cartItems)
  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
