import React from "react";
import AddToBookmark from "./AddToBookmark";
import DecreaseCount from "./DecreaseCount";
import IncreaseCount from "./IncreaseCount";
import ItemCount from "./ItemCount";
import { getBookmarkedItemCount } from "../../../../../lib/helpers";
import { cookies } from "next/headers";

interface Props {
  resource_id: string;
}

export default async function Actions({ resource_id }: Props) {
  const user_id = cookies().get("user_id")?.value || "";
  const count = await getBookmarkedItemCount(user_id, resource_id);

  if (count) {
    return (
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <DecreaseCount id={resource_id} />
          <IncreaseCount id={resource_id} />
        </div>
        <ItemCount count={count} />
      </div>
    );
  } else {
    return <AddToBookmark id={resource_id} />;
  }
}
