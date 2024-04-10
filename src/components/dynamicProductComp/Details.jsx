import React from "react";

function Details({ data }) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 lg:p-9">
      <h1 className="text-2xl md:text-4xl">{data.title}</h1>
      <p className="text-sm md:text-lg">{data.description}</p>
      <p className="text-md md:text-lg">
        Price:
        <span className="text-xl font-bold md:text-2xl xl:text-3xl">
          {" "}
          {data.price} USD
        </span>
      </p>
      <div className="w-full flex justify-between">
        <p>VARSKVLAVEBI</p> <p>{data.rating}</p>
      </div>
    </div>
  );
}

export default Details;
