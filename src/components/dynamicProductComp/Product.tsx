import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import Details from "./Details";
import OtherDetails from "./OtherDetails";

interface Props {
  data: IProduct;
  dict: ITranslation;
}

function Product({ data, dict }: Props) {
  const photoSource = {
    src: data.images,
    alt: data.title,
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
      <div className="w-full flex justify-between items-start gap-6 lg:gap-0 flex-col md:flex-row">
        <PhotoCarousel data={photoSource} />
        <Details data={detailsSource} dict={dict} />
      </div>
      <OtherDetails data={otherDetailsSource} dict={dict} />
    </>
  );
}

export default Product;
