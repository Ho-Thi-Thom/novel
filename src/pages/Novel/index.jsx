import React, { createContext } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
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
  let activeClassName =
    "text-green-600 flex flex-col justify-center items-center";
  let notActive = "flex flex-col justify-center items-center";
  // LOADING
  if (state === 0) {
    <Loading />;
  } else if (state === 1) {
    // DATA
    return (
      <div>
        <nav className="bg-gray-50 dark:bg-gray-700 fixed left-0 right-0 top-0 h-16 z-10 flex justify-center items-center">
          <div className="p-4 mx-auto max-w-screen-xl md:mx-6 xl:mx-2">
            <div className="flex justify-center">
              <ul className="flex flex-row space-x-5 text-sm font-medium ">
                <li className="flex flex-col items-center justify-center">
                  <NavLink
                    to="novel"
                    className={({ isActive }) =>
                      isActive ? activeClassName : notActive
                    }
                  >
                    <GiEvilBook className="text-2xl" />
                    Novel
                  </NavLink>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <NavLink
                    to="vocabulary"
                    className={({ isActive }) =>
                      isActive ? activeClassName : notActive
                    }
                  >
                    <RiCharacterRecognitionLine className="text-2xl" />
                    Vocabulary
                  </NavLink>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <NavLink
                    to="multiple"
                    className={({ isActive }) =>
                      isActive ? activeClassName : notActive
                    }
                  >
                    <BsCheck2Circle className="text-2xl" />
                    Multiple
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="h-16"></div>
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
