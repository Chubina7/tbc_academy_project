import React from "react";

export default function Backdrop({ modalCloser }: { modalCloser: () => void }) {
  return (
    <div
      className="fixed w-full h-full top-0 left-0 opacity-50 bg-black z-50"
      onClick={modalCloser}
    />
  );
}
