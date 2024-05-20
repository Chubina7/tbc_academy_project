"use client";

import React, { useEffect, useState } from "react";
import { detectEnviro } from "../../../lib/helpers";

const domain = detectEnviro();

export default function Form({ user_id }: { user_id: string }) {
  const [username, setUsername] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [age, setAge] = useState<number>();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${domain}/api/users/singleUser?user_id=${user_id}`
      );
      const data = await res.json();

      setUsername(data.username);
      setSurname(data.surname);
      setEmail(data.email);
      setPassword(data.password);
      setRole(data.role);
      setAge(data.age);
    };
    getData();
  }, [user_id]);

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="username">Enter new username</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={username ? "" : "example"}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="surname">Enter new Surname</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="surname"
            type="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder={surname ? "" : "example"}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="email">Enter new email</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={email ? "" : "example@example.com"}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="password">Enter new Password</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={password ? "" : "example123"}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="age">Enter new age</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="age"
            type="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder={age ? "" : "18"}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="role">Enter new Role</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
      </div>
    </div>
  );
}
