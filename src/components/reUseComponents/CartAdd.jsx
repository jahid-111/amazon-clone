import useCart from "../../hooks/hook_context/useCart";

export default function CartAdd() {
  const { cartItems, addToCart } = useCart();
  //   console.log(cartItems.length);
  return (
    <button
      onClick={() => addToCart("id")}
      className="bg-[#fac942] text-gray-800 font-medium rounded-full py-2 text-xs px-10 transition-colors"
    >
      Add To Cart
    </button>
  );
}
