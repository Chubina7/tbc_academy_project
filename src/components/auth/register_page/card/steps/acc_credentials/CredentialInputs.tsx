import EmailInput from "./EmailInput";
import PasswordInput from "./password/PasswordInput";

export default function CredentialInputs() {
  return (
    <div className="w-full flex flex-col gap-3">
      <i className="w-full text-right text-red-700">DISPLAY ERROR CODE</i>
      <EmailInput />
      <PasswordInput />
    </div>
  );
}
