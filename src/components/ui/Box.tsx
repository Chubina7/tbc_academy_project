import React from "react";

export default function Box({ children }: { children: any }) {
  return (
    <div className="bg-[#FFFFFF] text-inherit rounded-xl p-3">{children}</div>
  );
}
