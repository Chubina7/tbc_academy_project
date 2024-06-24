"use client";

import { useContext } from "react";
import { AddNewAnnouncementContext as newAnnCtx } from "../../../../../context/ctx";

export default function Title() {
  const { title, setTitle, setError } = useContext(newAnnCtx);

  return (
    <input
      type="text"
      className="w-full px-3 py-1 border-2 focus:outline-none bg-transparent rounded-lg"
      placeholder="Announcement title"
      value={title}
      onChange={(e) => {
        setError(false);
        setTitle(e.target.value);
      }}
    />
  );
}
