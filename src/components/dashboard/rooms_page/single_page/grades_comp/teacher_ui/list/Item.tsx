import Link from "next/link";

interface Props {
  user_id: string;
}

export default function Item({ user_id }: Props) {
  return (
    <tr>
      <td className="sm:px-3 py-3">
        <p className="w-44 lg:w-80 xl:w-48 3xl:w-96 truncate">
          <Link
            href={`/dashboard/profile/${user_id}`}
            className="hover:underline"
          >
            Luka chubinidze
          </Link>
        </p>
      </td>
      <td className="text-center sm:px-3 py-2">12</td>
    </tr>
  );
}
