import { NextRequest, NextResponse } from "next/server";
import { psqlDeleteUser } from "../../../../lib/sqlQueries";

export async function POST(req: NextRequest) {
    const { user_id } = await req.json()

    try {
        await psqlDeleteUser(user_id)
        return NextResponse.json({ message: "User permanently deleted." }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error occured while deleting user!", error }, { status: 500 })
    }
}