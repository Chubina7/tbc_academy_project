import Link from "next/link";
import React from "react";

export default function ToRegister() {
  return (
    <p className="w-full text-center transition-all duration-300 mb-10">
      Create{" "}
      <Link href="/dashboard/register" className="underline">
        new account
      </Link>
    </p>
  );
}
