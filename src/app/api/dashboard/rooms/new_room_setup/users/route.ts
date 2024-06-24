import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "../../../../../../lib/variables";
import { decrypt } from "../../../../../../lib/helpers/server_act_funcs/decrypt";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        await delay(2500)

        const userLIst: Array<IRoomUserListItem> = [
            {
                user_id: "U0001",
                profile_picture: null,
                username: "luka",
                surname: null,
                role: "student" as RoleType,
                joined_at: "12/12/1212",
            },
            {
                user_id: "U0002",
                profile_picture: null,
                username: "mariami",
                surname: null,
                role: "student" as RoleType,
                joined_at: "12/12/1212",
            },
            {
                user_id: "U0003",
                profile_picture: null,
                username: "dali",
                surname: null,
                role: "student" as RoleType,
                joined_at: "12/12/1212",
            },
            {
                user_id: "U0004",
                profile_picture: null,
                username: "bote",
                surname: null,
                role: "student" as RoleType,
                joined_at: "12/12/1212",
            },
        ];

        return NextResponse.json(userLIst, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error connecting to the API" }, { status: 500 })
    }
}