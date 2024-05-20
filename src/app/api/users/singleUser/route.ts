import { NextRequest, NextResponse } from "next/server";
import { psqlGetUserById } from "../../../../lib/sqlQueries";

export async function GET(req: NextRequest) {
    const url = new URL(req.url)
    const userId = url.searchParams.get("user_id") || ""

    try {
        const user = await psqlGetUserById(userId)
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error occured", error }, { status: 500 })
    }
}
