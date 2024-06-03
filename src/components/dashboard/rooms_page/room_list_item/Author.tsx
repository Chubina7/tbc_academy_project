import { IoPersonOutline } from "react-icons/io5";

interface Props {
  teacher: string;
}

export default function Author({ teacher }: Props) {
  //   render depending on the role
  //
  //   return null
  return (
    <div className="w-fit flex gap-1 justify-center items-center">
      <p>{teacher}</p>
      <IoPersonOutline size={18} />
    </div>
  );
}
