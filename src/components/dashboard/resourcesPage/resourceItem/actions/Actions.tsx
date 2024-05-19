import React from "react";
import AddToBookmark from "./AddToBookmark";
import DecreaseCount from "./DecreaseCount";
import IncreaseCount from "./IncreaseCount";
import ItemCount from "./ItemCount";
import { getBookmarkedItemCount } from "../../../../../lib/helpers";

export default async function Actions({ id }: { id: string }) {
  const count = await getBookmarkedItemCount(id);

  if (count) {
    return (
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <DecreaseCount id={id} />
          <IncreaseCount id={id} />
        </div>
        <ItemCount count={count} />
      </div>
    );
  } else {
    return <AddToBookmark id={id} />;
  }
}
