import { Context, createContext } from "react";

export const BookmarkContext: Context<IBookmarkCtx> = createContext({
  list: [],
  addItem: (param) => param,
  removeItem: (param) => param,
  resetList: () => {},
});
// add other contexts
