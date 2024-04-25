import React from "react";
import { inputUI } from "../../lib/styles";

export default function EmailInput({ data }: { data: any }) {
  // The logic which catches inserted email by user and stores it somewhere
  return (
    <input
      className={`py-2 px-5 text-xs ${inputUI}`}
      type="email"
      placeholder={data}
    />
  );
}
