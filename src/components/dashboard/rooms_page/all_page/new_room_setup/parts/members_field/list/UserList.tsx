"use client";

import { useEffect, useState } from "react";
import Input from "../Input";
import List from "./List";
import { detectEnviro } from "../../../../../../../../lib/helpers/regular_funcs/general";

const domain = detectEnviro();

export async function getAllUserList() {
  try {
    const res = await fetch(
      `${domain}/api/dashboard/rooms/new_room_setup/users`,
      {
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      const result = await res.json();
      throw new Error(result.message);
    }
    const result: Array<IRoomUserListItem> = await res.json();
    return result;
  } catch (error: any) {
    return null;
  }
}

export default function UserList() {
  const state = useState("");
  const [data, setData] = useState<Array<IRoomUserListItem>>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const result = await getAllUserList();
        if (result) {
          setData(result);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <Input state={state} />
      <div className="w-full h-72 overflow-y-scroll scroll-hidden">
        {isLoading && !error && (
          <p className="w-full text-center">Getting user list...</p>
        )}
        {!isLoading && error && (
          <p className="w-full text-center">Error while fetching data</p>
        )}
        {!isLoading && !error && data && (
          <List keyword={state[0]} data={data} />
        )}
      </div>
    </div>
  );
}
