import React from "react";

function LoginForm() {
  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      action=""
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">Enter your username</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="text"
          placeholder="example123"
          name="username"
          id="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">Enter valid password</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
      </div>
    </form>
  );
}

export default LoginForm;