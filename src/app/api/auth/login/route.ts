import { NextRequest, NextResponse } from "next/server";
import { setSession } from "../../../../lib/actions";
import { psqlCheckUserCredentials, psqlGetUser } from "../../../../lib/sqlQueries";

export async function POST(req: NextRequest) {
  const { username, password }: IUserLoginInfo = await req.json();

  // Validation
  if (!username || !password) return NextResponse.json({ message: "Unable to pass empty values" }, { status: 500 })

  // Signing in
  try {
    const credentials = await psqlCheckUserCredentials({ username, password })
    if (credentials.length === 0) throw new Error()

    const user = await psqlGetUser(username)
    setSession(user.user_id)
    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 })
  }
}