import React from "react";

function BlogIDSkeleton() {
  return (
    <div className="flex flex-col justify-start items-start animate-pulse">
      <div className="w-full flex flex-col justify-start items-start gap-1">
        <div className="h-8 md:h-10 bg-slate-700 rounded-full w-full" />
        <div className="w-full flex justify-between items-center">
          <div className="w-full max-w-44 h-6 rounded-full bg-slate-700" />
          <div className="hidden md:block bg-slate-700 rounded-full w-full max-w-28 h-6" />
        </div>
        <div className="w-full flex justify-stretch items-center gap-4 py-5">
          <div className="w-14 h-14 bg-slate-700 rounded-full" />
          <div className="h-6 w-28 rounded-full bg-slate-700" />
        </div>
      </div>
      <hr className="w-full border rounded-full bg-black" />
      <div className="w-full flex justify-center items-start flex-col xl:flex-row">
        <div className="w-full flex flex-col justify-center items-start lg:items-center gap-9 py-9">
          <div className="w-full flex justify-start items-start flex-col md:flex-row gap-4 lg:gap-8">
            <div className="w-full md:max-w-[420px] flex justify-center items-center">
              <div className="rounded-md w-full h-[420px] minw-80 max-w-[420px] min-h-80 bg-slate-700" />
            </div>
            <hr className="md:hidden w-full border rounded-full bg-black" />
            <div className="w-full flex-1 lg:w-auto flex flex-col gap-2">
              <div className="w-[30%] rounded-full flex items-center justify-start gap-2 pb-2 h-8 bg-slate-700" />
              <hr className="md:hidden w-full border rounded-full bg-black" />
              <div className="h-7 md:h-8 w-[70%] rounded-full bg-slate-700" />
              <ul className="flex flex-col justify-start items-start gap-3">
                {Array.from({ length: 8 }, (itm, idx) => (
                  <div
                    key={idx}
                    className="h-6 w-[50%] bg-slate-700 rounded-full"
                  />
                ))}
              </ul>
            </div>
          </div>
          <hr className="w-full border rounded-full bg-black" />
          <div className="w-full flex justify-center items-start flex-col gap-2">
            <div className="h-7 md:h-8 w-full rounded-full bg-slate-700" />
            <ul className="flex flex-col justify-start items-start gap-3">
              {Array.from({ length: 8 }, (itm, idx) => (
                <div
                  key={idx}
                  className="h-6 w-[50%] bg-slate-700 rounded-full"
                />
              ))}
            </ul>
          </div>
          <hr className="w-full border rounded-full bg-black" />
          <div className="w-full flex flex-col items-start justify-start gap-3">
            <div className="h-7 md:h-8 w-full rounded-full bg-slate-700" />
            <div className="flex flex-col gap-2">
              <div className="h-6 w-full rounded-full bg-slate-700" />
              <div className="h-6 w-full rounded-full bg-slate-700" />
            </div>
          </div>
          <hr className="xl:hidden w-full border rounded-full bg-black" />
        </div>
        <div className="w-full flex flex-col xl:py-9 xl:w-[40%]">
          <h1 className="h-11 bg-slate-700 w-full rounded-full" />
          <br />
          <div className="w-full max-w-lg mx-auto p-7 flex flex-col items-start gap-6">
            {Array.from({ length: 4 }, (item, idx) => {
              return (
                <div className="w-full flex flex-col gap-2" key={idx}>
                  <div className="w-full rounded-lg bg-slate-700 min-h-80" />
                  <div className="w-full h-7 rounded-full bg-slate-700" />
                  <div className="w-full flex justify-end items-center gap-4">
                    <div className="w-[40%] h-5 rounded-full bg-slate-700"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogIDSkeleton;
