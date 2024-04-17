import Link from "next/link";
import React from "react";

function ToRegisterBtn() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="w-full text-center">
        If you dont have accout, then hit registration
      </p>
      <button className="w-full bg-white text-black rounded-full py-1">
        <Link href={"/register"}>Register</Link>
      </button>
    </div>
  );
}

export default ToRegisterBtn;
