import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE_KEY } from "../../../../../../../lib/variables"
import { decrypt } from "../../../../../../../lib/helpers/server_act_funcs/decrypt"
import { sql } from "@vercel/postgres";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface Props {
    params: IParams
}

export async function PUT(req: NextRequest, { params }: Props) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })
    if (user.role === "student") return NextResponse.json({ message: "You do not have persmission to make delete action" }, { status: 401 })

    try {
        await delay(2500)

        const cover_picture = await req.json()

        const isEnrolled = await sql`SELECT *
        FROM room_enrollments
        WHERE user_id = ${user.user_id}
        AND room_id = ${params.slug}`

        if (isEnrolled.rows.length !== 0) {
            await sql`UPDATE rooms SET room_image = ${cover_picture.trim()} WHERE room_id = ${params.slug}`
        } else {
            throw new Error()
        }

        return NextResponse.json({ message: "Cover picture changed successfullly!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal server error. Unable to change room settings." }, { status: 500 })
    }
}