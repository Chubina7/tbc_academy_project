import { NextRequest, NextResponse } from "next/server";
import { psqlCheckUserInDb } from "../../../../lib/sql/sqlQueries";
import { sql } from "@vercel/postgres";
import { hasAccess, setSessionCookie } from "../../../../lib/helpers/server_act_funcs/authorization";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Validation
  if (!email || !password) return NextResponse.json({ message: "Email and password are required" }, { status: 400 });

  try {
    const passwordInDb = await psqlCheckUserInDb(email)
    const hasAccessOrNot = await hasAccess(password, await passwordInDb)

    if (!passwordInDb || !hasAccessOrNot) return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 });

    const user = await sql`SELECT * FROM users WHERE email = ${email}`
    await setSessionCookie(user.rows[0])

    return NextResponse.json({ message: "Successfully authenticated!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong. Try again later.", error: error }, { status: 500 });
  }
}
