import React from "react";
import AddToBookmark from "../../ui/bookmarkAction/AddToBookmark";
import IncreaseCount from "../../ui/bookmarkAction/IncreaseCount";
import DecreaseCount from "../../ui/bookmarkAction/DecreaseCount";

interface Resources {
  resource_id: string;
  title: string;
  description: string;
}

export default function Resources({ data }: { data: any }) {
  return (
    <>
      <div className=" rounded flex flex-wrap gap-5 shadow-lg  m-4">
        {data.map((item: any) => {
          return (
            <>
              {" "}
              <div className="px-6 py-4 w-[300px] bg-white flex flex-col justify-between rounded-lg">
                <div className="font-bold text-xl text-black mb-2">
                  {item.title}
                </div>
                <p className="text-gray-700 text-base">{item.description}</p>
                <div className="px-6 pt-4 pb-2">
                  <AddToBookmark dataOfItem={item} />
                  <span className="flex gap-6 py-2">
                    <DecreaseCount />
                    <IncreaseCount />
                  </span>

                  {/* <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add to Bookmark
                  </button> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
