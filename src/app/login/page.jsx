import React from "react";
import LoginForm from "../../components/loginComp/LoginForm";
import ToRegisterBtn from "../../components/loginComp/ToRegisterBtn";

export default function LoginPage() {
  return (
    <main className="relative w-full h-screen flex flex-col justify-center items-center">
      <h1 className="absolute text-4xl top-16 left-auto">Login</h1>
      <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl">
        <LoginForm />
        <ToRegisterBtn />
      </div>
    </main>
  );
}
