import React from "react";

export default function EmailInput() {
  // The logic which catches inserted email by user and stores it somewhere
  return (
    <input
      className="p-2 text-xs rounded-sm focus:outline-none"
      type="email"
      placeholder="Leave your email"
    />
  );
}
