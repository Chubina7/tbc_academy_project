import Link from "next/link";
import { USER } from "../../../../../../lib/helpers/server_act_funcs/authorization_acts";
import DeleteBtn from "./delete/DeleteBtn";
import { getTranslations } from "next-intl/server";

interface Props {
  author: {
    user_id: string;
    username: string;
    surname: string | null;
    role: RoleType;
  };
  idToDelte: string;
}

export default async function AuthorNames({ author, idToDelte }: Props) {
  const { user_id } = await USER();
  const t = await getTranslations(
    "dashboard.pages.announcements.singlePage.role"
  );

  return (
    <div className="w-full flex flex-col">
      <h1 className="w-full font-semibold text-lg sm:text-xl line-clamp-2 flex justify-between items-center gap-1">
        <Link
          href={`/dashboard/profile/${author.user_id}`}
          className="hover:underline"
        >
          {author.username} {author.surname}
        </Link>
        {user_id === author.user_id && <DeleteBtn idToDelete={idToDelte} />}
      </h1>
      <p className="text-sm opacity-60">{t(`${author.role}`)}</p>
    </div>
  );
}
