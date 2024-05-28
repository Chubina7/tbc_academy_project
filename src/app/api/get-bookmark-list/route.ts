import { NextResponse } from "next/server";
import { psqlGetBookmarks } from "../../../lib/sql/sqlQueries";
import { cookies } from "next/headers";

export async function GET() {
  const user_id = cookies().get("user_id")?.value || "";

  try {
    const bookmarks = await psqlGetBookmarks(user_id);
    return NextResponse.json({ bookmarks }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occured", error },
      { status: 500 }
    );
  }
}
