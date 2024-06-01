"use server"

import { cookies } from "next/headers";

export const USER = async () => {
    const user_id = cookies().get("user_id")?.value || "";
    const image = ""
    const email = "example@gmail.com"
    // other information which will be needed for authorization
    // ...
    return { user_id, image, email }
}