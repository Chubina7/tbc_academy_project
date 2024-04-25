import React from "react";
import Item from "./Item";

function BlogsSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto animate-pulse">
      <div className="w-full flex flex-col gap-10 md:gap-16">
        {Array.from({ length: 12 }, (itm, idx) => (
          <Item key={idx} />
        ))}
      </div>
    </div>
  );
}

export default BlogsSkeleton;
