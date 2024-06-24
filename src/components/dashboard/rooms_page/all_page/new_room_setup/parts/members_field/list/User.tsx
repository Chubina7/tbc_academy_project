import Image from "next/image";
import fallback_img from "/public/anonym_user.webp";
import EnrollBtn from "./EnrollBtn";

interface Props {
  data: {
    user_id: string;
    profile_picture: string;
    username: string;
    surname: string | null;
    role: RoleType;
  };
}

export default function User({ data }: Props) {
  const { user_id, profile_picture, role, surname, username } = data;

  return (
    <div className="hover:bg-[#8BA8FF] dark:hover:bg-[#5C5470] | w-full px-2 sm:px-4 py-3 flex gap-3 justify-center items-center rounded-lg">
      <Image
        src={profile_picture !== "" ? profile_picture : fallback_img}
        alt={`${username}'s profile pict`}
        width={128}
        height={128}
        className="w-14 h-14 flex rounded-full object-cover aspect-square"
      />
      <div className="w-full flex flex-col">
        <h1 className="font-semibold text-lg sm:text-xl">
          {username} {surname}
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center text-sm opacity-60">
          <p>{role}</p>
        </div>
      </div>
      <EnrollBtn user_id={user_id} />
    </div>
  );
}
