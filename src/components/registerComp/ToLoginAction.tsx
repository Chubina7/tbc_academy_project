import Link from "next/link";
import React from "react";

function ToLoginAction({
  data,
}: {
  data: {
    text: string;
    underline: string;
  };
}) {
  const { text, underline } = data;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        {text}{" "}
        <Link href={"/login"}>
          <span className="underline ">{underline}</span>
        </Link>
      </p>
    </div>
  );
}

export default ToLoginAction;
