import React from "react";

function Item() {
  return (
    <div className="w-full overflow-hidden flex flex-col justify-start items-start gap-2">
      <div className="w-full h-72 bg-[#3D52A1] dark:bg-[#EEE8F6] rounded-md opacity-70" />
      <h1 className="w-full h-7 bg-[#3D52A1] dark:bg-[#EEE8F6] rounded-full" />
      <p className="w-full h-16 bg-[#3D52A1] dark:bg-[#EEE8F6] rounded-lg opacity-70" />
      <button className="w-full h-8 rounded-md bg-[#3D52A1] text-[#EEE8F6] dark:bg-[#EEE8F6] dark:text-[#3D52A1] py-1 mt-4 hover:opacity-70" />
    </div>
  );
}

export default Item;
