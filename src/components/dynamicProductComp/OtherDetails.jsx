import React from "react";

function OtherDetails() {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-2">
      <i className="w-full text-left text-xl">Other Details:</i>
      <br />
      <div className="w-full flex justify-between items-center">
        <p>Brand: </p>
        <h1 className="font-bold text-lg">BRAND</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>Category: </p>
        <h1 className="font-bold text-lg">CATEGORY</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>Discount: </p>
        <h1 className="font-bold text-lg">99 %</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>In Stock: </p>
        <h1 className="font-bold text-lg">IN STOCK OR NOT</h1>
      </div>
    </div>
  );
}

export default OtherDetails;
