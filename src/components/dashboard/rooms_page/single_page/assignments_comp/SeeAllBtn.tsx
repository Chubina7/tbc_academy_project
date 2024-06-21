import Link from "next/link";

interface Props {
  num: number;
}

export default function SeeAllBtn({ num }: Props) {
  return (
    <div className="w-full text-center mb-1 p-3 pt-0">
      {num > 5 && (
        <Link
          href={`/dashboard/assignments`}
          className="hover:underline cursor-pointer"
        >
          See more (+{num - 5})
        </Link>
      )}
    </div>
  );
}
