"use client";

import React, { useEffect, useState } from "react";
import { loginHeadingWords } from "../../../../lib/ListsWithComponents";

export default function Heading() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIdx((idx + 1) % 2);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [idx]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
      <h1 className="text-4xl font-bold">LOGIN</h1>
      <p className="w-full text-center">
        Welcome back, dear {loginHeadingWords[idx]}
      </p>
    </div>
  );
}
