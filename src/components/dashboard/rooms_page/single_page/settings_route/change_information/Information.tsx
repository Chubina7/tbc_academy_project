"use client";

import { useEffect, useState } from "react";
import ChangeBtn from "./ChangeBtn";
import ChangeDescription from "./ChangeDescription";
import ChangeTitle from "./ChangeTitle";

export default function Information() {
  const state = useState({ title: "", description: "" });
  const [validationMessage, setValidationMessage] = useState("");
  
  useEffect(() => {
    if (validationMessage !== "") {
      setTimeout(() => {
        setValidationMessage("");
      }, 5000);
    }
  }, [validationMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (state[0].description.trim() === "" || state[0].title.trim() === "") {
      setValidationMessage("Unable to pass empty values.");
      return;
    }
    // handle data change
    // ...

    console.log(state[0]);
  };

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <h1 className="w-full font-bold text-2xl select-none">Information</h1>
        <ChangeBtn changeHandler={handleSubmit} />
      </div>
      <form className="w-full flex flex-col gap-3">
        <ChangeTitle state={state} />
        <ChangeDescription state={state} />
        <p className="text-sm pl-5 text-red-600">{validationMessage}</p>
      </form>
    </div>
  );
}
