import React from "react";
import UserInfo from "../../../../components/profileComp/userInfo/UserInfo";
import LoginInfo from "../../../../components/profileComp/loginInfo/LoginInfo";
import { getUserInfo, getUserLoginInfo } from "../../../../lib/actions";
import { getDictionary } from "../../../../lib/dictionary";

export default async function Profile({ params: { locale } }: PageProps) {
  const userInfo = await getUserInfo();
  const loginInfo = await getUserLoginInfo();
  const dictionary = await getDictionary(locale);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-9">
      <UserInfo userInfoObj={userInfo} dict={dictionary} />
      <LoginInfo loginInfoObj={loginInfo} dict={dictionary} />
    </div>
  );
}
