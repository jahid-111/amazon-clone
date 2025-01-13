export default function BackToTop() {
  return (
    <>
      <button
        className="block text-center w-full bg-slate-700 hover:bg-slate-600 text-gray-200 py-4 text-xs font-semibold"
        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      >
        BACK TO TOP
      </button>
    </>
  );
}
