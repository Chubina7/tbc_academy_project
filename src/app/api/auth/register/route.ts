import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '../../../../lib/helpers';
import { cookies } from 'next/headers';
import { AUTH_COOKIE_KEY } from '../../../../lib/variables';

export async function POST(req: NextRequest) {
    // Reading incoming data
    const data = await req.json()
    const username = data.username;
    const email = data.email;
    const password = data.password;

    // Validation
    if (!username || !email || !password) return NextResponse.json({ message: "One of the required data is empty" }, { status: 500 });

    // Trying to register the user
    try {
        // Store user data in database
        registerUser({ username, email, password })
        // Set up session *logic must be changed*
        cookies().set(AUTH_COOKIE_KEY, "test_session", { httpOnly: true, path: "/", sameSite: false })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    // Return every user
    const users = await sql`SELECT * FROM user_publics;`;
    return NextResponse.json({ users }, { status: 200 });
}

// FOR DEVELOPMENT PURPOSE
export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id")
    // in the futue, if user has acces to delete its own profile, it will be checked using cookies. when authenticated user_id will be stored. and if DELETE button clicked, the handler catch the id from cookies. so user will not be able to reach other profile idies

    try {
        await sql`DELETE FROM user_publics WHERE user_id = ${user_id}`;
        await sql`DELETE FROM user_credentials WHERE user_id = ${user_id}`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const users = await sql`SELECT * FROM user_credentials;`;
    return NextResponse.json({ users }, { status: 200 });
}