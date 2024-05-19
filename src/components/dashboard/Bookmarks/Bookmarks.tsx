import React from "react";
import ResourceItem from "../resources/ResourceItem";

interface Bookmarks {
  title: string;
  description: string;
  count: number;
}

export default function Bookmarks({ bookmarks }: { bookmarks: Bookmarks[] }) {
  return (
    <>
      {bookmarks.length !== 0 ? (
        bookmarks.map((item: any) => (
         <ResourceItem item={item} key={item.resource_id}/>
        ))
      ) : (
        <p>Empty bookmark list</p>
      )}
    </>
  );
}
