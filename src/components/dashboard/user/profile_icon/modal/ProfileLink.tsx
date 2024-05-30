import Link from "next/link";

interface Props {
  modalCloser: () => void;
  username: string;
  surname: string;
  email: string;
}

export default function ProfileLink({
  modalCloser,
  surname,
  username,
  email,
}: Props) {
  return (
    <Link
      href="/dashboard/profile"
      className="w-full flex flex-col justify-center items-start px-3 py-1 rounded-xl hover:bg-[#5C5470]"
      onClick={modalCloser}
    >
      <h1 className="text-lg">
        {username} {surname}
      </h1>
      <p className="text-sm opacity-60">{email}</p>
    </Link>
  );
}
