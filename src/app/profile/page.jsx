import React from "react";
import UserInfo from "../../components/profileComp/userInfo/UserInfo";
import LoginInfo from "../../components/profileComp/loginInfo/LoginInfo";

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-9">
      <UserInfo />
      <LoginInfo />
    </div>
  );
};

export default Profile;
