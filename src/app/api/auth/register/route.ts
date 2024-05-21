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
