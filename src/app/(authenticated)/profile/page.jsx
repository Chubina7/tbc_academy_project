import React from "react";
import UserInfo from "../../../components/profileComp/userInfo/UserInfo";
import LoginInfo from "../../../components/profileComp/loginInfo/LoginInfo";
import { getUserInfo, getUserLoginInfo } from "../../../lib/actions";

export default async function Profile() {
  const userInfo = await getUserInfo();
  const loginInfo = await getUserLoginInfo();

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-9">
      <UserInfo userInfoObj={userInfo} />
      <LoginInfo loginInfoObj={loginInfo} />
    </div>
  );
}
