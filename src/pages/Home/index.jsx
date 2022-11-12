import React, { useEffect, useState } from "react";
import ListNovel from "../../components/ListNovel";
import client from "../../sanity/config";
import { GET_ALL_NOVEL } from "../../sanity/novel/listNovel";
import Loading from "../../components/Loading";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    client.fetch(GET_ALL_NOVEL).then((result) => {
      setData(result);
      setState(true);
    });
  }, []);
  const [state, setState] = useState(false);
  if (state) {
    return (
      <div>
        <h1 className="text-center font-bold text-2xl uppercase text-lime-800 my-10">
          Tiểu thuyết TOEIC
        </h1>
        <ListNovel data={data} />
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
