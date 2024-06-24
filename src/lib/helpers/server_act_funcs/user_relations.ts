"use server"

import { sql } from "@vercel/postgres"
import { USER } from "./authorization_acts"

export async function getUserRooms(user_id: string) {
    const { rows } = await sql`SELECT r.room_id, r.room_name
            FROM room_enrollments re
            JOIN rooms r ON re.room_id = r.room_id
            WHERE re.user_id = ${user_id}`

    return rows as Array<{ room_id: string, room_name: string }>
}

export async function getUserCategories() {
    const { user_id } = await USER()

    console.log("Fetch all categories that user is related to with the user id of: ", user_id)

    return []
}