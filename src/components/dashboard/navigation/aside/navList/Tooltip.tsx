import React from "react";

export default function Tooltip({ title }: { title: string }) {
  return (
    <p className="xl:hidden absolute top-[50%] -translate-y-[50%] left-12 | text-sm text-nowrap font-normal bg-white rounded-lg px-4 py-0 z-50">
      {title}
    </p>
  );
}
