import React from "react";
import UserList from "../../../components/admin/UserList";
import AddUser from "../../../components/admin/addUser/AddUser";
import { getUsers } from "../../../lib/helpers";

interface IFullUser extends IUser {
  user_id: string;
}

export default async function page() {
  const users = (await getUsers()) as IFullUser[];

  return (
    <div className="w-full flex flex-col justify-center items-end gap-5">
      <div className="flex gap-5 justify-center items-center">
        <AddUser />
      </div>
      <UserList data={users} />
    </div>
  );
}
