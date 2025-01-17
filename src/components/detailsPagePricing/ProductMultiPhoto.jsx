export default function ProductMultiPhoto({
  img,
  id,
  onViewPhoto,
  isSelected,
}) {
  return (
    <div
      onMouseEnter={() => onViewPhoto(id)}
      className={`border border-blue hover:border-4 rounded-md py-1 transition-all duration-200 ease-in cursor-pointer 
                  ${isSelected ? "border-4 border-blue" : ""}`}
    >
      <img
        className="h-8 w-6 m-1 object-contain"
        src={img}
        alt={`product image ${id + 1}`}
      />
    </div>
  );
}
