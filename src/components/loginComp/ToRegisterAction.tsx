import Link from "next/link";
import React from "react";

function ToRegisterAction({ data }: { data: any }) {
  const { text, underline } = data;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        {text}{" "}
        <Link href={"/register"}>
          <span className="underline ">{underline}</span>
        </Link>
      </p>
    </div>
  );
}

export default ToRegisterAction;
