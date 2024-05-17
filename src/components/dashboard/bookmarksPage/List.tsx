import React from "react";

export default function List({ data, action }: { data: any; action: any }) {
  return (
    <>
      {data.length !== 0 ? (
        data.map((item: any, idx: number) => (
          <div
            key={idx}
            className="w-full flex flex-col md:flex-row justify-between text-white items-center p-6 border-2 border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <h1 className="text-lg font-semibold ">{item.title}</h1>
            </div>

            <div className="max-w-[450px]">{item.description}</div>

            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <button className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600">
                -
              </button>
              <p>{item.count}</p>
              <button className="px-2 py-1 text-white bg-green-500 rounded-md hover:bg-green-600">
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Empty bookmark list</p>
      )}
    </>
  );
}
