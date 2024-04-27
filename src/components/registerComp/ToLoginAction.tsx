import Link from "next/link";
import React from "react";

function ToLoginAction() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        {"dict.auth.register.info.text"}{" "}
        <Link href={"/login"}>
          <span className="underline ">
            {"dict.auth.register.info.underline"}
          </span>
        </Link>
      </p>
    </div>
  );
}

export default ToLoginAction;
