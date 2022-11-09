import React from "react";
import { BiError } from "react-icons/bi";

const Error = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen animate-pulse">
      <BiError size={64} color="f00" />
      <p className="flex font-medium">{title} </p>
    </div>
  );
};

export default Error;
