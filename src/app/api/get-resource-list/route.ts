import { NextResponse } from "next/server";
import { psqlGetResources } from "../../../lib/sql/sqlQueries";

export async function GET() {
  try {
    const resources = await psqlGetResources();
    return NextResponse.json({ resources }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occured", error },
      { status: 500 }
    );
  }
}
