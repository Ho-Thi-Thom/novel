import React, { useEffect, useState } from "react";
import ListNovel from "../../components/ListNovel";
import client from "../../sanity/config";
import { GET_ALL_NOVEL } from "../../sanity/novel/listNovel";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    client.fetch(GET_ALL_NOVEL).then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl uppercase text-lime-800 my-10">
        Tiểu thuyết TOEIC
      </h1>
      <ListNovel data={data} />
    </div>
  );
};

export default Home;
