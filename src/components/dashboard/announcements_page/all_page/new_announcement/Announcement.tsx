"use client";

import { useContext } from "react";
import { AddNewAnnouncementContext as newAnnCtx } from "../../../../../context/ctx";

export default function Announcement() {
  const { announcement, setAnnouncement, setError } = useContext(newAnnCtx);

  return (
    <textarea
      name="new_announcement"
      id="new_announcement"
      placeholder="What you want to announce..."
      rows={5}
      className="w-full bg-transparent border-2 rounded-lg focus:outline-none p-3 resize-none"
      value={announcement}
      onChange={(e) => {
        setError(false);
        setAnnouncement(e.target.value);
      }}
    />
  );
}
