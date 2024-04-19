import React from "react";

export default function Item() {
  return (
    <div className="w-full flex gap-1 flex-col sm:flex-row sm:gap-8">
      <div className="rounded-md bg-slate-700 min-w-[308px] min-h-[310px]" />
      <div className="w-full md:w-[180%] flex flex-col justify-start gap-3 md:gap-6">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-xl sm:text-3xl h-9 bg-slate-700 rounded-full" />
          <div className="w-full h-6 rounded-full bg-slate-700" />
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="bg-slate-700 rounded-full w-[50%] h-3" />
          <div className="bg-slate-700 rounded-full w-[50%] h-3" />
        </div>
        <div className="w-full flex flex-1 justify-between items-end gap-4">
          <div className="w-full bg-slate-700 h-6 rounded-full" />
          <div className="w-[70px] h-6 bg-slate-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}
