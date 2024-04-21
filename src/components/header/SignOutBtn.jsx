"use client";

import React from "react";
import { signOut } from "../../lib/actions";
import { useRouter } from "next/navigation";

export default function SignOutBtn({ lng, data }) {
  const router = useRouter();

  return (
    <button
      className="text-inherit font-bold px-5 py-1 bg-black rounded-full"
      onClick={async () => {
        await signOut();
        router.refresh(`/${lng}/login`);
      }}
    >
      {data}
    </button>
  );
}
