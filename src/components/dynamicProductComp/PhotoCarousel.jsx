import React from "react";
import Image from "next/image";

function PhotoCarousel({ data }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 lg:p-8">
      <div className="w-full border border-black">
        <Image
          src={
            data.src
              ? data.src[0]
              : "https://images.unsplash.com/photo-1712334636720-ba4c9fd582bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="test"
          width={420}
          height={700}
          className="w-full"
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-3">
        <Image
          src={
            data.src
              ? data.src[1]
              : "https://images.unsplash.com/photo-1712334636720-ba4c9fd582bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="test"
          width={256}
          height={164}
        />
        <Image
          src={
            data.src
              ? data.src[2]
              : "https://images.unsplash.com/photo-1712334636720-ba4c9fd582bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="test"
          width={256}
          height={164}
        />
        <Image
          src={
            data.src
              ? data.src[3]
              : "https://images.unsplash.com/photo-1712334636720-ba4c9fd582bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="test"
          width={256}
          height={164}
        />
      </div>
    </div>
  );
}

export default PhotoCarousel;
