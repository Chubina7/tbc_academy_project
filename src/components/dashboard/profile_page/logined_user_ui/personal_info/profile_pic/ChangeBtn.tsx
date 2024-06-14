"use client";

import { useRef } from "react";
import { IoPencil } from "react-icons/io5";

export default function ChangeBtn() {
  const browseRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="file"
        ref={browseRef}
        name="profile_picture"
        id="profile_picture"
        hidden
      />
      <button
        className="flex gap-2 justify-center items-center"
        onClick={() => browseRef.current && browseRef.current.click()}
      >
        <IoPencil size={20} />
        <p>Change profile picture</p>
      </button>
    </>
  );
}
