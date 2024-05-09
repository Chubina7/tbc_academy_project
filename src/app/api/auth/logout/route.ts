import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";

export async function GET() {
  cookies().delete(AUTH_COOKIE_KEY);
  cookies().delete("user_id");
  cookies().delete("email");
  cookies().delete("age");

  return Response.json({ message: "User logged out successfully" });
}
