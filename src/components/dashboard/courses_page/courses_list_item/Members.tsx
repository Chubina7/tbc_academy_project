import Image from "next/image";
import backup_img from "/public/anonym_user.webp";

interface IMember {
  user_id: string;
  username: string;
  surname: string;
  image: string | null;
  role: string;
}

interface Props {
  data: Array<IMember>;
}

export default function Members({ data }: Props) {
  return (
    <div className="w-full flex flex-col">
      <ul className="flex justify-end items-center gap-1">
        {data.length >= 1 ? (
          data.slice(0, 3).map((student: IMember) => (
            <div key={student.user_id}>
              <Image
                src={student.image ? student.image : backup_img}
                alt={student.username}
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
          ))
        ) : (
          <div>
            <i className="text-xs">No members</i>
          </div>
        )}
        {data.length > 3 && (
          <div className="h-5 w-5 flex justify-center items-center bg-[#5C5470] rounded-full text-xs">
            <p>{data.length - 3}</p>
          </div>
        )}
      </ul>
    </div>
  );
}
