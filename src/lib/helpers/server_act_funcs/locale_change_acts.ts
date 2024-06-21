"use server"

import { cookies } from "next/headers"

export const setLngToGe = async () => {
    const excitingValue = cookies().get("NEXT_LOCALE")?.value
    if (excitingValue !== "ka") cookies().set("NEXT_LOCALE", "ka")
}

export const setLngToEn = async () => {
    const excitingValue = cookies().get("NEXT_LOCALE")?.value
    if (excitingValue !== "en") cookies().set("NEXT_LOCALE", "en")
}