import ChangeRole from "./options/ChangeRole";
import RemoveUser from "./options/RemoveUser";
import SeeProfile from "./options/SeeProfile";

interface Props {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Modal({ state }: Props) {
  if (!state[0]) return null;

  // track outside click using custom hook
  // ...

  const settingsHandler = () => state[1]((prev) => !prev);

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] text-inherit rounded-lg text-nowrap overflow-hidden | absolute top-[20px] right-0 | flex flex-col justify-center items-start | transition-colors duration-300 | shadow-custom">
      <ChangeRole onClick={settingsHandler} />
      <RemoveUser onClick={settingsHandler} />
      <SeeProfile />
    </div>
  );
}
