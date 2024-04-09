import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import Details from "./Details";
import OtherDetails from "./OtherDetails";

function Product({ data }) {
  const photoSource = {
    src: data.images,
  };
  const detailsSource = {
    title: data.title,
    description: data.description,
    price: data.price,
    rating: data.rating,
  };
  const otherDetailsSource = {
    discount: data.discountPercentage,
    stock: data.stock,
    brand: data.brand,
    category: data.category,
  };

  return (
    <>
      <div className="flex justify-center items-start gap-6 lg:gap-0 flex-col md:flex-row">
        <PhotoCarousel data={photoSource} />
        <Details data={detailsSource} />
      </div>
      <OtherDetails data={otherDetailsSource} />
    </>
  );
}

export default Product;
