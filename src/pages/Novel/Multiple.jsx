import { Button } from "@material-tailwind/react";
import React, { useContext, useMemo, useRef, useState } from "react";
import { NovelContext } from "./index";
import randomVocabularies from "../../utils/temp";
import CardMultiple from "../../components/CardMultiple";
const Multiple = () => {
  // title: "",
  // content: "",
  // vocabularies: [],
  // contentVos: [],

  const value = useContext(NovelContext);

  const [isRandomVocabularies, setIsRandomVocabularies] = useState(false);
  const randomListVoc = useMemo(() => randomVocabularies(value.vocabularies), [isRandomVocabularies]);
  const [notification, setNotification] = useState("Hãy chọn đáp án");
  const [answer, setAnswer] = useState(null);
  const [index, setIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);
  const [resultPage, setResultPage] = useState(false);
  const count = useRef(0);

  const handleSubmit = () => {
    if (answer === null) {
      setNotification("Chưa chọn đáp án");
    } else if (answer === randomListVoc[index]._id) {
      setIsCorrect(1);
      setNotification("Chính xác");
      count.current = count.current + 1;
    } else {
      setIsCorrect(2);
      setNotification("Chưa chính xác");
    }
  };

  const handleNext = () => {
    setIndex(index + 1);
    setNotification("Hãy chọn đáp án");
    setIsCorrect(0);
    setAnswer(null);
  };

  const handleResult = () => {
    setResultPage(true);
  };

  const handleReplay = () => {
    setIsRandomVocabularies(true);
    setResultPage(false);
    setAnswer(null);
    setIndex(0);
    setIsCorrect(0);
    setNotification("Hãy chọn đáp án");
    count.current = 0;
  };
  if (resultPage) {
    return (
      <div className=" lg:max-w-4xl sm:max-w-xl mx-auto  mt-10 w-full">
        <div className="rounded-lg  bg-white shadow-lg mx-2  min-h-[300px] p-4">
          <h2 className="text-center font-medium text-red-600 text-xl p-2">KẾT QUẢ</h2>
          <p className="bg-lime-700 text-white mt-4 p-2 border rounded-md">
            Số câu đúng: {count.current} / {randomListVoc.length}
          </p>
          <p className="bg-purple-600 text-white mt-4 p-2 border rounded-md">
            {" "}
            Tỉ lệ : {((count.current / randomListVoc.length) * 100).toFixed(2)} %
          </p>
          <div className="mt-7 flex justify-center items-center">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleReplay}
            >
              Làm lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" lg:max-w-4xl sm:max-w-xl mx-auto  mt-10 w-full ">
      <div className="rounded-lg  bg-white shadow-lg mx-2  min-h-[500px] p-2">
        <div className="mb-3">
          <div className="text-center">
            {index + 1} / {randomListVoc.length}
          </div>
          <div className="w-full h-2 border  rounded-md mx-auto border-lime-900 max-w-md ">
            <div
              className="bg-gradient-to-r to-sky-700  from-purple-800 border h-full rounded-md "
              style={{ width: ((index + 1) / randomListVoc.length) * 100 + "%", transition: "width 1s" }}
            ></div>
          </div>
        </div>
        <p className="text-red-600 text-center pl-3 mb-3 text-lg font-medium">{randomListVoc[index].en}</p>
        <div
          className={
            (isCorrect === 0
              ? " text-black bg-yellow-200"
              : isCorrect === 1
              ? "bg-lime-400"
              : " bg-red-400 text-white") + " text-center max-w-md mx-auto border rounded-md mt-2"
          }
        >
          {notification}
        </div>
        <div className="max-w-md min-h-[300px]  rounded-md mx-auto mt-5">
          {randomListVoc[index].envis.map((item, indexItem) => (
            <CardMultiple
              value={item}
              handleClick={setAnswer}
              answer={answer}
              isCorrect={isCorrect}
              idCorrect={randomListVoc[index]._id}
              key={indexItem}
            />
          ))}
        </div>
        <div className=" flex justify-center items-center mt-5">
          {isCorrect !== 0 ? (
            index !== randomListVoc.length - 1 ? (
              <Button
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleNext}
              >
                Tiếp theo
              </Button>
            ) : (
              <Button
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleResult}
              >
                Xem kết quả
              </Button>
            )
          ) : (
            <Button
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleSubmit}
            >
              Kiểm tra
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Multiple;
