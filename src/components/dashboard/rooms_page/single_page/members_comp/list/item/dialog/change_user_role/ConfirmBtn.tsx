"use client";

import { useContext } from "react";
import { NotificationsContext as ctx } from "../../../../../../../../../context/ctx";

interface Props {
  modalHandler: () => void;
}

export default function ConfirmBtn({ modalHandler }: Props) {
  const { showNotification } = useContext(ctx);

  const handleConfirmation = () => {
    // role changing logic
    // ...
    showNotification(true, "error", "error changing role");
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
