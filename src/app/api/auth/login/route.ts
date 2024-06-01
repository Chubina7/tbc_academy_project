import { NextRequest, NextResponse } from "next/server";
import { setSession } from "../../../../lib/helpers/server_act_funcs/actions";
import bcrypt from "bcrypt"
import { sql } from "@vercel/postgres";
import { psqlCheckUserInDb } from "../../../../lib/sql/sqlQueries";

async function hasAccess(plainPassword: string, hashedPassword: string) {
  try {
    const result = await bcrypt.compare(plainPassword, hashedPassword);
    return result;
  } catch (err) {
    console.error('Error comparing passwords:', err);
    throw err;
  }
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Validation
  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  try {
    const passwordInDb = await psqlCheckUserInDb(email)

    if (!passwordInDb) return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 });

    const hasAccessOrNot = await hasAccess(password, await passwordInDb)

    if (!hasAccessOrNot) {
      return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 });
    } else {
      const user_id = await sql`SELECT user_id FROM users WHERE email = ${email}` // დროებით
      setSession(user_id.rows[0].user_id);
      
      return NextResponse.json({ message: "Successfully authenticated!" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Server error occured. Try again later or contact support", error: error }, { status: 500 });
  }
}
