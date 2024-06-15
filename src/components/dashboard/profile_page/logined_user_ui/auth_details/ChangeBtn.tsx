"use client";

import { useContext } from "react";
import { AuthDetailsChangingContext as ctx } from "../../../../../context/ctx";

export default function ChangeBtn() {
  const { prevData, emailVal, passVal } = useContext(ctx);
  const emailChanged = prevData.email !== emailVal;
  const passwordChanged = passVal !== "";

  const handleSubmit = () => {
    console.log({ emailVal, passVal });
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
