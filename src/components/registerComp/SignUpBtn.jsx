import React from "react";

function SignUpBtn() {
  const registerHandler = async () => {
    "use server";
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <button
        className="w-full bg-white text-black rounded-full py-1"
        onClick={registerHandler}
      >
        Register
      </button>
    </div>
  );
}

export default SignUpBtn;
