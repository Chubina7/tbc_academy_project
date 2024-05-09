import React from "react";

export default function Form() {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="username">Enter Username</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="email">Enter Email</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="password">Enter Password</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="age">Enter Age</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="age"
            type="text"
            placeholder="Age"
          />
        </div>
      </div>
    </div>
  );
}
