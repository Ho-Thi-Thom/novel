import React, { useState } from "react";

const Card = ({ item }) => {
  const [isCheck, setIsCheck] = useState(true);
  if (isCheck) {
    return (
      <div
        className="rounded-md px-5 py-3 shadow-lg border border-lime-600 transition-all"
        onMouseOver={() => setIsCheck(false)}
      >
        {item.en}
      </div>
    );
  } else {
    return (
      <div
        className="rounded-md px-5 py-3 shadow-lg border border-lime-600 transition-all bg-lime-800 text-white cursor-pointer"
        onMouseLeave={() => setIsCheck(true)}
      >
        {item.vi}
      </div>
    );
  }
};

export default Card;
