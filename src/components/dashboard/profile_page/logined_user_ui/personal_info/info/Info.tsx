import Birthdate from "./Birthdate";
import Surname from "./Surname";
import Username from "./Username";

export default function Info() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
      <Username />
      <Surname />
      <Birthdate />
    </div>
  );
}
