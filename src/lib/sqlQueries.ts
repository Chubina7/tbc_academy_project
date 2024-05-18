import { sql } from "@vercel/postgres";
import { generateUniqueId } from "./helpers";

export async function psqlCheckUserCredentials({
  username,
  password,
}: IUserLogin) {
  const { rows } =
    await sql`SELECT * FROM user_credentials WHERE username = ${username} AND password = ${password}`;
  return rows;
}

export async function psqlInsertUserCredentials({
  username,
  email,
  password,
}: IUserRegister) {
  const user_id = generateUniqueId();
  await sql`INSERT INTO user_credentials (user_id, username, email, password) VALUES (${user_id}, ${username}, ${email}, ${password});`;
  await sql`INSERT INTO user_publics (user_id, username, email)
              SELECT user_id, username, email FROM user_credentials
              ON CONFLICT (user_id) DO UPDATE
              SET username = EXCLUDED.username, email = EXCLUDED.email, user_id = EXCLUDED.user_id;`;
}

export async function psqlGetAllUsers() {
  const { rows } = await sql`SELECT * FROM user_publics`;
  return rows;
}

export async function psqlGetUser(username: string) {
  const { rows } =
    await sql`SELECT * FROM user_publics WHERE username = ${username}`;
  return rows[0];
}

export async function psqlGetUserById(userId: string) {
  const { rows } =
    await sql`SELECT * FROM user_publics WHERE user_id = ${userId}`;
  return rows[0];
}

export async function psqlAddUser({ username, email, password, age }: any) {
  const user_id = generateUniqueId();
  await sql`INSERT INTO user_credentials (user_id, username, email, password) VALUES (${user_id}, ${username}, ${email}, ${password});`;
  await sql`INSERT INTO user_publics (user_id, username, email, age) VALUES (${user_id}, ${username}, ${email}, ${age});`;
}

export async function psqlDeleteUser(id: string) {
  await sql`DELETE FROM user_publics WHERE user_id = ${id}`;
  await sql`DELETE FROM user_credentials WHERE user_id = ${id}`;
}

export async function psqlEditUser({ username, email, age, user_id }: any) {
  await sql`UPDATE user_publics SET username = ${username}, email = ${email}, age = ${age} WHERE user_id = ${user_id}`;
  await sql`UPDATE user_credentials SET username = ${username}, email = ${email} WHERE user_id = ${user_id}`;
}

export async function psqAddToBookmarks({
  user_id,
  resource_id,
  count,
}: {
  user_id: string;
  resource_id: string;
  count: number;
}) {
  await sql`INSERT INTO bookmarks (user_id, count, resource_id) VALUES  (${user_id}, ${count}, ${resource_id});`;
}

export async function psqIncrementBookmarkCount({
  resource_id,
}: {
  resource_id: string;
}): Promise<void> {
  await sql`
      UPDATE bookmarks
      SET count = count + 1
      WHERE resource_id = ${resource_id};
    `;
}

export async function psqDecrementBookmarkCount({
  resource_id,
}: {
  resource_id: string;
}): Promise<void> {
  const { rows } = await sql`
      SELECT count FROM bookmarks
      WHERE resource_id = ${resource_id};
    `;
  const count = rows[0]?.count;

  if (count === 1) {
    await sql`
      DELETE FROM bookmarks
      WHERE resource_id = ${resource_id};
    `;
  } else if (count > 1) {
    await sql`
      UPDATE bookmarks
      SET count = count - 1
      WHERE resource_id = ${resource_id};
    `;
  }
}

export async function psqDeleteBookmarks({
  user_id,
}: {
  user_id: string;
}): Promise<void> {
  await sql`
      DELETE FROM bookmarks
      WHERE user_id = ${user_id};
    `;
}

export async function psqlGetResources() {
  const { rows } = await sql`SELECT * FROM resources`;

  return rows;
}

//Get all bookmarks
export async function psqlGetBookmarks(userId: string, resourceId: string) {
  const { rows } = await sql`
      SELECT resources.title, resources.description, bookmarks.count
      FROM bookmarks
      JOIN users ON bookmarks.user_id = users.user_id
      JOIN resources ON bookmarks.resource_id = resources.resource_id
      WHERE bookmarks.user_id = ${userId}
      AND bookmarks.resource_id = ${resourceId}
    `;
  return rows;
}
