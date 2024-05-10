"use client";

import React, { useEffect, useState } from "react";
import { detectEnviro } from "../../../lib/helpers";

const domain = detectEnviro();

export default function Form({ user_id }: { user_id: string }) {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${domain}/api/users/singleUser?user_id=${user_id}`
      );
      const data = await res.json();

      setUsername(data.user.username);
      setAge(data.user.age || "unknow");
      setEmail(data.user.email);
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
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-start justify-center">
          <label htmlFor="age">Enter new age</label>
          <input
            className="border border-black px-4 py-1 rounded-xl"
            name="age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder={age ? "" : "age..."}
          />
        </div>
      </div>
    </div>
  );
}
