import React from "react";
import ResourceItem from "../resources/ResourceItem";

export default function Bookmarks({ data }: { data: any[] }) {
  return (
    <div className="rounded flex flex-wrap gap-5 shadow-lg m-4 justify-center lg:justify-normal">
      {data.length !== 0 ? (
        data.map((item: any) => (
          <ResourceItem item={item} key={item.resource_id} />
        ))
      ) : (
        <p>Empty bookmark list</p>
      )}
    </div>
  );
}
