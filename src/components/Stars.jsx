import { useState } from "react";
import Star from "./Star";

const Stars = ({ onSubmit }) => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (i) => {
    setSelected(i);
  };

  return (
    <>
      <section className="flex gap-2 justify-between items-center w-full pt-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            val={star}
            key={star}
            handleSelected={handleSelected}
            isSelected={selected === star}
          />
        ))}
      </section>

      <button
        className="w-full rounded-3xl p-2 mt-6 bg-orange text-white font-overpass font-normal hover:bg-white hover:text-orange transition-all duration-300"
        onClick={() => selected !== null && onSubmit(selected)}
      >
        SUBMIT
      </button>
    </>
  );
};

export default Stars;
