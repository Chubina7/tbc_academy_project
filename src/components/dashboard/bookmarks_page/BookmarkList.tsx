"use client";

import { useContext } from "react";
import { BookmarkContext as bkCtx } from "../../../context/ctx";
import BookshelfListItem from "../bookshelf_page/list/item/BookshelfListItem";
import VariantsList from "../../ui/framerMotionDivs/variants/VariantsList";

interface Props {
  data: Array<IBook>;
}

export default function BookmarkList({ data }: Props) {
  const { properties } = useContext(bkCtx);

  return (
    <VariantsList className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
      {properties.length > 0 ? (
        data
          .filter((item) => properties.includes(item.book_id))
          .map((item) => <BookshelfListItem key={item.book_id} data={item} />)
      ) : (
        <p>No bookmarks selected</p>
      )}
    </VariantsList>
  );
}
