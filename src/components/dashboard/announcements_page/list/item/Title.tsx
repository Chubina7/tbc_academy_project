import Link from "next/link";

interface Props {
  data: string;
  announcement_id: string;
}

export default function Title({ announcement_id, data }: Props) {
  return (
    <Link href={`/dashboard/announcements/${announcement_id}`}>
      <h1 className="font-semibold text-xl sm:text-2xl cursor-pointer hover:underline">
        {data}
      </h1>
    </Link>
  );
}
