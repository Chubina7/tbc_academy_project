"use client";

import { useContext } from "react";
import CancelBtn from "./CancelBtn";
import SaveBtn from "./SaveBtn";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";
import { areObjValuesChanged } from "../../../../../../lib/helpers/regular_funcs/general";

export default function Actions() {
  const { prevValues, value, setValue } = useContext(ctx);

  const handleCancel = () => setValue(prevValues);

  console.log(prevValues, value);

  if (areObjValuesChanged(prevValues, value))
    return (
      <div className="flex gap-2 justify-center items-center">
        <CancelBtn action={handleCancel} />
        <SaveBtn
          dataToBeServed={value}
          prevProfileImage={prevValues.profile.picture}
        />
      </div>
    );

  return null;
}
