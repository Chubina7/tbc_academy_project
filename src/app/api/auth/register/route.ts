import { NextRequest, NextResponse } from 'next/server';
import { psqlInsertUserCredentials, psqlIsEmailInUse } from '../../../../lib/sql/sqlQueries';
import { hashPassword, setSessionCookie } from '../../../../lib/helpers/server_act_funcs/authorization_acts';

export async function POST(req: NextRequest) {
    const { username, email, password, role, birth_date, surname } = await req.json()

    // Validation
    if (!username || !email || !password || !role) return NextResponse.json({ message: "Required values are empty! Try to fill all of them." }, { status: 400 });

    // Signing up
    try {
        const isInUse = await psqlIsEmailInUse(email)
        if (isInUse) return NextResponse.json({ message: "Email is already in use. Try different one" }, { status: 409 });

        const hashedPassword = await hashPassword(password)
        const user = { birth_date, email, password: hashedPassword, role, surname, username }

        await psqlInsertUserCredentials(user)
        await setSessionCookie(user)

        return NextResponse.json({ message: "Successfully registered!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong. Try again later.", error: error }, { status: 409 });
    }
}
