import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization")
    if (!token) return NextResponse.json({ message: "Unauthorized. No token provided" }, { status: 401 })
    const user = await decrypt(token)
    if (!user) return NextResponse.json({ message: "Unauthorized. Token is not valid" }, { status: 401 })

    try {
        const data: IRoomsApiReturn = {
            rooms: [
                {
                    room_id: "R2345",
                    room_name: "mrktrs",
                    category: ["marketing", "math"],
                    description:
                        "This course is about marketers. Who plays hard and pays hard. Who is good and what is it.",
                    enrolled_number: 78,
                    teacher: "Emzar Emzarashvili",
                    created_at: "09/04/1997",
                    image: null,
                },
                // ....
            ],
            categories: ["marketing", "math"],
        }
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error returning data from API", error }, { status: 500 })
    }
}