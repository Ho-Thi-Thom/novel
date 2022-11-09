import React, { createContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { GiEvilBook } from "react-icons/gi";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import client from "../../sanity/config";
import { GET_DETAIL_NOVEL } from "../../sanity/novel/listNovel";
import { Tooltip } from "@material-tailwind/react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
export const NovelContext = createContext();

const Novel = () => {
  const { id } = useParams();
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
  // LOADING
  if (state === 0) {
    <Loading />;
  } else if (state === 1) {
    // DATA
    return (
      <div>
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="p-4 mx-auto max-w-screen-xl md:mx-6 xl:mx-2">
            <div class="flex justify-center">
              <ul class="flex flex-row space-x-5 text-sm font-medium-">
                <li className="flex flex-col items-center">
                  <GiEvilBook className="text-2xl" />
                  <Link
                    to="*"
                    className="text-gray-900 dark:text-white hover:none hover:text-red-600 "
                  >
                    Novel
                  </Link>
                </li>
                <li className="flex flex-col items-center">
                  <RiCharacterRecognitionLine className="text-2xl" />
                  <Link
                    to="vocabulary"
                    className="text-gray-900 dark:text-white hover:none hover:text-red-600 "
                  >
                    Vocabulary
                  </Link>
                </li>
                <li className="flex flex-col items-center">
                  <BsCheck2Circle className="text-2xl" />
                  <Link
                    to="multiple"
                    className="text-gray-900 dark:text-white hover:none hover:text-red-600 "
                  >
                    Multiple
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <NovelContext.Provider value={data}>
          <Outlet />
        </NovelContext.Provider>
      </div>
    );
  } else {
    // ERROR
    <Error title="DATA QUERY ERROR" />;
  }
};

export default Novel;
