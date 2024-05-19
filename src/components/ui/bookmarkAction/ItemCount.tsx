import React from "react";
import { getBookmarkedItemCount } from "../../../lib/helpers";

export default async function ItemCount({ id }: { id: string }) {
  const count = await getBookmarkedItemCount(id);

  if (count) {
    return <p>count is: {count}</p>;
  } else {
    return null;
  }
}
