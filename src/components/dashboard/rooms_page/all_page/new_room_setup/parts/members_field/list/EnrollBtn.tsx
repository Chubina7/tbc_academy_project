import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../../../context/ctx";

interface Props {
  user_id: string;
}

export default function EnrollBtn({ user_id }: Props) {
  const { data, setters } = useContext(ctx);

  const includes = data.members.includes(user_id);

  const handleEnrollment = () => {
    if (includes) {
      setters.setMembers((prev) => prev.filter((member) => member !== user_id));
      return;
    }
    setters.setMembers((prev) => [...prev, user_id]);
  };

  return (
    <button
      className="px-3 py-1 rounded-lg bg-red-400 text-sm min-w-20"
      onClick={handleEnrollment}
    >
      {includes ? "Remove" : "Enroll"}
    </button>
  );
}
