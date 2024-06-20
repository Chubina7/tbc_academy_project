"use server"

import { cookies } from "next/headers";

export const storeThemeInCookies = async (pref: string) => {
    if (pref === "os") {
        cookies().delete("theme");
    } else {
        cookies().set("theme", pref, { secure: true, sameSite: "none", path: "/", httpOnly: true });
    }
};