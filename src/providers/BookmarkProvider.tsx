"use client";

import React, { Context, createContext, useReducer } from "react";
import {
  BookmarkStateInitial as initial,
  BookmarkStateReducer as reducer,
} from "../state-management/reducers";

interface Props {
  children: React.ReactNode;
}
interface ICtx {
  list: any;
  addItem: (param: any) => void;
  removeItem: (param: any) => void;
}

export const BookmarkContext: Context<ICtx> = createContext({
  list: [],
  addItem: (param) => param,
  removeItem: (param) => param,
});

export default function BookmarkProvider({ children }: Props) {
  const [bookmarkList, dispatch] = useReducer(reducer, initial);

  return (
    <BookmarkContext.Provider
      value={{
        list: bookmarkList,
        addItem: (item) => dispatch({ type: "ADD", payload: item }),
        removeItem: (item) => dispatch({ type: "REMOVE", payload: item }),
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
