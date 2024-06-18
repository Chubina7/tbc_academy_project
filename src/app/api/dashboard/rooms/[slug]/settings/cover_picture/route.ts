import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE_KEY } from "../../../../../../../lib/variables"
import { decrypt } from "../../../../../../../lib/helpers/server_act_funcs/decrypt"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function PUT(req: NextRequest) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })
    if (user.role === "student") return NextResponse.json({ message: "You do not have persmission to make delete action" }, { status: 401 })

    try {
        await delay(2500)

        const data = await req.json()

        // store categories in this format JSON.stringify(data.categories))

        console.log(data)

        return NextResponse.json({ message: "Cover picture changed successfullly!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal server error. Unable to change room settings." }, { status: 500 })
    }
}