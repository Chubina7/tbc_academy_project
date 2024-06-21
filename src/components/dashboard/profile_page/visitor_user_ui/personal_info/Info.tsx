interface Props {
  username: string;
  surname: string | null;
  role: RoleType;
  email: string;
  birth_date: string | null;
}

export default function Info({
  birth_date,
  email,
  role,
  surname,
  username,
}: Props) {
  const d = new Date(birth_date || "");
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1 className="text-center text-2xl">
        {username} {surname}
      </h1>
      <h1 className="text-center opacity-60 text-sm">{role}</h1>
      <h1 className="text-center text-sm opacity-60">{email}</h1>
      <h1 className="text-center text-sm opacity-60">
        {birth_date ? `${day}/${month}/${year}` : "No birthdate provided"}
      </h1>
    </div>
  );
}
