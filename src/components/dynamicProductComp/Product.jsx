import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import Details from "./Details";
import OtherDetails from "./OtherDetails";

// "discountPercentage": 12.96,
// "stock": 94,
// "brand": "Apple",
// "category": "smartphones",

function Product() {
  return (
    <>
      <div className="flex justify-center items-start gap-6 lg:gap-0 flex-col md:flex-row">
        <PhotoCarousel />
        <Details />
      </div>
      <OtherDetails />
    </>
  );
}

export default Product;
