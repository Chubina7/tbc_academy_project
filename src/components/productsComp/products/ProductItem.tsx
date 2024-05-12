"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { HiOutlineCursorClick } from "react-icons/hi";
import AddToBookmark from "../../ui/bookmarkAction/AddToBookmark";

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
    <div className="w-full overflow-hidden flex flex-col justify-start items-start gap-2">
      <Link
        href={`/products/${route}`}
        className="relative w-full rounded-md overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="w-full h-72 object-cover "
          src={thumbnail}
          alt={title}
          width={570}
          height={700}
        />
        {isHovered && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end px-6 py-3">
              <h1 className="text-xl font-bold text-[#EEE8F6]">
                {t("currency")} {price}
              </h1>
              <div className="flex gap-2 items-start justify-center">
                <p className="italic text-xs text-[#EEE8F6]">
                  Click to open details
                </p>
                <HiOutlineCursorClick size={18} color="#EEE8F6" />
              </div>
            </div>
          </>
        )}
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="flex-1 align-top text-sm opacity-70">{description}</p>
      <AddToBookmark dataOfItem={{ title, price, description }} />
    </div>
  );
}
