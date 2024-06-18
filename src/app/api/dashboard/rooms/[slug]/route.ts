import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../../lib/variables";

interface Props {
    params: IParams
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const data: ISingleRoomApiReturn = {
            intro: {
                room_name: "Advanced Mathematics",
                room_description:
                    "A room dedicated to advanced mathematics topics and problem solving.",
                created_at: "2023-01-15T09:30:00Z",
                room_image: null,
            },
            assignments: [
                {
                    assignment_id: "A0001",
                    assignment_title: "Calculus Homework",
                    assignment_description: "Complete the calculus problems on page 32.",
                    assignment_status: true,
                    created_at: "2024-02-10T08:00:00Z",
                    assignment_past_due: "2024-02-20T08:00:00Z",
                },
                {
                    assignment_id: "A0002",
                    assignment_title: "Linear Algebra Assignment",
                    assignment_description: "Submit a report on vector spaces.",
                    assignment_status: false,
                    created_at: "2024-03-05T08:00:00Z",
                    assignment_past_due: "2024-03-15T08:00:00Z",
                },
                {
                    assignment_id: "A0002",
                    assignment_title: "Linear Algebra Assignment",
                    assignment_description: "Submit a report on vector spaces.",
                    assignment_status: false,
                    created_at: "2024-03-05T08:00:00Z",
                    assignment_past_due: "2024-03-15T08:00:00Z",
                },
                {
                    assignment_id: "A0002",
                    assignment_title: "Linear Algebra Assignment",
                    assignment_description: "Submit a report on vector spaces.",
                    assignment_status: false,
                    created_at: "2024-03-05T08:00:00Z",
                    assignment_past_due: "2024-03-15T08:00:00Z",
                },
                {
                    assignment_id: "A0002",
                    assignment_title: "Linear Algebra Assignment",
                    assignment_description: "Submit a report on vector spaces.",
                    assignment_status: false,
                    created_at: "2024-03-05T08:00:00Z",
                    assignment_past_due: "2024-03-15T08:00:00Z",
                },
                {
                    assignment_id: "A0002",
                    assignment_title: "Linear Algebra Assignment",
                    assignment_description: "Submit a report on vector spaces.",
                    assignment_status: false,
                    created_at: "2024-03-05T08:00:00Z",
                    assignment_past_due: "2024-03-15T08:00:00Z",
                },
            ],
            announcements: [
                {
                    announcement_id: "AN0001",
                    announcement_title: "Exam Date Announced",
                    annonced_at: "2024-04-01T09:00:00Z",
                    announcement_description:
                        "The mid-term exam will be held on April 15th.",
                    announcement_comment_num: 12,
                },
                {
                    announcement_id: "AN0002",
                    announcement_title: "New Course Materials Available",
                    annonced_at: "2024-03-15T09:00:00Z",
                    announcement_description:
                        "New materials for the linear algebra section have been uploaded.",
                    announcement_comment_num: 8,
                },
            ],
            categories: ["ctg1", "ctg2", "ctg3", "ctg5"],
            grade: {
                student_data: {
                    user_avg: 88.5,
                    class_avg: 75.3,
                },
                teacher_data: [
                    {
                        user_id: "U0001",
                        username: "jdoe",
                        surname: "Doe",
                        student_avg_grade: 85.6,
                    },
                    {
                        user_id: "U0002",
                        username: "asmith",
                        surname: "Smith",
                        student_avg_grade: 90.2,
                    },
                ],
            },
            members: [
                {
                    user_id: "U0003",
                    username: "mjohnson",
                    surname: "Johnson",
                    email: "mjohnson@example.com",
                    profile_picture: null,
                },
                {
                    user_id: "U0004",
                    username: "lwilson",
                    surname: "Wilson",
                    email: "lwilson@example.com",
                    profile_picture: null,
                },
                {
                    user_id: "U0005",
                    username: "twhite",
                    surname: null,
                    email: "twhite@example.com",
                    profile_picture: null,
                },
            ],
        };
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error returning data from API", error }, { status: 500 })
    }
}

export async function DELETE(_req: NextRequest, { params }: Props) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })
    if (user.role === "student") return NextResponse.json({ message: "You do not have persmission to make delete action" }, { status: 401 })

    try {
        await delay(2500)

        console.log(params.slug)

        return NextResponse.json({ message: "Room deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong! Unable to delete room." }, { status: 500 })
    }
}

export async function PUT(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })
    if (user.role === "student") return NextResponse.json({ message: "You do not have persmission to make delete action" }, { status: 401 })

    try {
        await delay(2500)

        const data = await req.json()

        // store categories in this format JSON.stringify(data.categories))

        console.log(data)

        throw new Error()

        return NextResponse.json({ message: "Changed successfullly!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal server error. Unable to change room settings." }, { status: 500 })
    }
}