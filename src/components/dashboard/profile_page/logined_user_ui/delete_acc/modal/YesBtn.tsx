"use client";

import { useRouter } from "next/navigation";

interface Props {
  closeModal: () => void;
}

export default function YesBtn({ closeModal }: Props) {
  const router = useRouter();

  const handleDeletion = () => {
    console.log("account deleted");
    // delete session cookie
    // ...
    // delete row from users table
    // ...
    closeModal();
    router.replace("/");
  };

  return (
    <button
      onClick={handleDeletion}
      className="px-3 py-1 rounded-lg bg-red-600"
    >
      Yes
    </button>
  );
}
