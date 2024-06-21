"use server"

import { USER } from "./authorization_acts"

export async function getUserRooms() {
    const { user_id } = await USER()

    console.log("Fetch all rooms that user owns or is enrolled using user_id: ", user_id)

    return [
        {
            room_id: "U0001",
            room_name: "Math",
        },
        {
            room_id: "U0002",
            room_name: "Introduction to programming",
        },
        {
            room_id: "U0003",
            room_name: "Physics",
        },
        {
            room_id: "U0004",
            room_name: "Biology",
        },
    ]
}

export async function getUserCategories() {
    const { user_id } = await USER()

    console.log("Fetch all categories that user is related to with the user id of: ", user_id)

    return []
}