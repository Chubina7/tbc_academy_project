import { useContext } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./password/PasswordInput";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function CredentialInputs() {
  const { messages } = useContext(RegistrationInputsContext);
  const { value } = messages.credentialsMessage;

  return (
    <div className="w-full flex flex-col gap-3">
      <i className="w-full h-6 text-right text-red-700">{value}</i>
      <EmailInput />
      <PasswordInput />
    </div>
  );
}
