import Image from "next/image";
import React from "react";

const ProductItem = ({ title, price, description, imgSrc }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start p-3 rounded-lg">
      <Image
        className="w-full min-h-64 rounded-md object-cover"
        src={imgSrc}
        alt={title}
        width={450}
        height={240}
      />
      <div className="h-full flex flex-col justify-between gap-5 p-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex justify-between">
          <strong>$ {price}</strong>
          <button>Add to Cart</button>
        </div>
        {/* {userProduct && <button className={styles.editItem}>Edit item</button>} */}
      </div>
    </div>
  );
};

export default ProductItem;
