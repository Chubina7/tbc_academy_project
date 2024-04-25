"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SignOutBtn({ lng, dict }: { lng: string; dict?: any }) {
  const router = useRouter();
  const btn = dict.header.navigation.signOutBtn;

  const signOutHandler = async () => {
    const res = await fetch("/api/auth/logout");
    const result: LogOutResponse = await res.json();
    // Could trigger succesful logout message with toastify
    console.log(result.message);
  };

  return (
    <button
      className="text-inherit font-bold px-5 py-1 bg-black rounded-full"
      onClick={async () => {
        signOutHandler();
        router.refresh();
        router.replace(`/${lng}/login`);
      }}
    >
      {btn}
    </button>
  );
}
