import React from "react";

interface Props {
  data: {
    discount: number | undefined;
    stock: number | undefined;
    brand: string | undefined;
    category: string | undefined;
  };
}

function OtherDetails({ data }: Props) {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-2">
      <i className="w-full text-left text-xl">{"dict.default.otherDetails"}:</i>
      <br />
      <div className="w-full flex justify-between items-center">
        <p>{"dict.products.dynamicProductItem.brand"}: </p>
        <h1 className="font-bold text-lg">{data.brand}</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{"dict.products.dynamicProductItem.category"}: </p>
        <h1 className="font-bold text-lg">{data.category}</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{"discount.discount"}: </p>
        <h1 className="font-bold text-lg">{data.discount} %</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{"stock.stock"}: </p>
        <h1 className="font-bold text-lg">{data.stock}</h1>
      </div>
    </div>
  );
}

export default OtherDetails;
