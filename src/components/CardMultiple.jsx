import React from "react";

const CardMultiple = ({ value, handleClick, answer, isCorrect, idCorrect }) => {
  return (
    <button
      className={
        (isCorrect === 0
          ? value._id === answer
            ? "bg-cyan-400"
            : " "
          : isCorrect === 1
          ? value._id === answer
            ? "bg-green-500 "
            : " "
          : value._id === answer
          ? "bg-red-600 "
          : value._id === idCorrect
          ? "bg-green-500 "
          : " ") +
        " rounded-md px-5 py-3 shadow-lg border border-green-600 text-black transition-all my-4 block w-full text-left"
      }
      onClick={() => handleClick(value._id)}
      disabled={isCorrect !== 0}
    >
      {value.vi}
    </button>
  );
};

export default CardMultiple;
