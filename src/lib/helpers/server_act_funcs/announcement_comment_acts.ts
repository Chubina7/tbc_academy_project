"use server"

import { USER } from "./authorization"

export const likeComment = async ({ announcement_id, comment_id }: { comment_id: string, announcement_id: string }) => {
    const { user_id } = await USER()

    // sql command to add like

    console.log("comment liked", { user_id, announcement_id, comment_id })
}

export const dislikeComment = async ({ announcement_id, comment_id }: { comment_id: string, announcement_id: string }) => {
    const { user_id } = await USER()

    // sql command to remove like

    console.log("comment dis-liked", { user_id, announcement_id, comment_id })
}