import Birthdate from "./Birthdate";
import Surname from "./Surname";
import Username from "./Username";

interface Props {
  data: { username: string; surname: string | null; birth_date: string | null };
}

export default function Info({ data }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
      <Username data={data.username} />
      <Surname data={data.surname} />
      <Birthdate data={data.birth_date} />
    </div>
  );
}
