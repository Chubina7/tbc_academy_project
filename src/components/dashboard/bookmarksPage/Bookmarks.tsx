import React from "react";
import ResourceItem from "../resourcesPage/resourceItem/ResourceItem";

export default function Bookmarks({ data }: { data: any[] }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
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
