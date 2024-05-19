import { NextResponse } from "next/server";
import { psqlGetBookmarks } from "../../../lib/sqlQueries";

export async function GET() {
  try {
    const bookmarks = await psqlGetBookmarks("U1234");
    console.log(bookmarks);
    return NextResponse.json({ bookmarks }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occured", error },
      { status: 500 }
    );
  }
}
