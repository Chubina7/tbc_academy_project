"use client";

import { useState } from "react";
import { BookmarkContext } from "../ctx";
import {
  addBookmarkAct,
  removeBookmarkAct,
} from "../../lib/helpers/server_act_funcs/bookmarking";

interface Props {
  children: React.ReactNode;
  data: Array<BookmarkItemType>;
}

export default function BookmarkProvider({ children, data }: Props) {
  const [bookmarkList, setBookmarkList] = useState(data);

  const addToBookmark = async (book_id: string) => {
    setBookmarkList((prev) => [...prev, book_id]);
    await addBookmarkAct(book_id);
  };
  const removeFromBookmark = async (book_id: string) => {
    setBookmarkList((prev) => prev.filter((item) => item !== book_id));
    await removeBookmarkAct(book_id);
  };

  const includes = (book_id: string) => {
    return bookmarkList.includes(book_id);
  };

  return (
    <BookmarkContext.Provider
      value={{
        actions: { addToBookmark, removeFromBookmark },
        properties: {
          length: bookmarkList.length,
          list: bookmarkList,
          includes,
        },
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
