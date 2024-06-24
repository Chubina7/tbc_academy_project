import PersonalInfo from "./personal_info/PersonalInfo";
import { getUserPublicProfileInfo } from "../../../../lib/data_fetchers";
import { notFound } from "next/navigation";

interface Props {
  user_id: string;
}

export default async function VisitorProfileUi({ user_id }: Props) {
  const data = await getUserPublicProfileInfo(user_id);

  if (!data) return notFound();

  const { birth_date, email, profile_picture, role, surname, username } = data;

  return (
    <div className="w-full h-full flex flex-col justify-start items-center px-3 md:px-7 py-3 gap-5">
      <PersonalInfo
        data={{ birth_date, email, profile_picture, role, surname, username }}
      />
    </div>
  );
}
