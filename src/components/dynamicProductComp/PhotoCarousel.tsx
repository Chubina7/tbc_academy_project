"use client";

import React, { useState } from "react";
import Image from "next/image";

const reserveImg =
  "https://images.unsplash.com/photo-1712334636720-ba4c9fd582bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function PhotoCarousel({ data }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 lg:p-8">
      <div className="w-full">
        <Image
          src={data.src ? data.src[active] : reserveImg}
          alt={data.alt}
          width={720}
          height={700}
          className="w-full object-contain h-96"
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-3">
        {data.src.map((image, idx) => (
          <Image
            key={idx}
            id={idx}
            src={image || reserveImg}
            alt={data.alt}
            width={256}
            height={164}
            className="h-24 object-cover cursor-pointer"
            onClick={(e) => setActive(e.target.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoCarousel;
