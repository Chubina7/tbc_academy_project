import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../../lib/variables";
import { generateUniqueId } from "../../../../../lib/helpers/regular_funcs/general";


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        delay(2500)
        const data: {
            room: {
                room_name: string;
                room_description: string;
                category: string[];
                cover_picture: string;
            },
            members: Array<string>
        } = await req.json()

        // insert into rooms data.room
        // ...
        // insert into user x rooms relation data.members
        // ...
        const room_id = generateUniqueId("R")

        const roomStudentPairs = data.members.map(member => `('${room_id}', '${member}')`).join(", ")
        const room_members_query = `INSERT INTO room_members (room_id, user_id) VALUES ('${room_id}', '${user.user_id}'), ${roomStudentPairs}`

        const created_at = new Date()
        const room_query = `INSERT into rooms (room_id, room_title, room_description, cover_picture, created_at) VALUES (${room_id}, ${data.room.room_name}, ${data.room.room_description}, ${data.room.cover_picture}, ${created_at}`

        return NextResponse.json({ room_query, room_members_query, room_id, message: "Room created successfully!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while connecting API" }, { status: 500 })
    }
}