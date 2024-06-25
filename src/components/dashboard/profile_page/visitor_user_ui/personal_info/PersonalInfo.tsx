import ProfPic from "./ProfPic";
import Info from "./Info";
import { useTranslations } from "next-intl";

interface Props {
  data: {
    profile_picture: string | null;
    birth_date: string | null;
    email: string;
    role: RoleType;
    surname: string | null;
    username: string;
  };
}

export default function PersonalInfo({ data }: Props) {
  const t = useTranslations("dashboard.pages.profile.visitor");
  return (
    <div className="w-full max-w-4xl bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 pb-10 transition-all duration-300 | flex flex-col justify-start items-center gap-5">
      <h1 className="w-full text-left text-xl font-bold pb-10">{t("title")}</h1>
      <ProfPic src={data.profile_picture} />
      <Info
        birth_date={data.birth_date}
        email={data.email}
        role={data.role}
        surname={data.surname}
        username={data.username}
      />
    </div>
  );
}
