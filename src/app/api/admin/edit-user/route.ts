import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { } = await req.json()

    try {
        // user edit logic
        return NextResponse.json({ message: "success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Erorr occured!", error }, { status: 500 })
    }
}