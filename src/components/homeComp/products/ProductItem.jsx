import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProductItem = ({ title, price, description, imgSrc, route }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start p-3 rounded-lg">
      <div className="relative w-full min-h-64">
        <Image
          className="rounded-md object-cover"
          src={imgSrc}
          alt={title}
          fill
        />
      </div>
      <div className="h-full w-full flex flex-col justify-between gap-5 p-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <strong>$ {price}</strong>
          <Link href={`/products/${route}`}>
            <button className="bg-black text-white rounded-full px-4 py-1">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
