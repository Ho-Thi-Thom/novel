import React, { createContext } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { GiEvilBook } from "react-icons/gi";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import client from "../../sanity/config";
import { GET_DETAIL_NOVEL } from "../../sanity/novel/listNovel";
import { Tooltip } from "@material-tailwind/react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const NovelContext = createContext();

const Novel = () => {
  const [parent] = useAutoAnimate();

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
              <div key={index} className="text-violet-800 font-normal cursor-pointer inline-flex">
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
  let activeClassName = "text-green-400 flex flex-col justify-center items-center";
  let notActive = "flex flex-col justify-center items-center  text-yellow-50";
  // LOADING

  if (state === 2) return <Error title="DATA QUERY ERROR" />;
  return (
    <div>
      <nav className=" bg-black fixed left-0 right-0 top-0 h-16 z-10 flex justify-center items-center">
        <div className="mx-auto max-w-screen-xl md:mx-6 xl:mx-2 ">
          <div className="flex justify-center">
            <ul className="flex flex-row space-x-5 text-sm font-medium ">
              <li className="flex flex-col items-center justify-center">
                <NavLink to="/" className="flex flex-col justify-center items-center  text-white ">
                  <AiFillHome className="text-2xl " />
                  Home
                </NavLink>
              </li>
              <li className="flex flex-col items-center justify-center">
                <NavLink to="novel" className={({ isActive }) => (isActive ? activeClassName : notActive)}>
                  <GiEvilBook className=" text-2xl " />
                  Novel
                </NavLink>
              </li>
              <li className="flex flex-col items-center justify-center">
                <NavLink to="vocabulary" className={({ isActive }) => (isActive ? activeClassName : notActive)}>
                  <RiCharacterRecognitionLine className="text-2xl" />
                  Vocabulary
                </NavLink>
              </li>
              <li className="flex flex-col items-center justify-center">
                <NavLink to="multiple" className={({ isActive }) => (isActive ? activeClassName : notActive)}>
                  <BsCheck2Circle className="text-2xl" />
                  Multiple
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
      <div ref={parent}>
        {state === 0 ? (
          <Loading />
        ) : (
          <NovelContext.Provider value={data}>
            <Outlet />
          </NovelContext.Provider>
        )}
      </div>
    </div>
  );
};

export default Novel;
