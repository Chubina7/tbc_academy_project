"use client";

import { useContext, useRef } from "react";
import { IoPencil } from "react-icons/io5";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

export default function ChangeBtn() {
  const { setValue } = useContext(ctx);
  const browseRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      return;
    }

    const url = URL.createObjectURL(file);

    setValue((prev) => ({ ...prev, profile_picture: url }));
    return () => URL.revokeObjectURL(url);
  };

  return (
    <>
      <input
        type="file"
        ref={browseRef}
        name="profile_picture"
        id="profile_picture"
        accept="image/*"
        hidden
        onChange={handleUpload}
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
