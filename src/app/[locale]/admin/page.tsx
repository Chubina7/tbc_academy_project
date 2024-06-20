import React from "react";
import UserList from "../../../components/admin/UserList";
import AddUser from "../../../components/admin/addUser/AddUser";
import { getUsers } from "../../../lib/helpers/regular_funcs/helpers";
import { unstable_setRequestLocale } from "next-intl/server";

interface IFullUser extends IUserAdmin {
  user_id: string;
}

interface Props {
  params: IParams;
}

export default async function page({ params }: Props) {
  unstable_setRequestLocale(params.locale);
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
