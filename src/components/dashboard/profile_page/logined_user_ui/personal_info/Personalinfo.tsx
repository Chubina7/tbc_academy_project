import PersonalInfoChangingProvider from "../../../../../context/providers/PersonalInfoChangingProvider";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization";
import Info from "./info/Info";
import ProfilePicture from "./profile_pic/ProfilePicture";
import SaveBtn from "./SaveBtn";

export default async function Personalinfo() {
  const { username, profile_picture, surname, birth_date } = await USER();

  return (
    <PersonalInfoChangingProvider>
      <div className="w-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
        <div className="w-full flex justify-between items-center gap-5">
          <h1 className="text-2xl font-semibold">Personal Information</h1>
          <SaveBtn
            prevValues={{ username, profile_picture, surname, birth_date }}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
          <ProfilePicture data={profile_picture} />
          <Info data={{ birth_date, surname, username }} />
        </div>
      </div>
    </PersonalInfoChangingProvider>
  );
}
