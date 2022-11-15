import React, { useContext } from "react";
import Card from "../../components/Card";
import { NovelContext } from "./index";

const VocabularyList = () => {
  // title: "",
  // content: "",
  // vocabularies: [],
  // contentVos: [],
  const value = useContext(NovelContext);
  return (
    <div className="mx-auto w-full max-w-2xl my-10 sm:px-5">
      <div className="flex flex-col  bg-white border rounded-md">
        <div className="max-w-lg w-full mx-auto px-2.5 py-4">Số lượng: {value.vocabularies.length}</div>
        <div className="max-w-lg w-full mx-auto space-y-5 px-2.5  pr-5 pb-5">
          {value.vocabularies.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VocabularyList;
