import { NextRequest, NextResponse } from "next/server";
import { checkUserCredentials, getUser } from "../../../../lib/helpers";
import { setSession } from "../../../../lib/actions";

export async function POST(req: NextRequest) {
  const { username, password }: IUserLoginInfo = await req.json();

  // Validation
  if (!username || !password) return NextResponse.json({ message: "Unable to pass empty values" }, { status: 500 })

  // Signing in
  try {
    const credentials = await checkUserCredentials({ username, password })
    if (credentials.length === 0) return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  // On success
  const user = await getUser(username)
  setSession(user.user_id)
  return NextResponse.json(user, { status: 200 })
}