import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import { NextRequest } from "next/server";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function POST(req: NextRequest) {
  const { username, password }: IUserLoginInfo = await req.json();
  const options: Partial<ResponseCookie> = { secure: true, sameSite: "none" };

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const user: IUserIsAuthed = await res.json();

  if (user.token) {
    cookies().set(AUTH_COOKIE_KEY, user.token, options);
    cookies().set("id", user.id.toString(), options);
    cookies().set("email", user.email, options);
    cookies().set("firstName", user.firstName, options);
    cookies().set("lastName", user.lastName, options);
    cookies().set("gender", user.gender, options);
    cookies().set("image", user.image, options);

    return Response.json({
      status: 200,
      message: "Loggined successfully!",
      user,
    });
  } else {
    return Response.json({
      status: 401,
      message: "Unable to login!",
    })
  }

}