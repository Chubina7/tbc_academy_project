import React from "react";

function Item() {
  return (
    <div className="w-full flex flex-col justify-start items-start p-3 rounded-lg bg-[#202326]">
      <div className="rounded-md w-full min-h-64 bg-slate-700" />
      <div className="h-full w-full flex flex-col justify-between gap-5 p-4">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold rounded-full w-full h-8 bg-slate-700" />
          <div className="opacity-60 rounded-full w-full h-6 bg-slate-700" />
          <div className="opacity-60 rounded-full w-full h-6 bg-slate-700" />
          <div className="opacity-60 rounded-full w-full h-6 bg-slate-700" />
        </div>
        <div className="flex justify-between items-cen8ter">
          <div className="bg-slate-700 rounded-full h-8 w-full mr-3" />
          <div className="bg-[#F25050] text-inherit rounded-full px-4 py-1 h-8 w-24" />
        </div>
      </div>
    </div>
  );
}

export default Item;
