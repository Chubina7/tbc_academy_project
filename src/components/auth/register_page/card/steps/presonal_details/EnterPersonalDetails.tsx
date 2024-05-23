import AgeInput from "./AgeInput";
import SurnameInput from "./SurnameInput";
import UsernameInput from "./UsernameInput";

export default function EnterPersonalDetails() {
  return (
    <div className="w-full flex flex-col gap-3">
      <i className="w-full text-right">Enter your personal details</i>
      <UsernameInput />
      <SurnameInput />
      <AgeInput />
    </div>
  );
}
