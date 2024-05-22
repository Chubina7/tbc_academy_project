import { NextRequest, NextResponse } from "next/server";
import { setSession } from "../../../../lib/actions";
import { psqlCheckUserCredentials } from "../../../../lib/sqlQueries";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Validation
  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  try {
    const credentials = await psqlCheckUserCredentials({ email, password });
    if (!credentials) {
      return NextResponse.json({ message: "Incorrect credentials" }, { status: 401 });
    } else {
      setSession(credentials.user_id);
      return NextResponse.json({ message: "Successfully authenticated!" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Server error occured. Try again later or contact support" }, { status: 500 });
  }
}
