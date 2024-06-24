"use client";

import React, { useReducer } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { BookmarkContext } from "../ctx";
import { BookmarkStateReducer as reducer } from "../../state-management/reducers";

interface Props {
  children: React.ReactNode;
}

export default function BookmarkProvider({ children }: Props) {
  const [initialVal] = useLocalStorage("bookmarks", []);
  const [bookmarkList, dispatch] = useReducer(reducer, initialVal);

  return (
    <BookmarkContext.Provider
      value={{
        list: bookmarkList,
        addItem: (item) => dispatch({ type: "ADD", payload: item }),
        removeItem: (item) => dispatch({ type: "REMOVE", payload: item }),
        resetList: () => dispatch({ type: "RESET" }),
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
