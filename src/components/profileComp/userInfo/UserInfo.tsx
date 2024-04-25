"use client";

import React, { useState } from "react";
import EachField from "./EachField";

export default function UserInfo({ userInfoObj, dict }) {
  const [userInfo, setUserInfo] = useState(userInfoObj);
  const { title, eachField } = dict.profile.userInfo;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.entries(userInfo).map((item, idx) => (
          <EachField
            key={idx}
            title={item[0]}
            data={item[1]}
            setUserInfo={setUserInfo}
            dict={eachField}
          />
        ))}
      </div>
    </div>
  );
}
