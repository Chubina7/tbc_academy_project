import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "../../../../lib/variables";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";
import { sql } from "@vercel/postgres";
import { generateUniqueId } from "../../../../lib/helpers/regular_funcs/general";
import { revalidateTag } from "next/cache";


export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })


    try {
        const sqlCommand = await sql`SELECT
                    b.book_id,
                    b.book_title,
                    b.book_description,
                    b.blob_type AS book_type,
                    u.user_id,
                    u.username,
                    u.surname,
                    r.room_id,
                    r.room_name
                FROM
                    bookshelf b
                JOIN
                    bookshelf_authors ba ON b.book_id = ba.book_id
                JOIN
                    users u ON ba.user_id = u.user_id
                JOIN
                    rooms r ON ba.room_id = r.room_id
                JOIN
                    room_enrollments re ON re.room_id = r.room_id
                WHERE
                    re.user_id = ${user.user_id}`

        const formattedBooks = sqlCommand.rows.map(row => ({
            book_id: row.book_id,
            book_title: row.book_title,
            book_description: row.book_description,
            book_type: row.book_type,
            author: {
                user: {
                    user_id: row.user_id,
                    username: row.username,
                    surname: row.surname
                },
                room: {
                    room_id: row.room_id,
                    room_name: row.room_name
                }
            }
        }));

        return NextResponse.json(formattedBooks, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const book_id = generateUniqueId("B")
        const { book_description, book_title, room, blob_download_link, blob_type, blob_name } = await req.json()

        await sql`INSERT INTO bookshelf (book_id, book_title, book_description, blob_download_link, blob_type, blob_name, room_id, user_id)
                    VALUES (${book_id}, ${book_title}, ${book_description}, ${blob_download_link}, ${blob_type}, ${blob_name}, ${room.room_id}, ${user.user_id})`
        await sql`INSERT INTO bookshelf_authors (book_id, user_id, room_id)
                    VALUES (${book_id}, ${user.user_id}, ${room.room_id})`

        revalidateTag("bookshelf")
        return NextResponse.json({ message: "Book added successfully!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while uploading book. Try again later" }, { status: 500 })
    }
}