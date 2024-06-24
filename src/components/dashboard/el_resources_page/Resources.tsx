import React from "react";
import ResourceItem from "./el_resource_item/ResourceItem";
import VariantsList from "../../ui/framerMotionDivs/variants/VariantsList";

interface Resources {
  resource_id: string;
  title: string;
  description: string;
}

export default function Resources({ data }: { data: any }) {
  return (
    <VariantsList className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {data.map((item: any) => {
        return <ResourceItem item={item} key={item.resource_id} />;
      })}
    </VariantsList>
  );
}
