import React from "react";
import { FaRegStar } from "react-icons/fa";

function Details({ data, dict }) {
  const rating = dict.default.rating;
  const price = dict.default.price;
  const currency = dict.default.measurement.currency;

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 lg:p-9">
      <h1 className="text-2xl md:text-4xl">{data.title}</h1>
      <p className="text-sm md:text-lg">{data.description}</p>
      <p className="text-md md:text-lg">
        {price}:
        <span className="text-xl font-bold md:text-2xl xl:text-3xl">
          {" "}
          {data.price} {currency}
        </span>
      </p>
      <div className="w-full flex justify-between">
        <p>{rating}</p>
        <div className="flex items-center justify-center gap-1">
          <FaRegStar size={20} />
          <p>{data.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
