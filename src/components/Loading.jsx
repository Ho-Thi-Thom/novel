import { CircleLoader } from "react-spinners";

import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <CircleLoader color="#36d7b7" />
      LOADING ...
    </div>
  );
};

export default Loading;
