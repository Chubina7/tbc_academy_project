"use client";

import User from "./User";

interface Props {
  keyword: string;
  data: Array<IRoomUserList>;
}

export default function List({ keyword, data }: Props) {
  const list = data.filter((item) => item.username.includes(keyword));

  return (
    <>
      {list.length > 0 ? (
        list.map((item) => <User key={item.user_id} data={item} />)
      ) : (
        <p className="w-full text-center">No users found</p>
      )}
    </>
  );
}
