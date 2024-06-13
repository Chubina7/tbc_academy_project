import LoginInfo from "./credentials/LoginInfo";
import PersonalInfo from "./personal/PersonalInfo";
import ProfPic from "./profile_pic/ProfPic";

export default function LoginedUserUi() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-3 md:px-7 py-3 gap-5">
      <ProfPic />
      <PersonalInfo />
      <LoginInfo />
    </div>
  );
}
