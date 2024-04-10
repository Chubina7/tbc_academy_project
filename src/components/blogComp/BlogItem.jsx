import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { PiChartPieSliceBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import Tags from "./Tags";

export default function BlogItem({
  id,
  title,
  portion,
  imgSrc,
  rating,
  time,
  difficulty,
  mealType,
  tags,
}) {
  return (
    <div className="w-full flex gap-1 flex-col sm:flex-row sm:gap-8">
      <div className="w-full flex">
        <Image
          className="rounded-md object-cover"
          src={imgSrc}
          alt={title}
          width={760}
          height={520}
        />
      </div>

      <div className="w-full md:w-[180%] flex flex-col justify-start gap-3 md:gap-6">
        <div>
          <h1 className="font-bold text-xl sm:text-3xl">{title}</h1>
          <Tags list={tags} />
        </div>
        <div className="w-full flex flex-col">
          <p>
            Difficulty: <strong> {difficulty}</strong>
          </p>
          <p>
            Meal Type:{" "}
            {mealType.map((item, idx) => (
              <strong key={idx}>
                {item}
                {mealType.length > 1 && idx !== mealType.length - 1 && ", "}
              </strong>
            ))}
          </p>
        </div>
        <div className="w-full flex flex-1 justify-between items-end">
          <div className="flex gap-2">
            <div className="flex justify-center items-center gap-1">
              <FaRegClock size={15} opacity={0.6} />
              <p className="opacity-80">{time} min</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <PiChartPieSliceBold size={15} opacity={0.6} />
              <p className="opacity-80">{portion}</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FaRegStar size={15} opacity={0.6} />
              <p className="opacity-80">{rating}</p>
            </div>
          </div>
          <div>
            <Link href={`/blog/${id}`}>
              <p className="underline">Read more...</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
