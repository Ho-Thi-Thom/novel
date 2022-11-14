import React, { useContext } from "react";
import { NovelContext } from "./index";

const TabNovel = () => {
  const value = useContext(NovelContext);
  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col max-h-screen bg-white my-10 border rounded-md">
      <h2 className="text-center font-bold text-2xl uppercase block text-lime-800 my-5 sm:my-10 flex-shrink-0">
        {value.title}
      </h2>
      <div className="px-10 pb-10 text-xl font-sans font-normal leading-7 overflow-auto">{value.contentVos}</div>
    </div>
  );
};

export default TabNovel;
