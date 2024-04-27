import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  data: {
    discount: number | undefined;
    stock: number | undefined;
    brand: string | undefined;
    category: string | undefined;
  };
}

function OtherDetails({ data }: Props) {
  const t = useTranslations("Products.dynamicProductItem");

  return (
    <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-2">
      <i className="w-full text-left text-xl">{t("otherDetails")}:</i>
      <br />
      <div className="w-full flex justify-between items-center">
        <p>{t("brand")}: </p>
        <h1 className="font-bold text-lg">{data.brand}</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{t("category")}: </p>
        <h1 className="font-bold text-lg">{data.category}</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{t("discount")}: </p>
        <h1 className="font-bold text-lg">{data.discount} %</h1>
      </div>
      <hr className=" w-full border border-black rounded-full opacity-20" />
      <div className="w-full flex justify-between items-center">
        <p>{t("stock")}: </p>
        <h1 className="font-bold text-lg">{data.stock}</h1>
      </div>
    </div>
  );
}

export default OtherDetails;
