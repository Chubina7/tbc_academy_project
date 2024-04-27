import React from "react";
import Image from "next/image";
import { MdOutlineRateReview } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

interface Props {
  image: string;
  name: string;
  rating: number;
  prepTimeMinutes: number;
  difficulty: string;
}

function SuggestItem({
  image,
  name,
  rating,
  prepTimeMinutes,
  difficulty,
}: Props) {
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
          <MdOutlineRateReview size={12} />
          <p className="text-sm">{rating}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <FaRegClock size={12} />
          <p className="text-sm">
            {prepTimeMinutes} {"dict.default.time.minute"}.
          </p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <FaCircleNotch size={12} />
          <p className="text-sm">{difficulty}</p>
        </div>
      </div>
    </div>
  );
}

export default SuggestItem;
