"use server";

import { cookies } from "next/headers";
import { getUserAuth } from "./helpers";
import { AUTH_COOKIE_KEY } from "./variables";

// Auth
export const signIn = async (formData) => {
  const data = await getUserAuth({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  cookies().set("token", data.toke, { secure: true });
  cookies().set("id", data.id, { secure: true });
  cookies().set("email", data.email, { secure: true });
  cookies().set("firstName", data.firstName, { secure: true });
  cookies().set("lastName", data.lastName, { secure: true });
  cookies().set("gender", data.gender, { secure: true });
  cookies().set("image", data.image, { secure: true });
};
export const signOut = async () => {
  cookies().delete("id");
  cookies().delete(AUTH_COOKIE_KEY);
  cookies().delete("email");
  cookies().delete("firstName");
  cookies().delete("lastName");
  cookies().delete("gender");
  cookies().delete("image");
};

// User Data
export const getUserInfo = async () => {
  const cookieStore = cookies();
  const firstName = cookieStore.get("firstName").value;
  const lastName = cookieStore.get("lastName").value;
  const image = cookieStore.get("image").value;
  const gender = cookieStore.get("gender").value;

  return { firstName, lastName, image, gender };
};
export const getUserLoginInfo = async () => {
  const cookieStore = cookies();
  const email = cookieStore.get("email").value;
  
  return { email, password: "admin" };
};
