import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";

export async function POST(req) {
  const { username, password } = await req.json();

  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const user = await res.json();

    const cookieRule = { secure: true, sameSite: "none" };
    cookies().set(AUTH_COOKIE_KEY, user.token, cookieRule);
    cookies().set("id", user.id, cookieRule);
    cookies().set("email", user.email, cookieRule);
    cookies().set("firstName", user.firstName, cookieRule);
    cookies().set("lastName", user.lastName, cookieRule);
    cookies().set("gender", user.gender, cookieRule);
    cookies().set("image", user.image, cookieRule);

    return Response.json({
      status: 200,
      message: "Loggined successfully!",
      user,
    });
  } catch (error) {
    return Response.json({
      status: 201,
      message: "Can not login!",
      error,
    });
  }
}
