import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";
import { sql } from "@vercel/postgres";

interface IParams {
    slug: string;
}

interface Props {
    params: IParams;
}

export async function GET(req: NextRequest, { params }: Props) {
    const token = req.headers.get("Authorization");
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token);
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const user_id = params.slug;

        const { rows } = await sql`SELECT birth_date, email, profile_picture, role, surname, username
            FROM users WHERE user_id = ${user_id}`;

        if (rows.length === 0) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json(rows[0], { status: 200 });
    } catch (error) {
        console.error("Error while connecting API:", error);
        return NextResponse.json({ message: "Error while connecting API", error }, { status: 500 });
    }
}
