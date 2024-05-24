import { NextRequest, NextResponse } from 'next/server';
import { setSession } from '../../../../lib/actions';
import { psqlInsertUserCredentials, psqlIsEmailInUse } from '../../../../lib/sqlQueries';

export async function POST(req: NextRequest) {
    const { username, email, password, role, birth_date, surname } = await req.json()

    // Validation
    if (!username || !email || !password || !role) return NextResponse.json({ message: "Required values are empty! Try to fill all of them." }, { status: 400 });

    // Signing up
    try {
        const isInUse = await psqlIsEmailInUse(email)

        if (!isInUse) {
            const user = await psqlInsertUserCredentials({ birth_date, email, password, role, surname, username })
            setSession(user)
            return NextResponse.json({ message: "Successfully registered!" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Email is already in use. Try different one" }, { status: 409 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Unexpected error occured! Check console for details.", error: error }, { status: 409 });
    }
}
