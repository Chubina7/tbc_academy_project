import React from "react";
import Form from "./Form";
import { actEditUser } from "../../../lib/helpers/server_act_funcs/actions";

interface Props {
  handleModal: () => void;
  user_id: string;
}

export default function Modal({ handleModal, user_id }: Props) {
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

        actEditUser({ username, age, email, password, role, surname }, user_id);
        handleModal();
      }}
    >
      <h1>Edit user details</h1>
      <Form user_id={user_id} />
      <div className="flex justify-center items-center gap-8">
        <button className="text-white bg-green-700 px-4 py-1 rounded-xl">
          Save changes
        </button>
        <span
          className="px-4 py-1 rounded-xl cursor-pointer"
          onClick={handleModal}
        >
          cancel
        </span>
      </div>
    </form>
  );
}
