"use server"

import { sql } from "@vercel/postgres"
import { USER } from "./authorization_acts"

export const removeBookmarkAct = async (book_id: string) => {
    try {
        const { user_id } = await USER()
        await sql`DELETE FROM bookmarks WHERE user_id = ${user_id} AND book_id = ${book_id}`
    } catch (error) {
        console.error('Error removing bookmark:', error)
        throw new Error('Failed to remove bookmark')
    }
}

export const addBookmarkAct = async (book_id: string) => {
    try {
        const { user_id } = await USER()
        await sql`INSERT INTO bookmarks (user_id, book_id) VALUES (${user_id}, ${book_id})`
    } catch (error) {
        console.error('Error adding bookmark:', error)
        throw new Error('Failed to add bookmark')
    }
}
