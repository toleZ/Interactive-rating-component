const Star = ({ val, handleSelected, isSelected }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full grid place-content-center font-overpass font-bold hover:cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-light-grey text-white"
          : "bg-slate-700 text-light-grey hover:bg-orange hover:text-white"
      }`}
      onClick={() => handleSelected(val)}
    >
      {val}
    </div>
  );
};

export default Star;
