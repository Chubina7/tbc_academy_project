import { NextResponse } from "next/server";
import { psqlGetAllUsers } from "../../../../lib/sqlQueries";

export async function GET() {
    try {
        const users = await psqlGetAllUsers()
        return NextResponse.json(users, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error occured", error }, { status: 500 })
    }
}