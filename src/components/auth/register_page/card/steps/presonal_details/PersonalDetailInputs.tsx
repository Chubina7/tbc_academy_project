import BirthDate from "./BirthDate";
import SurnameInput from "./SurnameInput";
import UsernameInput from "./UsernameInput";

export default function PersonalDetailInputs() {
  return (
    <div className="w-full flex flex-col gap-3">
      <i className="w-full text-center">Provide some personal details</i>
      <UsernameInput />
      <SurnameInput />
      <BirthDate />
    </div>
  );
}
