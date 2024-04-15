import React from "react";
import Image from "next/image";
import { MdOutlineRateReview } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

function SuggestItem({ image, name, rating, prepTimeMinutes, difficulty }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <Image
        src={image}
        alt={name}
        width={620}
        height={430}
        className="w-full rounded-lg"
      />
      <h1 className="text-xl">{name}</h1>
      <div className="w-full flex justify-end items-center gap-4">
        <div className="flex justify-center items-center gap-1">
          <p className="text-sm">{rating}</p>
          <MdOutlineRateReview size={12} />
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className="text-sm">{prepTimeMinutes} min.</p>
          <FaRegClock size={12} />
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className="text-sm">{difficulty}</p>
          <FaCircleNotch size={12} />
        </div>
      </div>
    </div>
  );
}

export default SuggestItem;
