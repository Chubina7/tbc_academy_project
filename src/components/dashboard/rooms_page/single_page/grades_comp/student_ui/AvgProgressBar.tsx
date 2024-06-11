"use client";

import React, { useEffect, useState } from "react";

interface Props {
  avgGrade: number;
}

export default function AvgProgressBar({ avgGrade }: Props) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle((avgGrade / 100) * 360);
  }, [avgGrade]);

  return (
    <div className="relative w-48 sm:w-36 2xl:w-44 h-48 sm:h-36 2xl:h-44 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full transition-all duration-300"
        style={{
          background: `conic-gradient(#603CFF ${angle}deg, #8BA8FF ${angle}deg)`,
        }}
      ></div>
      <div className="flex items-center justify-center w-36 sm:w-24 2xl:w-32 h-36 sm:h-24 2xl:h-32 bg-[#FFFFFF] dark:bg-[#352F44] rounded-full absolute top-6 left-6 transition-all duration-300">
        <span className="text-3xl sm:text-2xl 2xl:text-3xl font-bold">{avgGrade}</span>
      </div>
    </div>
  );
}
