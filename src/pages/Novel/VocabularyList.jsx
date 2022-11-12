import React, { useContext, useState } from "react";
import Card from "../../components/Card";
import { NovelContext } from "./index";

const VocabularyList = () => {
  // title: "",
  // content: "",
  // vocabularies: [],
  // contentVos: [],
  const value = useContext(NovelContext);
  return (
    <div className="relative h-screen  flex flex-col">
      <div className="max-w-lg w-full mx-auto px-2.5 py-4">
        Số lượng: {value.vocabularies.length}
      </div>
      <div className="max-w-lg w-full mx-auto space-y-5 px-2.5  pr-5">
        {value.vocabularies.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default VocabularyList;
