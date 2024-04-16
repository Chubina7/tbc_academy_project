"use server";

import { cookies } from "next/headers";
import { getUserAuth } from "./helpers";

export const signInHandler = async (formData) => {
  const data = await getUserAuth({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  cookies().set("token", data.token), { secure: true };
  cookies().set("id", data.id, { secure: true });
  cookies().set("email", data.email, { secure: true });
  cookies().set("firstName", data.firstName, { secure: true });
  cookies().set("lastName", data.lastName, { secure: true });
  cookies().set("gender", data.gender, { secure: true });
  cookies().set("image", data.image, { secure: true });
};
