import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { } = await req.json()

    try {

    } catch (error) {
        return NextResponse.json({ message: "Error occured!" }, { status: 500 })
    }

    return NextResponse.json({ message: "success" }, { status: 200 })
}