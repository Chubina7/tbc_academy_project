import Link from "next/link";

interface Props {
  modalCloser: () => void;
  username: string;
  surname: string | null;
  email: string;
  user_id: string;
}

export default function ProfileLink({
  user_id,
  modalCloser,
  surname,
  username,
  email,
}: Props) {
  return (
    <Link
      href={`/dashboard/profile/${user_id}`}
      className="w-full flex flex-col justify-center items-start px-3 py-1 rounded-xl hover:bg-[#5C5470]"
      onClick={modalCloser}
      id="profile_modal"
    >
      <h1 className="text-lg" id="profile_modal">
        {username} {surname}
      </h1>
      <p className="text-sm opacity-60" id="profile_modal">
        {email}
      </p>
    </Link>
  );
}
