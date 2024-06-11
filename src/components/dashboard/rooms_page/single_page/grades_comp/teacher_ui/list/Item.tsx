import Link from "next/link";

export default function Item() {
  return (
    <tr>
      <td className="sm:px-3 py-3">
        <p className="w-44 lg:w-80 xl:w-48 3xl:w-96 truncate">
          <Link href={"/dashboard/rooms/R____/U____"} className="hover:underline">
            Luka chubinidze
          </Link>
        </p>
      </td>
      <td className="text-center sm:px-3 py-2">12</td>
    </tr>
  );
}
