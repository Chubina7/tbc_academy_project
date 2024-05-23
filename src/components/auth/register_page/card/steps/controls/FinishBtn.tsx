import { useContext } from "react";
import { RegistrationInputsContext } from "../../../../../../context/ctx";

export default function FinishBtn() {
  const { inputs, stepIdxState } = useContext(RegistrationInputsContext);
  const { step } = stepIdxState;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log({
      age: inputs.ageState.value,
      email: inputs.emailState.value,
      password: inputs.passwordState.value,
      role: inputs.roleState.value,
      surname: inputs.surnameState.value,
      username: inputs.usernameState.value,
    });
  };

  if (step === 2) {
    return (
      <button
        className="w-full | bg-[#2A2438] border-2 border-[#2A2438] text-[#DBD8E3] dark:bg-[#DBD8E3] dark:text-[#2A2438] dark:border-[#DBD8E3] | rounded-xl | px-1 py-2 | text-md | transition-all duration-300 | opacity-60 hover:opacity-100"
        onClick={handleSubmit}
      >
        Finish
      </button>
    );
  } else {
    return null;
  }
}
