import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "../../../../../../lib/variables";
import { decrypt } from "../../../../../../lib/helpers/server_act_funcs/decrypt";
import { sql } from "@vercel/postgres";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(1000)

        const users = await sql`SELECT user_id, profile_picture, username, surname, role FROM users WHERE user_id != ${user.user_id}`

        return NextResponse.json(users.rows, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error connecting to the API" }, { status: 500 })
    }
}