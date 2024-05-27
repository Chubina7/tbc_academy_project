import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const user_id = req.cookies.get("user_id")?.value;

        if (!user_id) {
            throw new Error("User ID not found in cookies");
        }

        const { rows } = await sql`SELECT c.* FROM courses c INNER JOIN enrollments e ON c.course_id = e.course_id WHERE e.user_id = ${user_id}`;

        // Modifing data
        let result = rows;
        for (let idx = 0; idx < rows.length; idx++) {
            const enrolled = await sql`
                SELECT u.*
                FROM users u
                INNER JOIN enrollments e ON u.user_id = e.user_id
                WHERE e.course_id = ${rows[idx].course_id}
            `;
            const students = enrolled.rows.filter((item) => item.role as RoleType === "student")
            const teachers = enrolled.rows.filter((item) => item.role as RoleType === "teacher")

            result[idx] = { ...result[idx], students, teachers };
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("Error retrieving courses:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
