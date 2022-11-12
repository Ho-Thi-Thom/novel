import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Card from "../../components/Card";
import client from "../../sanity/config";
import { GET_DETAIL_NOVEL } from "../../sanity/novel/listNovel";
import { NovelContext } from "./index";
import randomVocabularies from "../../utils/temp";
import CardMultiple from "../../components/CardMultiple";
const Multiple = () => {
  // title: "",
  // content: "",
  // vocabularies: [],
  // contentVos: [],

  const value = useContext(NovelContext);
  const randomListVoc = useMemo(
    () => randomVocabularies(value.vocabularies),
    []
  );

  const [answer, setAnswer] = useState(null);
  const index = useRef(0);
  const handleSubmit = () => {
    // console.log(answer, "?", randomListVoc[index.current]._id);
  };

  const [isCorrect, setIsCorrect] = useState(false);
  return (
    <div className=" lg:max-w-4xl sm:max-w-xl mx-auto  mt-10 w-full ">
      <div className="rounded-lg  bg-white shadow-lg mx-2  min-h-[500px] p-4">
        <div className="mt-2">
          <span className="pl-2">
            Số lượng: {index.current + 1} / {randomListVoc.length}
          </span>
          <br />
          <p className="text-red-600 text-center pl-3">
            {randomListVoc[index.current].en}
          </p>
        </div>
        <div className="text-center bg-slate-400">Thoong baos</div>
        <div className="max-w-md min-h-[300px]  rounded-md mx-auto mt-5">
          {randomListVoc[index.current].envis.map((item) => (
            <CardMultiple
              value={item}
              handleClick={setAnswer}
              answer={answer}
            />
          ))}
        </div>
        <div className=" flex justify-center items-center mt-5">
          <Button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleSubmit}
          >
            Kiểm tra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Multiple;
