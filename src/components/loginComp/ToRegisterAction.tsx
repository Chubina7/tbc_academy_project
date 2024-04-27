import Link from "next/link";
import React from "react";

function ToRegisterAction() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        {"dict.auth.login.info.text"}{" "}
        <Link href={"/register"}>
          <span className="underline ">{"dict.auth.login.info.underline"}</span>
        </Link>
      </p>
    </div>
  );
}

export default ToRegisterAction;
