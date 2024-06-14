"use client";

interface Props {
  prevValues: {
    username: string;
    profile_picture: string | null;
    surname: string | null;
    birth_date: string | null;
  };
}

export default function SaveBtn({ prevValues }: Props) {
  // const {} = useContext()
  console.log(prevValues);
  return (
    <button className="px-3 py-1 rounded-lg bg-red-400">
      Save <span className="hidden md:inline-block">Changes</span>
    </button>
  );
}
