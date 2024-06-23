import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "../../../../../../lib/variables";
import { decrypt } from "../../../../../../lib/helpers/server_act_funcs/decrypt";
import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";

export async function DELETE(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const { user_id, room_id } = await req.json()

        await sql`DELETE FROM room_enrollments WHERE user_id = ${user_id} AND room_id = ${room_id}`

        revalidateTag("all_rooms")
        return NextResponse.json({ message: "User removed successfully!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal server error. Failed to remove user." }, { status: 500 })
    }
}
