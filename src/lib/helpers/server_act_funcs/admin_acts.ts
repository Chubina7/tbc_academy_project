"use server";

import { revalidateTag } from "next/cache";
import {
  psqlAddUser,
  psqlDeleteUser,
  psqlEditUser,
} from "../../sql/sqlQueries";

export const actDeleteUser = async (user_id: string) => {
  await psqlDeleteUser(user_id);
  revalidateTag("user_list");
};
export const actAddUser = async (userData: IUserAdmin) => {
  await psqlAddUser(userData);
  revalidateTag("user_list");
};
export const actEditUser = async (userData: IUserAdmin, user_id: string) => {
  await psqlEditUser(userData, user_id);
  revalidateTag("user_list");
};
