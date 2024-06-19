import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const singleData = {
            announcement: {
                author: {
                    user_id: "U0001",
                    room_id: "R0001",
                    username: "john_doe",
                    surname: "Doe",
                    room_title: "Mathematics 101",
                },
                data: {
                    announcement_title: "Upcoming Exam",
                    announcement:
                        "Dear students, the upcoming exam will cover chapters 1 to 5. Please make sure to review all materials and complete the practice problems provided.",
                    announced_at: "2024-06-10T09:00:00Z",
                },
            },
            comments: [
                {
                    author: {
                        user_id: "U0001",
                        username: "john_doe",
                        surname: "Doe",
                        user_img: null,
                        role: "student" as RoleType,
                    },
                    comment_id: "C0001",
                    comment: "This is a very helpful announcement. Thank you!",
                    likes: {
                        isLiked: true,
                        quantity: 5,
                    },
                    commented_at: "2024-06-01T10:15:30Z",
                },
                {
                    author: {
                        user_id: "U0002",
                        username: "jane_smith",
                        surname: "Smith",
                        user_img: null,
                        role: "teacher" as RoleType,
                    },
                    comment_id: "C0002",
                    comment: "I agree with this announcement. Well done!",
                    likes: {
                        isLiked: false,
                        quantity: 3,
                    },
                    commented_at: "2024-06-02T08:25:45Z",
                },
                {
                    author: {
                        user_id: "U0003",
                        username: "alice_wonder",
                        surname: null,
                        user_img: null,
                        role: "admin" as RoleType,
                    },
                    comment_id: "C0003",
                    comment: "Please follow the guidelines mentioned in the announcement.",
                    likes: {
                        isLiked: true,
                        quantity: 8,
                    },
                    commented_at: "2024-06-03T12:45:20Z",
                },
                {
                    author: {
                        user_id: "U0004",
                        username: "bob_martin",
                        surname: "Martin",
                        user_img: null,
                        role: "student" as RoleType,
                    },
                    comment_id: "C0004",
                    comment: "Can you provide more details about this?",
                    likes: {
                        isLiked: false,
                        quantity: 2,
                    },
                    commented_at: "2024-06-04T14:10:05Z",
                },
                {
                    author: {
                        user_id: "U0005",
                        username: "linda_wang",
                        surname: "Wang",
                        user_img: null,
                        role: "teacher" as RoleType,
                    },
                    comment_id: "C0005",
                    comment: "Great announcement, it was much needed.",
                    likes: {
                        isLiked: true,
                        quantity: 6,
                    },
                    commented_at: "2024-06-05T09:35:50Z",
                },
            ],
        };
        return NextResponse.json({ announcement: singleData.announcement, comments: singleData.comments }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error getting data from API", error }, { status: 500 })
    }

}