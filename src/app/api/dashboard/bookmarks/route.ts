import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";
import { sql } from "@vercel/postgres";

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const data = await sql`SELECT book_id FROM bookmarks WHERE user_id = ${user.user_id}`
        const result = data.rows.map(item => item.book_id)
        
        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "error" }, { status: 200 })
    }
}