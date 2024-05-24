"use client";

import { useContext, useEffect } from "react";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function BirthDate() {
  const { inputs } = useContext(RegistrationInputsContext);
  const { value, setValue, max } = inputs.birthDateState;
  const role = inputs.roleState.value;

  useEffect(() => {
    if (role === "teacher") {
      setValue(max);
    } else {
      setValue("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  return (
    <input
      type="date"
      id="birth_date"
      name="birth_date"
      className={`relative w-full bg-[#FFFFFF] text-[#2B3674] dark:bg-[#5C5470] dark:text-[#F4F7FF] rounded-xl px-3 py-3 outline-none focus:outline-none text-lg opacity-60 focus:opacity-100 | transition-all duration-300`}
      value={value}
      max={max}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
