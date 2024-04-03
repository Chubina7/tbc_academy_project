import React from "react";
import NewEmail from "./NewEmail";
import NewPassword from "./NewPassword";

const LoginInfo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <h1 className="w-full text-left text-2xl font-bold">Login Details</h1>
      <div className="w-full md:max-w-3xl flex flex-col gap-6">
        <NewEmail />
        <NewPassword />
      </div>
    </div>
  );
};

export default LoginInfo;
