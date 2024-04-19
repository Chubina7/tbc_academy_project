import Link from "next/link";
import React from "react";

function ToRegisterAction() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        If you dont have accout, Sign Up{" "}
        <Link href={"/register"}>
          <span className="underline ">here</span>
        </Link>
      </p>
    </div>
  );
}

export default ToRegisterAction;
