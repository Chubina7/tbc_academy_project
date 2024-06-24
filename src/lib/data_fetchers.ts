import { cookies } from "next/headers";
import { detectEnviro } from "./helpers/regular_funcs/general";
import { AUTH_COOKIE_KEY } from "./variables";

const domain = detectEnviro();

// Rooms
export async function getEnrolledRoomsList() {
    const token = cookies().get(AUTH_COOKIE_KEY);

    try {
        const res = await fetch(`${domain}/api/dashboard/rooms`, {
            cache: "force-cache",
            headers: {
                Authorization: token?.value || "",
            },
            next: { tags: ["all_rooms"] }
        });
        if (!res.ok) {
            const errorResponse = await res.json();
            throw new Error(errorResponse.message || "Error while fetching data");
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
        console.error("Failed to fetch rooms data:", error);
        return null;
    }
}

// Announcements
export async function getAnnouncementList() {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value;

    try {
        const res = await fetch(`${domain}/api/dashboard/announcements`, {
            cache: "force-cache",
            headers: {
                Authorization: token || "",
            },
            next: {
                tags: ["all_announcements"]
            }
        });

        if (!res.ok) {
            const errorResponse = await res.json();
            throw new Error(errorResponse.message || "Error while fetching data");
        };

        const result: IAnnouncemenetApiReturn = await res.json();
        return result;
    } catch (error) {
        console.error("Failed to fetch rooms data:", error);
        return null;
    }
}
export async function getSingleAnnouncementData(announcement_id: string) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value;

    try {
        const res = await fetch(
            `${domain}/api/dashboard/announcements/${announcement_id}`,
            {
                cache: "force-cache",
                headers: {
                    Authorization: token || "",
                },
            }
        );

        if (!res.ok) {
            const errorResponse = await res.json();
            throw new Error(errorResponse.message || "Error while fetching data");
        }

        const result: ISingleAnnouncementData = await res.json();
        return result;
    } catch (error) {
        console.error("Failed to fetch rooms data:", error);
        return null;
    }
}
export async function getAnnouncementComments(announcement_id: string) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value;

    try {
        const res = await fetch(
            `${domain}/api/dashboard/announcements/${announcement_id}/comments`,
            {
                cache: "force-cache",
                headers: {
                    Authorization: token || "",
                },
                next: {
                    tags: ["announcement_all_comments"]
                }
            }
        );

        if (!res.ok) {
            const errorResponse = await res.json();
            throw new Error(errorResponse.message || "Error while fetching data");
        }

        const result: Array<IAnnouncementComment> = await res.json();
        return result;
    } catch (error) {
        console.error("Failed to fetch rooms data:", error);
        return null;
    }
}

// User
export async function getUserPublicProfileInfo(user_id: string) {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value;

    try {
        const res = await fetch(`${domain}/api/dashboard/profile/${user_id}`, {
            cache: "no-cache",
            headers: {
                Authorization: token || "",
            },
        });

        if (!res.ok) {
            const errorResponse = await res.json();
            throw new Error(errorResponse.message || "Error while fetching data");
        }

        const result: IUserPublicInfo = await res.json();
        return result;
    } catch (error) {
        console.error("Failed to fetch user data:", error);
        return null;
    }
}

// Bookshelf
export async function getBookshelfItems() {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value;
    try {
        const res = await fetch(`${domain}/api/dashboard/bookshelf`, {
            cache: "force-cache",
            headers: {
                Authorization: token || "",
            },
            next: {
                tags: ["bookshelf"]
            }
        });

        if (!res.ok) {
            const result = await res.json();
            throw new Error(result.messae);
        }

        const result: Array<IBook> = await res.json();
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export async function getSingleBookData(book_id: string) {
    const token = cookies().get(AUTH_COOKIE_KEY);

    try {
        const res = await fetch(`${domain}/api/dashboard/bookshelf/${book_id}`, {
            cache: "no-cache",
            headers: {
                Authorization: token?.value || "",
            },
        });

        if (!res.ok) {
            const result = await res.json();
            throw new Error(result.message || "Error while fetching data");
        }

        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Failed to fetch single book data:", error);
        return null;
    }
}