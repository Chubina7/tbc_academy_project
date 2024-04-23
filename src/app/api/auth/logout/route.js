import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";

export async function GET() {
  cookies().delete("id");
  cookies().delete(AUTH_COOKIE_KEY);
  cookies().delete("email");
  cookies().delete("firstName");
  cookies().delete("lastName");
  cookies().delete("gender");
  cookies().delete("image");

  return Response.json({ message: "User logged out successfully" });
}
