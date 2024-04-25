import React from "react";

function OtherDetails({ data, dict }) {
  const { brand, category, discount, stock } = dict.products.dynamicProductItem;
  const otherDetails = dict.default.otherDetails;

  return (
    <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-2">
      <i className="w-full text-left text-xl">{otherDetails}:</i>
      <br />
      <div className="w-full flex justify-between items-center">
        <p>{brand}: </p>
        <h1 className="font-bold text-lg">{data.brand}</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{category}: </p>
        <h1 className="font-bold text-lg">{data.category}</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{discount}: </p>
        <h1 className="font-bold text-lg">{data.discount} %</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{stock}: </p>
        <h1 className="font-bold text-lg">{data.stock}</h1>
      </div>
    </div>
  );
}

export default OtherDetails;
