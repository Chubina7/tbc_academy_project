import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../../../../lib/helpers/server_act_funcs/decrypt";

export async function GET(req: NextRequest) {
    const token = req.headers.get("Authorization") || ""
    const user = await decrypt(token)

    if (!user) return NextResponse.json({ message: "Unauthorized! You do not have persmission to get data." }, { status: 401 })

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
}