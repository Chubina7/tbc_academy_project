import { USER } from "../server_act_funcs/authorization";
import { detectEnviro } from "./general";

// Courses
export async function getCoursesList() {
    const { user_id } = await USER()

    try {
        const res = await fetch(`${detectEnviro()}/api/dashboard/courses`, {
            cache: "no-cache",
            headers: {
                Cookie: `user_id=${user_id}`,
            },
        });

        const result = await res.json();

        if (res.ok) {
            return result;
        } else {
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Failed to fetch data" };
    }
}

export async function getSingleCourse(course_id: string) {
    try {
        const res = await fetch(
            `${detectEnviro()}/api/dashboard/courses/${course_id}`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            console.error(
                `Failed to fetch course: ${res.status} - ${res.statusText}`
            );
            return undefined;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching course:", error);
        return undefined;
    }
}