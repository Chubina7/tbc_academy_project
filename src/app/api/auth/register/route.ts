import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { setSession } from '../../../../lib/actions';
import { psqlInsertUserCredentials } from '../../../../lib/sqlQueries';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
    const { username, email, password, role } = await req.json()

    // Validation
    if (!username || !email || !password || !role) return NextResponse.json({ message: "Unable to pass empty values" }, { status: 400 });

    // Signing up
    try {
        const user = await psqlInsertUserCredentials({ username, email, password, role })
        if (user) {
            setSession(user)
            revalidateTag("user_list")
        } else {
            throw new Error()
        }
    } catch (error) {
        return NextResponse.json({ message: "Error occured! Try again later.", dbError: error }, { status: 409 });
    }

    return NextResponse.json({ message: "Successfully registered!" }, { status: 200 });
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