import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ProductItem({
  title,
  price,
  description,
  thumbnail,
  route,
}: IProduct) {
  return (
    <div className="w-full flex flex-col justify-start items-start p-3 rounded-lg bg-[#202326] shadow-xl">
      <div className="relative w-full min-h-64">
        <Image
          className="rounded-md object-cover"
          src={thumbnail}
          alt={title}
          fill
        />
      </div>
      <div className="h-full w-full flex flex-col justify-between gap-5 p-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="opacity-60">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <strong>$ {price}</strong>
          <Link href={`/products/${route}`}>
            <button className="bg-[#F25050] text-inherit rounded-full px-4 py-1">
              dict.products.productItem.seeMoreBtn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
