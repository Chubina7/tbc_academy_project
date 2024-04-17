import React from "react";

function RegisterForm() {
  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      action=""
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="text"
          placeholder="Username"
          name="username"
          id="username"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
        />
        <input
          className="bg-transparent border-2 border-white py-1 px-3"
          type="password"
          name="password"
          id="password"
          placeholder="Re-type password"
        />
      </div>
    </form>
  );
}

export default RegisterForm;
