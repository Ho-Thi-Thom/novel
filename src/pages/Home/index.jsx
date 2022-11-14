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
      <div className="h-full w-full">
        <div className=" py-3 fixed top-0 left-0 right-0 bg-black">
          <h1 className="text-center uppercase text-2xl font-bold text-yellow-50 font-sans"> Tiểu thuyết TOEIC</h1>
        </div>
        <div className="bg-white w-full py-5 my-16 max-w-xl mx-auto border rounded-md ">
          <ListNovel data={data} />
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
