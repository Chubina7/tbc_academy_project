import { cookies } from "next/headers";
import { detectEnviro } from "./helpers/regular_funcs/general";
import { AUTH_COOKIE_KEY } from "./variables";

const domain = detectEnviro();
// const domain = "http://localhost:3000"

// Rooms
export async function getEnrolledRoomsList() {
    const token = cookies().get(AUTH_COOKIE_KEY);

    try {
        const res = await fetch(`${domain}/api/dashboard/rooms`, {
            cache: "no-cache",
            headers: {
                Authorization: token?.value || "",
            }
        });
        if (!res.ok) {
            throw new Error("Error fetching data");
        }
        const result: IRoomsApiReturn = await res.json();
        return result;
    } catch (error) {
        console.error("Failed to fetch rooms data:", error);
        return null;
    }
}
export async function getSingleRoomData(room_id: string) {
    const token = cookies().get(AUTH_COOKIE_KEY);

    try {
        const res = await fetch(`${domain}/api/dashboard/rooms/${room_id}`, {
            cache: "no-cache",
            headers: {
                Authorization: token?.value || "",
            },
        });

        if (!res.ok) {
            const errorResponse = await res.json();
            throw new Error(errorResponse.message || "Error while fetching data");
        }

        const result: ISingleRoomApiReturn = await res.json();
        return result;
    } catch (error) {
        console.error({ message: "Error happened", error });
        return null;
    }
}

// Announcements
export async function getAnnouncementList() {
    const domain = detectEnviro();
    const token = cookies().get(AUTH_COOKIE_KEY)?.value;

    try {
        const res = await fetch(`${domain}/api/dashboard/announcements`, {
            cache: "no-cache",
            headers: {
                Authorization: token || "",
            },
        });

        if (!res.ok) throw new Error();

        const result: IAnnouncemenetApiReturn = await res.json();
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}