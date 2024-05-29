import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { course_id: string } }) {
    const { course_id } = params;

    if (!course_id) {
        return NextResponse.json({ message: "Course ID is required" }, { status: 400 });
    }

    try {
        const { rows } = await sql`SELECT * FROM courses WHERE course_id = ${course_id}`;

        if (rows.length === 0) {
            return NextResponse.json({ message: "Course not found" }, { status: 404 });
        }

        const announcements = await sql`SELECT a.announcement_id, a.announcement_title AS title, a.announcement_body AS body, a.created_at,
                                        u.user_id AS author_id, u.username AS author_name, u.surname AS author_surname, u.image AS user_image
                                        FROM announcements a
                                        INNER JOIN users u ON a.user_id = u.user_id
                                        WHERE a.course_id = ${course_id}`
        const members = await sql`SELECT u.user_id, u.username, u.surname, u.email, u.image FROM users u INNER JOIN enrollments e ON u.user_id = e.user_id WHERE e.course_id = ${course_id} AND u.role = 'student'`

        const result = { ...rows[0], announcements: announcements.rows, members: members.rows }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("Error retrieving course:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
