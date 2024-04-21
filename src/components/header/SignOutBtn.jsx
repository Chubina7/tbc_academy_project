"use client";

import React from "react";
import { signOut } from "../../lib/actions";
import { useRouter } from "next/navigation";

export default function SignOutBtn({ lng, dict }) {
  const router = useRouter();
  const btn = dict.header.navigation.signOutBtn;

  return (
    <button
      className="text-inherit font-bold px-5 py-1 bg-black rounded-full"
      onClick={async () => {
        await signOut();
        router.refresh(`/${lng}/login`);
      }}
    >
      {btn}
    </button>
  );
}
