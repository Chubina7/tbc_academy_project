import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import { generateUniqueId } from "../../../../lib/helpers/regular_funcs/general";
import { sql } from "@vercel/postgres";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface IPostReqData {
    room: {
        room_name: string;
        room_description: string;
        category: string[];
        cover_picture: string;
    },
    members: Array<string>
}

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        // get room data
        const roomData = await sql`SELECT r.room_id, r.room_name, r.room_description, r.room_image, r.category, r.created_at
                                    FROM rooms r
                                    JOIN room_enrollments re ON r.room_id = re.room_id
                                    WHERE re.user_id = ${user.user_id}`

        // get all categories list
        const categories = await sql`SELECT ARRAY_AGG(category) AS all_categories
                                    FROM (
                                    SELECT unnest(r.category) AS category
                                    FROM room_enrollments re
                                    JOIN rooms r ON re.room_id = r.room_id
                                    WHERE re.user_id = ${user.user_id}
                                    ) AS categories`
        // modify room data
        const rooms = []
        for (let idx = 0; idx < roomData.rows.length; idx++) {
            const currRoomId = roomData.rows[idx].room_id

            const e_n = await sql`SELECT room_id, COUNT(user_id) AS enrolled_number 
                 FROM room_enrollments
                 WHERE room_id = ${currRoomId}
                 GROUP BY room_id `

            const teacher = await sql`SELECT u.user_id, u.username, u.surname
                 FROM room_enrollments re
                 JOIN users u ON re.user_id = u.user_id
                 WHERE re.room_id = ${currRoomId} AND u.role = 'teacher'`

            rooms.push({
                ...roomData.rows[idx],
                enrolled_number: Number(e_n.rows[0].enrolled_number),
                teacher: teacher.rows[0].username + " " + teacher.rows[0].surname
            })
        }

        // build return object
        const returnData = {
            rooms,
            categories: Array.from(new Set(categories.rows[0].all_categories)) || []
        }

        return NextResponse.json(returnData, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error returning data from API", error }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(1000)

        const data: IPostReqData = await req.json()
        const room_id = generateUniqueId("R")

        await sql`INSERT INTO rooms (room_id, room_name, room_description, category, room_image) VALUES
        (${room_id}, ${data.room.room_name}, ${data.room.room_description}, ${data.room.category as any}, ${data.room.cover_picture})`

        await sql`INSERT INTO room_enrollments (user_id, room_id) VALUES (${user.user_id}, ${room_id})`
        for (let idx = 0; idx < data.members.length; idx++) {
            await sql`INSERT INTO room_enrollments (user_id, room_id) VALUES (${data.members[idx]}, ${room_id})`
        }

        return NextResponse.json({ message: "Room created successfully!", room_id }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while connecting API" }, { status: 500 })
    }
}
