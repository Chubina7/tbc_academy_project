import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";
import { AUTH_COOKIE_KEY } from "../../../../../lib/variables";
import { cookies } from "next/headers";
import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";

interface Props {
    params: IParams
}

export async function GET(req: NextRequest, { params }: Props) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const test = await sql`SELECT
            b.book_id,
            b.book_title,
            b.book_description,
            b.blob_download_link,
            b.blob_type,
            b.blob_name,
            u.username,
            u.surname
        FROM
            bookshelf b
        JOIN
            bookshelf_authors ba ON b.book_id = ba.book_id
        JOIN
            users u ON ba.user_id = u.user_id
        WHERE
            b.book_id = ${params.slug}`

        return NextResponse.json(test.rows[0], { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while getting single book data", error }, { status: 500 })
    }
}

export async function DELETE(_req: NextRequest, { params }: Props) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await sql`DELETE FROM bookshelf WHERE book_id = ${params.slug}`

        revalidateTag("bookshelf")
        return NextResponse.json({ message: "Book deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while deleting book", error }, { status: 500 })
    }
}