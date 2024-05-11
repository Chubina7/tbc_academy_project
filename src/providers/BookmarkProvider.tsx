"use client";

import React, { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export const BookmarkContext = createContext({
  list: [],
  addItem: (p: any) => {
    p;
  },
  removeItem: (p: any) => {
    p;
  },
});

export default function BookmarkProvider({ children }: Props) {
  const [bookmarkList, setBookmarkList] = useState<any>([]);

  const handleIncrement = (data: any) => {
    setBookmarkList((prev: any) => [...prev, data]);
  };
  const handleDecrement = (data: any) => {
    setBookmarkList((prev: any[]) => {
      return prev.filter((item) => item.title !== data.title); // შესაცვლელია უფრო უნიკალურ იდენტიფიკატორზე
    });
  };

  return (
    <BookmarkContext.Provider
      value={{
        list: bookmarkList,
        addItem: (p) => handleIncrement(p),
        removeItem: (p) => handleDecrement(p),
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
