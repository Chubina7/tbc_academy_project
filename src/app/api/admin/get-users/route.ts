import { NextResponse } from "next/server";
import { getAllUsers } from "../../../../lib/helpers";

export async function GET() {
    const users = await getAllUsers()

    return NextResponse.json(users, { status: 200 })
}