"use server"

import { sql } from "@vercel/postgres"
import { USER } from "./authorization_acts"
import { revalidateTag } from "next/cache";

export const likeComment = async (comment_id: string) => {
    const { user_id } = await USER();
    const { rowCount } = await sql`SELECT FROM announcement_comment_likes WHERE user_id = ${user_id} AND comment_id = ${comment_id}`

    if (rowCount > 0) return

    await sql`INSERT INTO announcement_comment_likes (user_id, comment_id) VALUES (${user_id}, ${comment_id})`;
    revalidateTag("announcement_all_comments")
};

export const dislikeComment = async (comment_id: string) => {
    const { user_id } = await USER()
    const { rowCount } = await sql`SELECT * FROM announcement_comment_likes WHERE user_id = ${user_id} AND comment_id = ${comment_id}`

    if (rowCount < 1) return


    await sql`DELETE FROM announcement_comment_likes WHERE user_id = ${user_id} AND comment_id = ${comment_id}`
    revalidateTag("announcement_all_comments")
}