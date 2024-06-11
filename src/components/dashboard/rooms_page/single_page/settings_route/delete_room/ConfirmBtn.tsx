"use client";

import { useRouter } from "next/navigation";

export default function ConfirmBtn() {
  const router = useRouter();

  const deletionHandler = () => {
    // room deletion logic
    // ...

    router.replace("/dashboard");
  };

  return (
    <button
      className="px-3 py-1 border border-red-500 bg-red-500 rounded-lg"
      onClick={deletionHandler}
    >
      Confirm
    </button>
  );
}
