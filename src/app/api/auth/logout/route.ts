import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";

export async function GET() {
  cookies().delete(AUTH_COOKIE_KEY);

  return Response.json({ message: "User logged out successfully" });
}
