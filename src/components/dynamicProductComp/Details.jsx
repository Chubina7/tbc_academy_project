import React from "react";

// {
//      "id": 1,
//      "title": "iPhone 9",
//      "description": "An apple mobile which is nothing like apple",
//      "price": 549,
// "discountPercentage": 12.96,
//      "rating": 4.69,
// "stock": 94,
// "brand": "Apple",
// "category": "smartphones",
//      "thumbnail": "...",
//      "images": ["...", "...", "..."]
//   }

function Details() {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 lg:p-9">
      <h1 className="text-2xl md:text-4xl">TITLE Lorem ipsum dolor sit.</h1>
      <p className="text-sm md:text-lg">
        D E S C R I P T I O N Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rem tempora a, fuga beatae impedit amet? Odio.
      </p>
      <p className="text-md md:text-lg">
        Price:
        <span className="text-xl font-bold md:text-2xl xl:text-3xl">
          {" "}
          99.99 GEL
        </span>
      </p>
      <div className="w-full flex justify-between">
        <p>VARSKVLAVEBI</p> <p>4.99</p>
      </div>
    </div>
  );
}

export default Details;
