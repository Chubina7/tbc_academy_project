import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../../lib/variables";
import { revalidateTag } from "next/cache";
import { sql } from "@vercel/postgres";

interface Props {
    params: IParams
}

export async function GET(req: NextRequest, { params }: Props) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const announcement = await sql`SELECT 
            a.announcement_id,
            a.announcement_title,
            a.announcement,
            a.announced_at,
            aa.user_id,
            u.username,
            u.surname,
            aa.room_id,
            r.room_name
        FROM 
            announcements a
        JOIN 
            announcement_authors aa ON a.announcement_id = aa.announcement_id
        JOIN 
            users u ON aa.user_id = u.user_id
        JOIN 
            rooms r ON aa.room_id = r.room_id
        WHERE 
        a.announcement_id = ${params.slug}`

        const returnVal = announcement.rows.map(row => ({
            author: {
                user_id: row.user_id,
                room_id: row.room_id,
                username: row.username,
                surname: row.surname,
                room_name: row.room_name,
            },
            announcement_title: row.announcement_title,
            announcement: row.announcement,
            announced_at: row.announced_at,
        }))[0]

        return NextResponse.json(returnVal, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error getting data from API", error }, { status: 500 })
    }
}

export async function DELETE(_req: NextRequest, { params }: Props) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await sql`DELETE FROM announcements WHERE announcement_id = ${params.slug}`

        revalidateTag("all_announcements")
        return NextResponse.json({ message: "Success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 400 })
    }
}