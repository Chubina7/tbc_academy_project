import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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