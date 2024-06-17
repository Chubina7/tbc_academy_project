import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const announcementList: IAnnouncement[] = [
            {
                author: {
                    user_id: "U0001",
                    username: "Alice",
                    surname: "Johnson",
                    room_id: "R0001",
                    room_title: "Science Class",
                },
                announcement_id: "A0001",
                announcement_title: "Lab Safety Rules",
                announcement:
                    "Please remember to follow all lab safety rules during our experiments.",
                comments_number: 5,
                announced_at: "01/06/2024",
            },
            {
                author: {
                    user_id: "U0002",
                    username: "Bob",
                    surname: "Smith",
                    room_id: "R0002",
                    room_title: "Math Class",
                },
                announcement_id: "A0002",
                announcement_title: "Homework Due Date",
                announcement:
                    "The homework on calculus is due next Monday. Please submit it on time.",
                comments_number: 3,
                announced_at: "02/06/2024",
            },
            {
                author: {
                    user_id: "U0003",
                    username: "Charlie",
                    surname: "Brown",
                    room_id: "R0003",
                    room_title: "History Class",
                },
                announcement_id: "A0003",
                announcement_title: "Field Trip",
                announcement:
                    "We will be visiting the history museum next Friday. Don't forget to bring your permission slips.",
                comments_number: 7,
                announced_at: "03/06/2024",
            },
            {
                author: {
                    user_id: "U0004",
                    username: "Diana",
                    surname: "Miller",
                    room_id: "R0004",
                    room_title: "English Class",
                },
                announcement_id: "A0004",
                announcement_title: "Reading Assignment",
                announcement:
                    "Please read chapters 4 and 5 of 'To Kill a Mockingbird' for our next class discussion.",
                comments_number: 2,
                announced_at: "04/06/2024",
            },
            {
                author: {
                    user_id: "U0005",
                    username: "Eve",
                    surname: "Davis",
                    room_id: "R0005",
                    room_title: "Physics Class",
                },
                announcement_id: "A0005",
                announcement_title: "Project Deadline",
                announcement:
                    "The project on Newton's laws of motion is due by the end of this month. Start working on it early!",
                comments_number: 4,
                announced_at: "05/06/2024",
            },
        ];
        const room_names = ["test1", "test2", "test3"]

        return NextResponse.json({ announcements: announcementList, room_names: room_names }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error getting data from API", error }, { status: 500 })
    }

}