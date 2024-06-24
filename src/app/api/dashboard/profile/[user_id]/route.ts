import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../../lib/helpers/server_act_funcs/decrypt";

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const userProfileInfo: IUserPublicInfo = {
            birth_date: null,
            email: "test@email.com",
            profile_image: null,
            role: "student",
            surname: "gvarashvili",
            username: "saxel",
        }

        return NextResponse.json(userProfileInfo, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error while connecting API", error }, { status: 500 })
    }
}