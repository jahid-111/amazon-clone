import { useContext } from "react";
import { CartContext } from "../../context/index"; // Import the CartContext

export default function useCart() {
  return useContext(CartContext); // Access the CartContext and return its value
}
