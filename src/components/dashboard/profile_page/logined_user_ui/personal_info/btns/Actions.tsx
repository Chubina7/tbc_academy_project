"use client";

import { useContext } from "react";
import CancelBtn from "./CancelBtn";
import SaveBtn from "./SaveBtn";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

const valuesChanged = (obj1: any, obj2: any) => {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return true;
    }
  }
  return false;
};

export default function Actions() {
  const { prevValues, value, setValue } = useContext(ctx);

  const handleCancel = () => setValue(prevValues);

  const handleSubmit = () => console.log(value);

  if (valuesChanged(prevValues, value))
    return (
      <div className="flex gap-2 justify-center items-center">
        <CancelBtn action={handleCancel} />
        <SaveBtn action={handleSubmit} />
      </div>
    );

  return null;
}
