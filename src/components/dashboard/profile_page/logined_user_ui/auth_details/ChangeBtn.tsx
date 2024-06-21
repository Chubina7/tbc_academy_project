"use client";

import { useContext } from "react";
import {
  AuthDetailsChangingContext as detailsCtx,
  ProfileLoadingStateContext as loadingCtx,
  NotificationsContext as notifCtx,
} from "../../../../../context/ctx";
import { detectEnviro } from "../../../../../lib/helpers/regular_funcs/general";

const domain = detectEnviro();

export default function ChangeBtn() {
  const { prevData, emailVal, passVal } = useContext(detailsCtx);
  const { showNotification } = useContext(notifCtx);
  const { setIsLoading } = useContext(loadingCtx);
  const emailChanged = prevData.email !== emailVal;
  const passwordChanged = passVal !== "";

  const handleSubmit = async () => {
    setIsLoading(true);
    const dataToBeStored = {
      email: emailVal,
      password: passVal,
    };
    
    try {
      const res = await fetch(`${domain}/api/dashboard/profile`, {
        method: "POST",
        body: JSON.stringify(dataToBeStored),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      }

      const result = await res.json();
      showNotification(true, "success", result.message);
    } catch (error: any) {
      console.error(error);
      showNotification(true, "error", error.message);
    } finally {
      setIsLoading(false);
    }
    // validate inputs
    // ...
    // return validate messages
    // ...
    // if everything ok:
    //  hash password
    //  ...
    //  store in db
    //  ...
    // set success message
  };

  if (emailChanged || passwordChanged)
    return (
      <button
        className="px-3 py-1 rounded-lg bg-red-400"
        onClick={handleSubmit}
      >
        CHANGE
      </button>
    );

  return null;
}
