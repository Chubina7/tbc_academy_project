"use server"

import { jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET_SIGN_KEY)
const algorithm = process.env.JWT_ALGORITHM

export async function decrypt(token: string) {
    try {
        const { payload } = await jwtVerify(token, key, { algorithms: [`${algorithm}`] });
        return payload as IUser
    } catch (error) {
        return false
    }
}