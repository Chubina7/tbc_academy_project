"use client";

import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { editUser, removeUser } from "../../lib/helpers";

export default function UserList({ users }: { users: any }) {
  return (
    <table className="w-full border border-black border-collapse p-3">
      <thead>
        <tr className="border border-black">
          <th className="p-3">User ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any, idx: number) => (
          <tr key={idx} className="border border-black text-center">
            <td className="p-3">{user.user_id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.age || "unknow"}</td>
            <td>
              <BsPencilFill
                size={20}
                onClick={() => editUser(user.user_id)}
                cursor="pointer"
              />
            </td>
            <td>
              <MdDelete
                size={20}
                onClick={() => removeUser(user.user_id)}
                cursor="pointer"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
