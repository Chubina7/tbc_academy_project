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

        return NextResponse.json(rows[0], { status: 200 });
    } catch (error) {
        console.error("Error retrieving course:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
