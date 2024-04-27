import React from "react";
import EmailInput from "./EmailInput";

export default async function Footer() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-3 z-50">
      <footer className="w-full  flex justify-between items-center p-3 bg-inherit rounded-t-3xl shadow-xl">
        <h1 className="text-inherit">© {"dict.footer.title"}</h1>
        <EmailInput />
      </footer>
    </div>
  );
}
