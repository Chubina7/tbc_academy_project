import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { user_id } = await req.json()

    console.log("deleting ", user_id)

    return NextResponse.json({ message: "success" }, { status: 200 })
}