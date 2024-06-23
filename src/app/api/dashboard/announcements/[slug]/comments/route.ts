import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../../../lib/variables";
import { sql } from "@vercel/postgres";
import { generateUniqueId } from "../../../../../../lib/helpers/regular_funcs/general";
import { revalidateTag } from "next/cache";


export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const comments = [
            {
                comment_id: "C0001",
                comment: "This is a very helpful announcement. Thank you!",
                commented_at: "2024-06-01T10:15:30Z",
                likes: {
                    isLiked: true,
                    quantity: 5,
                },
                author: {
                    user_id: "U0001",
                    username: "john_doe",
                    surname: "Doe",
                    user_img: null,
                    role: "student" as RoleType,
                },
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
        ]

        return NextResponse.json(comments, { status: 200 })
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
        const { comment, announcement_id } = await req.json()
        const comment_id = generateUniqueId("C")

        await sql`INSERT INTO comments (comment_id, comment, user_id, announcement_id) VALUES (${comment_id}, ${comment}, ${user.user_id}, ${announcement_id})`
        await sql`INSERT INTO comment_authors (comment_id, user_id, announcement_id) VALUES (${comment_id}, ${user.user_id}, ${announcement_id})`

        // revalidateTag("announcement_all_comments")
        return NextResponse.json({ message: "Success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}