import React from "react";
import RemoveUser from "./removeUser/RemoveUser";
import EditUser from "./editUser/EditUser";

interface IFullUser extends IUser {
  user_id: string;
}

export default function UserList({ data }: { data: IFullUser[] }) {
  return (
    <table className="w-full border border-black border-collapse p-3">
      <thead>
        <tr className="border border-black text-center font-bold">
          <td className="p-3">User ID</td>
          <td>Username</td>
          <td>Surname</td>
          <td>Email</td>
          <td>Role</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        {data.map((user: IFullUser) => (
          <tr key={user.user_id} className="border border-black text-center">
            <td className="p-3">{user.user_id}</td>
            <td>{user.username}</td>
            <td>{user.surname || <i>unknow</i>}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.age || <i>unknow</i>}</td>
            <td>
              <EditUser user_id={user.user_id} />
            </td>
            <td>
              <RemoveUser user_id={user.user_id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
