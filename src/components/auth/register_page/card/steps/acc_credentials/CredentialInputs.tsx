import EmailInput from "./EmailInput";
import PasswordInput from "./password/PasswordInput";

export default function CredentialInputs() {
  return (
    <div className="w-full flex flex-col gap-3">
      <i className="w-full text-right">Enter your account credentials</i>
      <EmailInput />
      <PasswordInput />
    </div>
  );
}
