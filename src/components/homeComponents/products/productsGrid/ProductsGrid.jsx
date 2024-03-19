import React from "react";
import styles from "./ProductsGrid.module.css";
import ProductItem from "../ProductItem/ProductItem";
// photos
import {
  galaxy_s20_ultra,
  hoverboard,
  iPhone_SE,
  laptop,
  smart_watch,
  vision_pro,
} from "../../../../assets/products/imports";

const ProductsGrid = () => {
  return (
    <section>
      <div className={styles.grid}>
        <ProductItem
          imgSrc={iPhone_SE}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          title="iPhone SE (2020)"
          price="99.99"
        />
        <ProductItem
          imgSrc={galaxy_s20_ultra}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="Samsung S20 Ultra"
          price="109.99"
        />
        <ProductItem
          imgSrc={hoverboard}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="Hoverboard Ji12"
          price="299.00"
        />
        <ProductItem
          imgSrc={laptop}
          description="Lorem Ipsum is simply dummy teimply dummy teimply dummy te xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="The best Laptop K7"
          price="1599.99"
        />
        <ProductItem
          imgSrc={smart_watch}
          description="teimply dummy te xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="Smartest Watch m9"
          price="79.99"
        />
        <ProductItem
          imgSrc={vision_pro}
          description="teimply dummy te xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="Visionest Pro Max"
          price="????.??"
        />
        <ProductItem
          imgSrc={smart_watch}
          description="teimply dummy te xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="Smartest Watch m9"
          price="79.99"
        />
        <ProductItem
          imgSrc={hoverboard}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="Hoverboard Ji12"
          price="299.00"
        />
        <ProductItem
          imgSrc={iPhone_SE}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          title="iPhone SE (2020)"
          price="99.99"
        />
        <ProductItem
          imgSrc={galaxy_s20_ultra}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          title="Samsung S20 Ultra"
          price="109.99"
        />
      </div>
    </section>
  );
};

export default ProductsGrid;
