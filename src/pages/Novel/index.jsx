import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../sanity/config";
import { GET_DETAIL_NOVEL } from "../../sanity/novel/listNovel";
const Novel = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    content: "",
    vocabularies: [],
    contentVos: [],
  });
  useEffect(() => {
    client.fetch(GET_DETAIL_NOVEL, { IdNovel: id }).then((result) => {
      const [first, ...contentList] = result.content.split("*");
      const contentVos = [first];
      contentList.forEach((item, index) => {
        contentVos.push(
          <span title={result.vocabularies[index].vi} key={index}>
            {result.vocabularies[index].en}
          </span>
        );
        contentVos.push(item);
      });
      setData({ ...result, contentVos: contentVos });
    });
  }, []);
  console.log(data);
  return (
    <div>
      <h2 className="text-center font-bold text-2xl uppercase text-lime-800 my-10">
        {data.title}
      </h2>
      <div className="prose md:prose-lg lg:prose-xl">{data.contentVos}</div>
    </div>
  );
};

export default Novel;
