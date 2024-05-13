import React from "react";

export default function Tooltip({ title }: { title: string }) {
  return (
    <p className="bg-[#FFFFFF] text-inherit dark:bg-[#352F44] | xl:hidden absolute top-[50%] -translate-y-[50%] left-14 | text-sm text-nowrap font-normal rounded-lg px-4 py-0 z-50">
      {title}
    </p>
  );
}
