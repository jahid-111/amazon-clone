import { useState } from "react";

export default function SelectedDetails() {
  const [visible, setVisible] = useState(null);

  return (
    <>
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-16 cursor-pointer"
      >
        <img
          src="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_SL1500_.jpg"
          alt=""
          className=""
        />
      </div>
      {visible && (
        <div className="absolute right-28 top-48 flex justify-center items-center bottom-28 max-h-full">
          <img
            src="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_SL1500_.jpg"
            alt="Hovered Photo"
            className=" h-[50rem] border-2 border-gray-300 rounded-sm py-2 shadow-2xl shadow-stone-500 object-cove min-w-[40rem]  z-50"
          />
        </div>
      )}
    </>
  );
}
