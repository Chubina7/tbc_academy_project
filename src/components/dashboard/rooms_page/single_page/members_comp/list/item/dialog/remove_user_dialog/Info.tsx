interface Props {
  username: string;
  surname: string | null;
}

export default function Info({ surname, username }: Props) {
  return (
    <>
      <h1 className="w-full font-bold text-2xl">Remove user</h1>
      <p className="text-sm">
        Are you sure you want to remove{" "}
        <span className="italic">{username}</span>{" "}
        <span className="italic">{surname}</span>? All related data will be
        <span className="font-bold"> permanently</span> deleted.
      </p>
    </>
  );
}
