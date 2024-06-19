import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "../../../../../../lib/variables";
import { decrypt } from "../../../../../../lib/helpers/server_act_funcs/decrypt";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(2500)

        const { comment, announcement_id } = await req.json()

        const objToBeStored = {
            user_id: user.user_id,
            announcement_id,
            comment
        }

        console.log(objToBeStored)

        return NextResponse.json({ message: "Comment added!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Unable to add comment. Try again." }, { status: 500 })
    }
}