import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        return NextResponse.json({ message: "Success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(2500)
        const data = await req.json()

        console.log(data)

        return NextResponse.json({ message: "Book added successfully!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while uploading book. Try again later" }, { status: 500 })
    }
}