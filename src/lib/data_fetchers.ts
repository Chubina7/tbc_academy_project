import { detectEnviro } from "./helpers/regular_funcs/general";

export async function getEnrolledRoomsList() {
    const domain = detectEnviro();

    try {
        const res = await fetch(`${domain}/api/dashboard/rooms`);
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