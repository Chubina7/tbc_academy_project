import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(5000)
        const body = await req.json()
        // store data in DB
        // ...
        // get newest user data
        // ...
        // create new JWT Token
        // ...
        // set new token in cookies
        // cookies().set(AUTH_COOKIE_KEY, "test")

        console.log(body)

        return NextResponse.json({ message: "User details changed successfully." }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while connecting API", error }, { status: 500 })
    }
}