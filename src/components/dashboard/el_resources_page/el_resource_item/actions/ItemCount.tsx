import React from "react";

export default async function ItemCount({ count }: { count: string }) {
  if (count) {
    return <p>{count}</p>;
  } else {
    return null;
  }
}
