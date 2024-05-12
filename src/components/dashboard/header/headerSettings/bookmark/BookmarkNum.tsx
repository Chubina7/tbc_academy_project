import { useContext } from "react";
import { BookmarkContext } from "../../../../../context/ctx";

export default function BookmarkNum() {
  const { list } = useContext(BookmarkContext);

  if (list.length !== 0) {
    return (
      <p className="absolute top-0 left-0 flex justify-center items-center | bg-red-400 | text-xs font-bold px-1 py-px rounded-full translate-x-3 -translate-y-2 cursor-default">
        {list.length}
      </p>
    );
  } else {
    return null;
  }
}
