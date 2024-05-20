import { NextRequest, NextResponse } from "next/server";
import { setSession } from "../../../../lib/actions";
import { psqlCheckUserCredentials } from "../../../../lib/sqlQueries";

export async function POST(req: NextRequest) {
  const { email, password }: IUserLoginInfo = await req.json();

  // Validation
  if (!email || !password) return NextResponse.json({ message: "Unable to pass empty values" }, { status: 500 })

  // Signing in
  try {
    const credentials = await psqlCheckUserCredentials({ email, password })
    if (!credentials) {
      throw new Error()
    } else {
      setSession(credentials.user_id)
    }
  } catch (error) {
    return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 })
  }

  return NextResponse.json({ message: "Successfully authenticated!" }, { status: 200 })
}