import { IoPeopleOutline } from "react-icons/io5";

interface Props {
  number: number;
}

export default function EnrolledNum({ number }: Props) {
  return (
    <div className="w-fit flex gap-1 justify-center items-center">
      <IoPeopleOutline size={20} />
      <p>{number}</p>
    </div>
  );
}
