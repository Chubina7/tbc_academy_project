"use client";

import { useContext, useEffect, useRef } from "react";
import { UploadNewBookContext as ctx } from "../../../../../../../context/ctx";

interface Props {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Toggle({ state }: Props) {
  const { setData, setError } = useContext(ctx);
  const checkBoxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = state;

  useEffect(() => {
    const room = isChecked
      ? null
      : ({} as { room_id: string; room_name: string });
    setData((prev) => ({ ...prev, room }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <div
          className={`w-[46px] flex justify-start items-center rounded-full border p-0.5 cursor-pointer transition-all duration-200 ${
            isChecked
              ? "bg-[#603CFF] border-[#603CFF] dark:bg-[#5C5470] dark:border-[#5C5470]"
              : "bg-transparent"
          }`}
          onClick={() => {
            setError("");
            if (!checkBoxRef.current) return;
            checkBoxRef.current.click();
          }}
        >
          <div
            className={`transition-all duration-300 transform ${
              isChecked ? "translate-x-6" : "left-0.5"
            } h-4 w-4 rounded-full bg-[#e5e7eb]`}
          />
        </div>
        <h1 className="text-base">Public upload</h1>
      </div>
      <input
        type="checkbox"
        hidden
        ref={checkBoxRef}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </>
  );
}
