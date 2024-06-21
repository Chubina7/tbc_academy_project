import Link from "next/link";

interface Props {
  data: {
    user_id: string;
    username: string;
    surname: string;
    student_avg_grade: number;
  };
}

export default function Item({ data }: Props) {
  const { user_id, student_avg_grade, surname, username } = data;

  return (
    <tr className="h-full">
      <td className="sm:px-3 py-3">
        <p className="w-44 lg:w-80 xl:w-48 3xl:w-96 truncate">
          <Link
            href={`/dashboard/profile/${user_id}`}
            className="hover:underline"
          >
            {username} {surname}
          </Link>
        </p>
      </td>
      <td className="text-center sm:px-3 py-2">{student_avg_grade}</td>
    </tr>
  );
}
