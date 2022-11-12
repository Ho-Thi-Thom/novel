import React from "react";

const CardMultiple = ({ value, handleClick, answer }) => {
  return (
    <div
      className={
        (value._id === answer ? "bg-cyan-400 " : "") +
        "rounded-md px-5 py-3 shadow-lg border border-green-600 text-black transition-all my-4"
      }
      onClick={() => handleClick(value._id)}
    >
      {value.vi}
    </div>
  );
};

export default CardMultiple;
