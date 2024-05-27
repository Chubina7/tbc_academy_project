import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log(req)
    return NextResponse.json({ message: "Hello js" }, { status: 200 })
}