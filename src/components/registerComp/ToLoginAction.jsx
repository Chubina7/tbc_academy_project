import Link from "next/link";
import React from "react";

function ToLoginAction() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        If you already have accout, Sign in{" "}
        <Link href={"/login"}>
          <span className="underline ">here</span>
        </Link>
      </p>
    </div>
  );
}

export default ToLoginAction;
