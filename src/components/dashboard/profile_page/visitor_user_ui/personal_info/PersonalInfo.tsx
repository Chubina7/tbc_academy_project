import ProfPic from "./ProfPic";
import Info from "./Info";

interface Props {
  data: {
    profile_image: string | null;
    birth_date: string | null;
    email: string;
    role: RoleType;
    surname: string | null;
    username: string;
  };
}

export default function PersonalInfo({ data }: Props) {
  return (
    <div className="w-full max-w-4xl bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 py-10 transition-all duration-300 | flex flex-col justify-start items-center gap-5">
      <ProfPic src={data.profile_image} />
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
