import React from "react";
import EmailInput from "./EmailInput";
import { getDictionary } from "../../lib/dictionary";

export default async function Footer({ lng }: { lng: string }) {
  const dict = await getDictionary(lng);
  const inputPh = dict.footer.inputPh;
  const title = dict.footer.title;

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-3 z-50">
      <footer className="w-full  flex justify-between items-center p-3 bg-inherit rounded-t-3xl shadow-xl">
        <h1 className="text-inherit">© {title}</h1>
        <EmailInput data={inputPh} />
      </footer>
    </div>
  );
}
