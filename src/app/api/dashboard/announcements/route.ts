import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import { sql } from "@vercel/postgres";
import { generateUniqueId } from "../../../../lib/helpers/regular_funcs/general";

export async function GET(req: NextRequest) {
    console.log("ესტუმრა ეიპიაის")
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const announcements = await sql`
        SELECT 
            a.*, 
            u.user_id,
            u.username, 
            u.surname, 
            r.room_id, 
            r.room_name
        FROM 
            announcements a
        JOIN 
            announcement_authors aa ON a.announcement_id = aa.announcement_id
        JOIN 
            users u ON aa.user_id = u.user_id
        JOIN 
            rooms r ON aa.room_id = r.room_id
        ORDER BY 
            a.announced_at DESC`
        // add comments number querying
        const announcementList = announcements.rows.map(row => ({
            author: {
                user_id: row.user_id,
                username: row.username,
                surname: row.surname,
                room_id: row.room_id,
                room_name: row.room_name,
            },
            announcement_id: row.announcement_id,
            announcement_title: row.announcement_title,
            announcement: row.announcement,
            comments_number: row.comments_number,
            announced_at: row.announced_at,
        }))

        const room_names = await sql`SELECT DISTINCT r.room_name
                                FROM announcements a
                                JOIN rooms r ON a.room_id = r.room_id`
        const roomNamesList = room_names.rows.map(item => item.room_name)

        return NextResponse.json({ announcements: announcementList, room_names: roomNamesList }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error getting data from API", error }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const { announcement, announcement_title, room_id } = await req.json()

        const announcement_id = generateUniqueId("N")

        await sql`INSERT INTO announcements (room_id, announcement_id, announcement_title, announcement) VALUES (${room_id},${announcement_id}, ${announcement_title}, ${announcement})`
        await sql`INSERT INTO announcement_authors (announcement_id, user_id, room_id) VALUES (${announcement_id}, ${user.user_id}, ${room_id})`

        return NextResponse.json({ message: "Announced successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, { status: 500 })
    }
}