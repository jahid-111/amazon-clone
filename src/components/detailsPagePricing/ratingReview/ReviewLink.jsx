export default function ReviewLink() {
  return (
    <>
      <div className="flex flex-col justify-center gap-3">
        <h5 className="text-xl font-bold">Review this product</h5>
        <p className="font-semibold text-xs">
          Share your thoughts with other customers
        </p>
        <button className="text-sm font-medium border px-10 py-1 rounded-full hover:bg-gray-100">
          Write a customer Review
        </button>
      </div>
    </>
  );
}
