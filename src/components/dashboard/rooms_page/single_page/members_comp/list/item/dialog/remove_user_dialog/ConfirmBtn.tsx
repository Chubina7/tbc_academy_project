"use client";

import { useContext } from "react";
import { NotificationsContext as ctx } from "../../../../../../../../../context/ctx";

interface Props {
  modalHandler: () => void;
  user_id: string;
  room_id: string;
}

export default function ConfirmBtn({ modalHandler, user_id, room_id }: Props) {
  const { showNotification } = useContext(ctx);

  const handleConfirmation = () => {
    // user deletion logic
    // ...
    console.log("deleting ", user_id, " from ", room_id);
    showNotification(true, "error", "error removeing user");
    modalHandler();
  };

  return (
    <button
      className="border border-red-700 bg-red-700 px-3 py-1 rounded-lg"
      onClick={handleConfirmation}
    >
      Confirm
    </button>
  );
}
