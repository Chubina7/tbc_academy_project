import React from "react";
import RemoveUser from "./removeUser/RemoveUser";
import EditUser from "./editUser/EditUser";

export default function UserList({ data }: { data: any[] }) {
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
        {data.map((user: any, idx: number) => (
          <tr key={idx} className="border border-black text-center">
            <td className="p-3">{user.user_id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.age || "unknow"}</td>
            <td>
              <EditUser id={user.user_id} />
            </td>
            <td>
              <RemoveUser id={user.user_id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
