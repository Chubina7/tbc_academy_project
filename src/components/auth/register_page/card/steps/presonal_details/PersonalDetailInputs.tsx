import AgeInput from "./AgeInput";
import SurnameInput from "./SurnameInput";
import UsernameInput from "./UsernameInput";

export default function PersonalDetailInputs() {
  return (
    <div className="w-full flex flex-col gap-3">
      <i className="w-full text-right text-red-700">DISPLAY ERROR CODE</i>
      <UsernameInput />
      <SurnameInput />
      <AgeInput />
    </div>
  );
}
