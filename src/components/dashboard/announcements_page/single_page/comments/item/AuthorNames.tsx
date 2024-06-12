import Link from "next/link";

interface Props {
  author: {
    user_id: string;
    username: string;
    surname: string | null;
    role: RoleType;
  };
}

export default function AuthorNames({ author }: Props) {
  return (
    <div className="flex flex-col">
      <Link href={`/dashboard/users/${author.user_id}`} className="hover:underline">
        <h1 className="font-semibold text-lg sm:text-xl line-clamp-2">
          {author.username} {author.surname}
        </h1>
      </Link>
      <p className="text-sm opacity-60">
        {author.role.charAt(0).toLocaleUpperCase() + author.role.slice(1)}
      </p>
    </div>
  );
}
