import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../sanity/config";
import { GET_DETAIL_NOVEL } from "../../sanity/novel/listNovel";
import { Tooltip } from "@material-tailwind/react";
import { CircleLoader } from "react-spinners";
import { BiError } from "react-icons/bi";
const TabNovel = () => {
  const { id } = useParams();
  // alert(id);
  const [data, setData] = useState({
    title: "",
    content: "",
    vocabularies: [],
    contentVos: [],
  });
  const [state, setState] = useState(0);
  useEffect(() => {
    client
      .fetch(GET_DETAIL_NOVEL, { IdNovel: id })
      .then((result) => {
        const [first, ...contentList] = result.content.split("*");
        const contentVos = [first];
        contentList.forEach((item, index) => {
          contentVos.push(
            <Tooltip
              content={result.vocabularies[index].vi}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              className="bg-lime-900 text-white font-bold py-2 px-4 rounded"
            >
              <div
                key={index}
                className="text-violet-800 font-normal cursor-pointer inline-flex"
              >
                {result.vocabularies[index].en}
              </div>
            </Tooltip>
          );
          contentVos.push(item);
        });
        setData({ ...result, contentVos: contentVos });
        setState(1);
      })
      .catch((err) => {
        setState(2);
      });
  }, []);
  if (state === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <CircleLoader color="#36d7b7" />
        LOADING ...
      </div>
    );
  } else if (state === 1) {
    return (
      <div className="mx-auto w-full max-w-4xl flex flex-col max-h-screen">
        <h2 className="text-center font-bold text-2xl uppercase block text-lime-800 my-5 sm:my-10 flex-shrink-0">
          {data.title}
        </h2>
        <div className="px-5 text-xl font-sans font-normal leading-7 overflow-auto">
          {data.contentVos}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen animate-pulse">
        <BiError size={64} color="f00" />
        <p className="flex font-medium"> DATA QUERY ERROR</p>
      </div>
    );
  }
};

export default TabNovel;
