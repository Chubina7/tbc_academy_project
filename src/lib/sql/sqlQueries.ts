import { sql } from "@vercel/postgres";
import { generateUniqueId } from "../helpers/regular_funcs/general";

// Auth
export async function psqlCheckUserInDb(email: string) {
  const emailIndb = await sql`SELECT password FROM users WHERE email = ${email}`
  if (emailIndb.rows[0]) {
    return emailIndb.rows[0].password
  } else {
    return undefined
  }
}
export async function psqlInsertUserCredentials({ username, email, password, role, birth_date, surname }: IUserRegister) {
  const user_id = generateUniqueId("U");
  await sql`INSERT INTO users (user_id, username, surname, email, password, role, birth_date)
      VALUES (${user_id}, ${username}, ${surname.trim() === "" ? null : surname}, ${email}, ${password}, ${role}, ${birth_date.trim() === "" ? null : birth_date})`
  return user_id
}
export async function psqlIsEmailInUse(email: string) {
  const result = await sql`SELECT COUNT(*) FROM users WHERE email = ${email}`
  return Number(result.rows[0].count) === 0 ? false : true
}

// Admin actions
export async function psqlAddUser({ username, surname, email, password, role, age }: IUser) {
  const user_id = generateUniqueId("U");
  await sql`INSERT INTO users (user_id, username, surname, email, password, role, age) VALUES (${user_id}, ${username}, ${surname}, ${email}, ${password}, ${role}, ${age});`;
}
export async function psqlDeleteUser(user_id: string) {
  await sql`DELETE FROM users WHERE user_id = ${user_id}`;
}
export async function psqlEditUser({ username, surname, email, password, role, age }: IUser, user_id: string) {
  await sql`UPDATE users SET
            username = ${username}, surname = ${surname},
            email = ${email}, password = ${password},
            role = ${role}, age = ${age}
            WHERE user_id = ${user_id}`;
}

// Bookmarking
export async function psqAddToBookmarks(user_id: string, resource_id: string, count: number,) {
  await sql`INSERT INTO bookmarks (user_id, count, resource_id) VALUES (${user_id}, ${count}, ${resource_id});`;
}
export async function psqIncrementBookmarkCount(user_id: string, resource_id: string) {
  await sql`UPDATE bookmarks SET count = count + 1 WHERE resource_id = ${resource_id} AND user_id = ${user_id}`;
}
export async function psqDecrementBookmarkCount(user_id: string, resource_id: string,) {
  const { rows } = await sql`SELECT count FROM bookmarks WHERE resource_id = ${resource_id} AND user_id = ${user_id}`
  const count = rows[0].count;

  if (count === 1) {
    await sql`DELETE FROM bookmarks WHERE resource_id = ${resource_id} AND user_id = ${user_id}`;
  } else if (count > 1) {
    await sql`UPDATE bookmarks SET count = count - 1 WHERE resource_id = ${resource_id} AND user_id = ${user_id}`;
  }
}
export async function psqDeleteBookmarks(user_id: string) {
  await sql`DELETE FROM bookmarks WHERE user_id = ${user_id}`;
}
export async function psqlGetBookmarks(user_id: string) {
  const { rows } = await sql`
      SELECT resources.resource_id, resources.title, resources.description, bookmarks.count
      FROM bookmarks
      JOIN users ON bookmarks.user_id = users.user_id
      JOIN resources ON bookmarks.resource_id = resources.resource_id
      WHERE bookmarks.user_id = ${user_id}
      ORDER BY bookmarks.bookmark_id
    `;
  return rows;
}
export async function psqlGetBookmarkedItemCount(user_id: string, resoucre_id: string) {
  const { rows } = await sql`SELECT count FROM bookmarks WHERE resource_id = ${resoucre_id} AND user_id = ${user_id}`
  return rows[0]?.count
}
export async function psqlGetBookmarkListLength(user_id: string) {
  const { rows } = await sql`SELECT SUM(count) AS total_count FROM bookmarks WHERE user_id = ${user_id}`;

  return rows[0].total_count
}

// Data
export async function psqlGetAllUsers() {
  const { rows } = await sql`SELECT user_id, username, surname, email, role, age
                            FROM users
                            ORDER BY users.user_id`;
  return rows;
}
export async function psqlGetUserByEmail(email: string) {
  const { rows } = await sql`SELECT user_id, username, surname, email, role, age FROM users WHERE email = ${email}`;
  return rows[0];
}
export async function psqlGetUserById(user_id: string) {
  const { rows } = await sql`SELECT user_id, username, surname, email, role, age FROM users WHERE user_id = ${user_id}`;
  return rows[0];
}
export async function psqlGetResources() {
  const { rows } = await sql`SELECT * FROM resources ORDER BY resources.resource_id`;
  return rows;
}