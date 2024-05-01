"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { HiOutlineCursorClick } from "react-icons/hi";

export default function ProductItem({
  title,
  price,
  description,
  thumbnail,
  route,
}: IProduct) {
  const t = useTranslations("Products.productItem");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full overflow-hidden flex flex-col justify-start items-start gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/products/${route}`}
        className="relative w-full rounded-md overflow-hidden"
      >
        <Image
          className="w-full h-72 object-cover "
          src={thumbnail}
          alt={title}
          width={570}
          height={700}
        />
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex justify-between items-end px-6 py-3">
            <h1 className="text-xl font-bold">
              {t("currency")} {price}
            </h1>
            <div className="flex gap-2 items-start justify-center">
              <p className="italic text-xs">Click to open details</p>
              <HiOutlineCursorClick size={18} />
            </div>
          </div>
        )}
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="flex-1 align-top text-sm opacity-70">{description}</p>
      <button className="w-full rounded-md bg-[#3D52A1] text-[#EEE8F6] dark:bg-[#EEE8F6] dark:text-[#3D52A1] py-1 mt-4 hover:opacity-70">
        {t("addToCart")}
      </button>
    </div>
  );
}
