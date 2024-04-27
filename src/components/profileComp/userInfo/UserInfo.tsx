"use client";

import React, { useState } from "react";
import EachField from "./EachField";

interface Props {
  userInfoObj: {
    firstName: string | undefined;
    lastName: string | undefined;
    image: string | undefined;
    gender: string | undefined;
  };
}

export default function UserInfo({ userInfoObj }: Props) {
  const [userInfo, setUserInfo] = useState(userInfoObj);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">{" dict.profile.userInfo.title"}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.entries(userInfo).map((item, idx) => (
          <EachField
            key={idx}
            title={item[0]}
            data={item[1]}
            setUserInfo={setUserInfo}
            dict={"dict.profile.userInfo.eachField"}
          />
        ))}
      </div>
    </div>
  );
}
