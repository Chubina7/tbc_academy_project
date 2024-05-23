import { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function FinishBtn() {
  const { inputs, stepIdxState } = useContext(RegistrationInputsContext);
  const { step } = stepIdxState;
  const disable =
    step === 2 &&
    (inputs.emailState.value === "" ||
      inputs.passwordState.value === "" ||
      inputs.reTypedPasswordState.value === "");

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log({
      email: inputs.emailState.value,
      password: inputs.passwordState.value,
      reTypedPassword: inputs.reTypedPasswordState.value,
      surname: inputs.surnameState.value,
      username: inputs.usernameState.value,
      age: inputs.ageState.value,
      role: inputs.roleState.value,
    });
  };

  if (step === 2) {
    return (
      <button
        className={`w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | ${
          disable
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer opacity-100"
        }`}
        onClick={handleSubmit}
        disabled={disable}
      >
        Finish
      </button>
    );
  } else {
    return null;
  }
}
