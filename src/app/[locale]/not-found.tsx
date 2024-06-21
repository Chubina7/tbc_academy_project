"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-8xl">404</h1>
      <p>Could not find requested resource</p>
      <button
        className="px-3 py-1 rounded-lg bg-red-400"
        onClick={() => router.back()}
      >
        Return Back
      </button>
    </div>
  );
}
