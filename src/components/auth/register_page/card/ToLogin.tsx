import Link from "next/link";
import React from "react";

export default function ToLogin() {
  return (
    <p>
      If you already have account, Log In{" "}
      <Link href="/dashboard/login">
        <span className="underline">here</span>
      </Link>
    </p>
  );
}
