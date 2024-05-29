import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { generateUniqueId } from "../../../../lib/helpers/regular_funcs/general";

export async function GET(req: NextRequest) {
    try {
        const user_id = req.cookies.get("user_id")?.value;

        if (!user_id) {
            throw new Error("User ID not found in cookies");
        }

        const { rows } = await sql`SELECT c.* FROM courses c INNER JOIN enrollments e ON c.course_id = e.course_id WHERE e.user_id = ${user_id} ORDER BY c.course_id`;

        // Modifing data
        let result = rows;
        for (let idx = 0; idx < rows.length; idx++) {
            const enrolled = await sql`
                SELECT u.user_id, u.username, u.surname, u.image, u.role
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

export async function POST(req: NextRequest) {
    const { course_title, course_description, category, created_at, updated_at } = await req.json()
    // Authorization
    const user_id = req.cookies.get("user_id")?.value;

    // validate
    if (!course_title || !category) return NextResponse.json({ message: "Unable to pass empty values" }, { status: 400 })

    // insert data into all courses and relation
    try {
        const course_id = generateUniqueId("C")
        await sql`INSERT INTO courses (course_id, course_title, course_description, category, created_at, updated_at)
                    VALUES (${course_id}, ${course_title}, ${course_description}, ${category}, ${created_at}, ${updated_at})`;
        await sql`INSERT INTO enrollments (course_id, user_id)
                    VALUES (${course_id}, ${user_id})`;

        return NextResponse.json({ message: "Success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }

}