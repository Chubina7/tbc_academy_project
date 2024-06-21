"use server"

import { SignJWT } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcrypt"
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { AUTH_COOKIE_KEY } from "../../variables";
import { decrypt } from "./decrypt";

const key = new TextEncoder().encode(process.env.JWT_SECRET_SIGN_KEY)
const algorithm = process.env.JWT_ALGORITHM

export const USER = async () => {
    const token = cookies().get(AUTH_COOKIE_KEY)?.value || ""

    return (await decrypt(token)) as IUser
}

export const setSessionCookie = async (user: any) => {
    const value = await encrypt(user)
    const options: Partial<ResponseCookie> = {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        path: "/",
    }
    cookies().set(AUTH_COOKIE_KEY, value, options);
};

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: `${algorithm}` })
        .setIssuedAt()
        .setExpirationTime(new Date(Date.now() + (6 * 30 * 24 * 60 * 60 * 1000)))
        .sign(key)
}

export async function hasAccess(plainPassword: any, hashedPassword: any): Promise<any> {
    try {
        const result = await bcrypt.compare(plainPassword, hashedPassword);
        return result;
    } catch (err) {
        console.error('Error comparing passwords:', err);
        throw err;
    }
};

export async function hashPassword(password: string) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (err) {
        console.error('Error hashing password:', err);
        throw err;
    }
};
