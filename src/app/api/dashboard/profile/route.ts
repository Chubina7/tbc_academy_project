import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import { sql } from "@vercel/postgres";
import { encrypt } from "../../../../lib/helpers/server_act_funcs/authorization_acts";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(1000)
        const body = await req.json()

        await sql`UPDATE users
                SET username = ${body.username}, surname = ${body.surname}, birth_date = ${body.birth_date}, profile_picture = ${body.profile_picture}
                WHERE user_id = ${user.user_id}`
        const newSession = await encrypt({ ...user, surname: body.surname, username: body.username, birth_date: body.birth_date, profile_picture: body.profile_picture })
        cookies().set(AUTH_COOKIE_KEY, newSession)

        return NextResponse.json({ message: "User details changed successfully." }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while connecting API", error }, { status: 500 })
    }
}

export async function DELETE() {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(1000)

        await sql`DELETE FROM users WHERE user_id = ${user.user_id}`
        cookies().delete(AUTH_COOKIE_KEY)

        return NextResponse.json({ message: "Account deleted successfully." }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while connecting API", error }, { status: 500 })
    }
}