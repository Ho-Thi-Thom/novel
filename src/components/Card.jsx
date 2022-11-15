import React from "react";

const Card = ({ item }) => {
  return (
    <div className="rounded-md px-5 py-3 shadow-lg border border-lime-600 transition-all group hover:bg-lime-500 hover:text-white">
      <span className="block group-hover:hidden">{item.en}</span>
      <span className="hidden group-hover:block">{item.vi}</span>
    </div>
  );
};
// className="rounded-md px-5 py-3 shadow-lg border border-lime-600 transition-all bg-lime-800 text-white cursor-pointer"

export default Card;
