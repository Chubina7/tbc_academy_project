import React from "react";
import Item from "./Item";

function ProductsSkeleot() {
  return (
    <div className="w-full flex flex-col items-center gap-6 animate-pulse pointer-events-none">
      <section className="w-full">
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <div className="w-full px-6 py-2 rounded-full bg-[#ADBADA] h-10" />
          <div className="sm:min-w-60 rounded-full px-6 py-2 z-40 bg-[#3D52A1] dark:bg-[#EEE8F6] h-10" />
        </div>
      </section>
      <section className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-5 gap-x-10">
          {Array.from({ length: 12 }, (_, idx) => (
            <Item key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsSkeleot;
