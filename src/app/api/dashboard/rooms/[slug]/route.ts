import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../../lib/variables";
import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";

interface Props {
    params: IParams
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const assignments = [
    {
        assignment_id: "A0001",
        assignment_title: "HARDCODED DATA",
        assignment_description: "HARDCODED DATA HARDCODED DATA HARDCODED DATA",
        assignment_status: true,
        created_at: "2024-02-10T08:00:00Z",
        assignment_past_due: "2024-02-20T08:00:00Z",
    },
]
interface Props {
    params: IParams
}

export async function GET(req: NextRequest, { params }: Props) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        // intro
        const introData = await sql`SELECT r.room_name, r.room_description, r.created_at, r.room_image
                                    FROM room_enrollments re
                                    JOIN rooms r ON re.room_id = r.room_id
                                    WHERE r.room_id = ${params.slug} AND re.user_id = ${user.user_id}`
        const intro = introData.rows[0] as { room_name: string, room_description: string, created_at: string, room_image: string }

        // members
        const membersData = await sql`SELECT u.user_id, u.username, u.surname, u.email, u.profile_picture
                                    FROM room_enrollments re
                                    JOIN users u ON re.user_id = u.user_id
                                    WHERE re.room_id = ${params.slug} AND u.user_id <> ${user.user_id}`
        const members = membersData.rows as Array<IRoomMember>

        // categories
        const categoriesData = await sql`SELECT r.category
                                    FROM room_enrollments re
                                    JOIN rooms r ON re.room_id = r.room_id
                                    WHERE r.room_id = ${params.slug} AND re.user_id = ${user.user_id}`
        const categories = categoriesData.rows[0].category as Array<string>

        const announcementsData = await sql`SELECT 
                      a.announcement_id,
                      a.announcement_title,
                      a.announced_at,
                      a.announcement,
                      COUNT(c.comment_id) AS announcement_comment_num
                  FROM 
                      announcements a
                  LEFT JOIN 
                      announcement_comments c ON a.announcement_id = c.announcement_id
                  WHERE 
                      a.room_id = ${params.slug}
                  GROUP BY 
                      a.announcement_id,
                      a.announcement_title,
                      a.announced_at,
                      a.announcement`
        const announcements = announcementsData.rows as IRoomAnnouncement[]

        // assignments relation
        // ...
        const grade = {
            student_data: {
                user_avg: Math.round((Math.random() * 50 + 50) * 10) / 10,
                class_avg: Math.round((Math.random() * 50 + 50) * 10) / 10
            },
            teacher_data: members.map(item => ({
                user_id: item.user_id,
                username: item.username,
                surname: item.surname,
                student_avg_grade: Math.round((Math.random() * 50 + 50) * 10) / 10
            })) as Array<IRoomTeacherAvgs>
        }

        const data: ISingleRoomApiReturn = {
            intro,
            members,
            categories,
            assignments,
            announcements,
            grade
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
        await delay(1000)

        const isEnrolled = await sql`SELECT *
                                    FROM room_enrollments
                                    WHERE user_id = ${user.user_id}
                                    AND room_id = ${params.slug}`

        if (isEnrolled.rows.length !== 0) {
            await sql`DELETE FROM rooms WHERE room_id = ${params.slug}`
        } else {
            throw new Error()
        }

        revalidateTag("all_announcements")
        revalidateTag("all_rooms")
        revalidateTag("bookshelf")
        return NextResponse.json({ message: "Room deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong! Unable to delete room." }, { status: 500 })
    }
}