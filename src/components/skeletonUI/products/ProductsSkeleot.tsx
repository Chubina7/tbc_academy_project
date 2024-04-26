import React from "react";
import Item from "./Item";

function ProductsSkeleot() {
  return (
    <div className="w-full flex flex-col items-center gap-6 animate-pulse pointer-events-none">
      <section className="w-full">
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <div className="w-full px-6 py-2 rounded-full bg-slate-700 h-11" />
          <div className="sm:min-w-60 rounded-full px-6 py-2 z-40 bg-[#F25050] h-11" />
        </div>
      </section>
      <section className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, idx) => (
            <Item key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsSkeleot;
