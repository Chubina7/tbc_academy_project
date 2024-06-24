"use client";

import { useContext, useState } from "react";
import Btn from "./Btn";
import Input from "./Input";
import { detectEnviro } from "../../../../../lib/helpers/regular_funcs/general";
import { useRouter } from "next/navigation";
import { NotificationsContext as notifCtx } from "../../../../../context/ctx";

const domain = detectEnviro();

interface Props {
  announcement_id: string;
}

export default function AddNewComment({ announcement_id }: Props) {
  const { showNotification } = useContext(notifCtx);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const state = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const value = state[0];

    if (value.trim() === "") {
      setError(true);
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(
        `${domain}/api/dashboard/announcements/${announcement_id}/comments`,
        {
          method: "POST",
          body: JSON.stringify({ comment: value }),
        }
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      router.refresh();
      showNotification(true, "success", result.message);
    } catch (error: any) {
      console.error(error.message);
      showNotification(true, "error", error.message);
    } finally {
      setIsLoading(false);
      state[1]("");
    }
  };

  return (
    <div
      className={`w-full max-w-4xl flex flex-col items-end gap-3 ${
        isLoading ? "opacity-50" : "opacity-100"
      }`}
    >
      <h1 className="w-full max-w-4xl font-bold text-2xl">Add new comment</h1>
      <Input
        state={state}
        handleSubmit={handleSubmit}
        isDisabled={isLoading}
        errorState={setError}
      />
      <div className="w-full flex justify-end items-center gap-4">
        {error && (
          <h1 className="text-sm text-red-600">
            Unable to write empty comment
          </h1>
        )}
        <Btn handleSubmit={handleSubmit} isDisabled={isLoading} />
      </div>
    </div>
  );
}
