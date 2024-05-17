import React from "react";
import { psqlGetBookmarks } from "../../../lib/sqlQueries";

export default function List({ data, action }: { data: any; action: any }) {
  // const bookmarks = await psqlGetBookmarks("BtMV3");
  return (
    <>
      {data.length !== 0 ? (
        data.map((item: any, idx: number) => (
          <div key={idx} className="w-full flex justify-between">
            <h1>{item.title}</h1>
            <button onClick={() => action(item)}>REMOVE</button>
          </div>
        ))
      ) : (
        <p>Empty bookmark list</p>
      )}
    </>
  );
}
