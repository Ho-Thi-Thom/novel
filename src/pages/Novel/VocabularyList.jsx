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
    <div className="mx-auto w-full max-w-2xl flex flex-col max-h-full bg-white my-10 border rounded-md">
      <div className="max-w-lg w-full mx-auto px-2.5 py-4">Số lượng: {value.vocabularies.length}</div>
      <div className="max-w-lg w-full mx-auto space-y-5 px-2.5  pr-5 pb-5">
        {value.vocabularies.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default VocabularyList;
