import React, { useEffect, useState } from "react";
import ListNovel from "../../components/ListNovel";
import client from "../../sanity/config";
import { GET_ALL_NOVEL } from "../../sanity/novel/listNovel";
import Loading from "../../components/Loading";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    client.fetch(GET_ALL_NOVEL).then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return (
    <div className="h-full w-full">
      <div className=" py-3  top-0 left-0 right-0 bg-black">
        <h1 className="text-center uppercase text-2xl font-bold text-yellow-50 font-sans"> Tiểu thuyết TOEIC</h1>
      </div>
      <div ref={parent}>
        {loading ? (
          <Loading />
        ) : (
          <div className="bg-white w-full py-5 my-16 max-w-xl mx-auto border rounded-md ">
            <ListNovel data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
