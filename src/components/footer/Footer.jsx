import React from "react";
import EmailInput from "./EmailInput";

export default function Footer() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-3">
      <footer className="w-full  flex justify-between items-center p-3 bg-[#202326] rounded-t-3xl shadow-xl">
        <h1 className="text-inherit">© All rights reserved</h1>
        <EmailInput />
      </footer>
    </div>
  );
}
