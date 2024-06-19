"use client";

interface Props {
  state: [
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ];
}

export default function Input({ state }: Props) {
  // add search logic after connecting the DB
  return (
    <input
      type="search"
      placeholder="Search users"
      className="w-full text-lg rounded-lg border focus:outline-none bg-transparent px-3 py-1"
      value={state[0]}
      onChange={(e) => state[1](e.target.value)}
    />
  );
}
