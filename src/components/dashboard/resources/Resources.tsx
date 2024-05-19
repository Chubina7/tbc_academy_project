import React from "react";
import ResourceItem from "./ResourceItem";

interface Resources {
  resource_id: string;
  title: string;
  description: string;
}

export default function Resources({ data }: { data: any }) {
  return (
    <div className="rounded flex flex-wrap gap-5 shadow-lg m-4 justify-center lg:justify-normal">
      {data.map((item: any) => {
        return <ResourceItem item={item} key={item.resource_id} />;
      })}
    </div>
  );
}
