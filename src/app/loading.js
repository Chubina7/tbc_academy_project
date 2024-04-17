import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function loading() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <AiOutlineLoading3Quarters size={64} className="animate-spin" />
    </div>
  );
}

export default loading;
