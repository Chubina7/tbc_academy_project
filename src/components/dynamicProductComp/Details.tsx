import { useTranslations } from "next-intl";
import React from "react";
import { FaRegStar } from "react-icons/fa";

interface Props {
  data: {
    title: string;
    description: string;
    price: number;
    rating: number | undefined;
  };
}

function Details({ data }: Props) {
  const t = useTranslations("Products.dynamicProductItem");

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 lg:p-9">
      <h1 className="text-2xl md:text-4xl">{data.title}</h1>
      <p className="text-sm md:text-lg">{data.description}</p>
      <p className="text-md md:text-lg">
        {t("price")}:
        <span className="text-xl font-bold md:text-2xl xl:text-3xl">
          {" "}
          {data.price} {t("currency")}
        </span>
      </p>
      <div className="w-full flex justify-between">
        <p>{t("rating")}</p>
        <div className="flex items-center justify-center gap-1">
          <FaRegStar size={20} />
          <p>{data.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
