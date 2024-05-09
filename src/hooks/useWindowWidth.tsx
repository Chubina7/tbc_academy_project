"use client";

import { useEffect, useState } from "react";

export default function useWindowWidth(initialWidth: number) {
  const [windowWidth, setWindowWidth] = useState<number>(initialWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return windowWidth;
}
