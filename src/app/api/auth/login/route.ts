import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { psqlCheckUserInDb } from "../../../../lib/sql/sqlQueries";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { SignJWT } from "jose"
import { sql } from "@vercel/postgres";

const key = new TextEncoder().encode(process.env.JWT_SECRET_SIGN_KEY)
const algorithm = process.env.JWT_ALGORITHM

async function hasAccess(plainPassword: any, hashedPassword: any): Promise<any> {
  try {
    const result = await bcrypt.compare(plainPassword, hashedPassword);
    return result;
  } catch (err) {
    console.error('Error comparing passwords:', err);
    throw err;
  }
};

async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: `${algorithm}` })
    .setIssuedAt()
    .setExpirationTime(new Date(Date.now() + (6 * 30 * 24 * 60 * 60 * 1000)))
    .sign(key)
}

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

    if (hasAccessOrNot) {
      const user = await sql`SELECT * FROM users WHERE email = ${email}`
      const value = await encrypt(user.rows[0])
      const options: Partial<ResponseCookie> = {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        path: "/",
      }
      cookies().set(AUTH_COOKIE_KEY, value, options);
      return NextResponse.json({ message: "Successfully authenticated!" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Server error occured. Try again later or contact support", error: error }, { status: 500 });
  }
}
