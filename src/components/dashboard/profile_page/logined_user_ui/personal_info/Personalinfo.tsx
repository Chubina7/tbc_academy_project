import PersonalInfoChangingProvider from "../../../../../context/providers/PersonalInfoChangingProvider";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization_acts";
import Info from "./info/Info";
import ProfilePicture from "./profile_pic/ProfilePicture";
import Actions from "./btns/Actions";
import { getTranslations } from "next-intl/server";

export default async function Personalinfo() {
  const { username, profile_picture, surname, birth_date } = await USER();
  const t = await getTranslations("dashboard.pages.profile.logined.pers");

  return (
    <PersonalInfoChangingProvider
      prevValues={{
        username,
        profile: {
          picture: profile_picture,
          file: null,
        },
        surname,
        birth_date,
      }}
    >
      <div className="w-full min-h-[580px] bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
        <div className="w-full flex flex-col sm:flex-row items-end sm:justify-between sm:items-center gap-5">
          <h1 className="w-full text-xl sm:text-2xl font-semibold">{t("title")}</h1>
          <Actions />
        </div>
        <div className="w-full flex flex-grow flex-col md:flex-row justify-center items-center gap-5">
          <ProfilePicture />
          <Info />
        </div>
      </div>
    </PersonalInfoChangingProvider>
  );
}
