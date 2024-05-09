import { sql } from "@vercel/postgres";
import { generateUniqueId } from "./helpers";

export async function psqlCheckUserCredentials({ username, password }: IUserLogin) {
    const { rows } = await sql`SELECT * FROM user_credentials WHERE username = ${username} AND password = ${password}`
    return rows
}

export async function psqlInsertUserCredentials({ username, email, password }: IUserRegister) {
    const user_id = generateUniqueId()
    await sql`INSERT INTO user_credentials (user_id, username, email, password) VALUES (${user_id}, ${username}, ${email}, ${password});`;
    await sql`INSERT INTO user_publics (user_id, username, email)
              SELECT user_id, username, email FROM user_credentials
              ON CONFLICT (user_id) DO UPDATE
              SET username = EXCLUDED.username, email = EXCLUDED.email, user_id = EXCLUDED.user_id;`
}

export async function psqlGetAllUsers() {
    const { rows } = await sql`SELECT * FROM user_publics`
    return rows
}

export async function psqlGetUser(username: string) {
    const { rows } = await sql`SELECT * FROM user_publics WHERE username = ${username}`
    return rows[0]
}

export async function psqlAddUser(id: string) {
    // Add user queries logic
    console.log(id)
}

export async function psqlDeleteUser(id: string) {
    await sql`DELETE FROM user_publics WHERE user_id = ${id}`;
    await sql`DELETE FROM user_credentials WHERE user_id = ${id}`;
}

export async function psqlEditUser(id: string) {
    // Editing user queres logic
    console.log(id)
}