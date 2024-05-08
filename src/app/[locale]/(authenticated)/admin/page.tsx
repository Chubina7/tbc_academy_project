import React from "react";
import UserList from "../../../../components/admin/UserList";
import AddUser from "../../../../components/admin/AddUser";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/admin/get-users");
  const json = await res.json();

  return json;
}

export default async function page() {
  const users = await getUsers();

  return (
    <div className="w-full flex flex-col justify-center items-end gap-5">
      <div className="flex gap-5 justify-center items-center">
        <AddUser />
      </div>
      <UserList users={users} />
    </div>
  );
}
