"use client";

import { useEffect, useState } from "react";
import AvgProgressBar from "./AvgProgressBar";

interface Props {
  avgGrade: number;
}

export default function ClassAvg({ avgGrade }: Props) {
  const [grade, setGrade] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrade((prev) => (prev < avgGrade ? prev + 1 : avgGrade));
    }, 20);
    return () => clearInterval(interval);
  }, [avgGrade]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-fit ">
      <AvgProgressBar avgGrade={grade} />
      <h1 className="font-bold text-xl">Class avg.</h1>
    </div>
  );
}
