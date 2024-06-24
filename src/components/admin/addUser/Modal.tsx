import React from "react";
import { actAddUser } from "../../../lib/helpers/server_act_funcs/actions";
import Form from "./Form";

interface Props {
  handleModal: () => void;
}

export default function Modal({ handleModal }: Props) {
  return (
    <form
      className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5 bg-white text-[#2B3674] rounded-xl p-5 z-50"
      action={(formData) => {
        const username = formData.get("username")?.toString();
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();
        const role = formData.get("role")?.toString() as RoleType;
        const surname = formData.get("surname")?.toString() || null;
        const age = Number(formData.get("age")) || null;

        if (!email || !password || !role || !username) throw new Error();

        actAddUser({ age, email, password, role, surname, username });
        handleModal();
      }}
    >
      <h1>Fill inputs and add new user</h1>
      <Form />
      <div className="flex gap-6">
        <button className="text-white bg-green-700 px-4 py-1 rounded-xl">
          Add user
        </button>
        <span onClick={handleModal} className="cursor-pointer">
          Cancel
        </span>
      </div>
    </form>
  );
}
