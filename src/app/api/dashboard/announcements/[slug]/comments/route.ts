import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../../lib/helpers/server_act_funcs/decrypt";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../../../lib/variables";
import { sql } from "@vercel/postgres";
import { generateUniqueId } from "../../../../../../lib/helpers/regular_funcs/general";
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
        const sqlResult = await sql`
                SELECT
                    c.comment_id,
                    c.comment,
                    c.commented_at,
                    ca.user_id AS author_user_id,
                    u.username AS author_username,
                    u.surname AS author_surname,
                    u.profile_picture AS author_profile_picture,
                    u.role AS author_role,
                    CASE WHEN ul.user_id IS NOT NULL THEN TRUE ELSE FALSE END AS isLiked,
                    COALESCE(lc.likes_quantity, 0) AS likes_quantity
                FROM
                    announcement_comments c
                JOIN
                    announcement_comment_authors ca ON c.comment_id = ca.comment_id
                JOIN
                    users u ON ca.user_id = u.user_id
                LEFT JOIN (
                    SELECT
                        comment_id,
                        COUNT(*) AS likes_quantity
                    FROM
                        announcement_comment_likes
                    GROUP BY
                        comment_id
                ) lc ON c.comment_id = lc.comment_id
                LEFT JOIN (
                    SELECT
                        comment_id,
                        user_id
                    FROM
                        announcement_comment_likes
                    WHERE
                        user_id = ${user.user_id}
                ) ul ON c.comment_id = ul.comment_id
                WHERE
                    c.announcement_id = ${params.slug}
                ORDER BY
                    c.commented_at DESC`;

        const comments = sqlResult.rows.map(row => ({
            comment_id: row.comment_id,
            comment: row.comment,
            commented_at: row.commented_at,
            likes: {
                isLiked: row.isliked,
                quantity: Number(row.likes_quantity)
            },
            author: {
                user_id: row.author_user_id,
                username: row.author_username,
                surname: row.author_surname,
                profile_picture: row.author_profile_picture,
                role: row.author_role as RoleType
            }
        }));

        return NextResponse.json(comments, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error getting data from API", error }, { status: 500 })
    }
}

export async function POST(req: NextRequest, { params }: Props) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const { comment } = await req.json()
        const comment_id = generateUniqueId("C")

        await sql`INSERT INTO announcement_comments (comment_id, comment, user_id, announcement_id) VALUES (${comment_id}, ${comment}, ${user.user_id}, ${params.slug})`
        await sql`INSERT INTO announcement_comment_authors (comment_id, user_id, announcement_id) VALUES (${comment_id}, ${user.user_id}, ${params.slug})`

        revalidateTag("announcement_all_comments")
        revalidateTag("all_announcements")
        return NextResponse.json({ message: "Comment added!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while adding comment.", error }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const announcement_id = await req.json()

        await sql`DELETE FROM announcement_comments WHERE comment_id = ${announcement_id}`

        revalidateTag("announcement_all_comments")
        revalidateTag("all_announcements")
        return NextResponse.json({ message: "Comment deleted successfully!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while deleting comment." }, { status: 500 })
    }
}