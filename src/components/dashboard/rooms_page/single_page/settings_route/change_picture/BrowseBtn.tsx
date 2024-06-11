"use client";

import { useRef } from "react";

interface Props {
  action: (e: React.ChangeEvent<HTMLInputElement>) => (() => void) | undefined;
}

export default function BrowseBtn({ action }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileBrowsing = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        name="cover_picture"
        id="cover_picture"
        hidden
        accept="image/*"
        ref={inputRef}
        onChange={action}
      />
      <button
        className="mt-5 px-3 py-1 border rounded-lg select-none"
        id="cover_picture"
        name="cover_picture"
        onClick={handleFileBrowsing}
      >
        Browse Files
      </button>
    </>
  );
}
