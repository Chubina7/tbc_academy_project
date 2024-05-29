import Image from "next/image";
import backup_img from "/public/anonym_user.webp";

interface Props {
  data: any;
}

export default function Members({ data }: Props) {
  return (
    <div className="w-full flex flex-col">
      <ul className="flex justify-end items-center gap-1">
        {data ? (
          data.map((student: any, idx: number) => (
            <Image
              key={idx}
              src={student.image ? student.image : backup_img}
              alt="s"
              width={20}
              height={20}
              className="rounded-full"
            />
          ))
        ) : (
          <></>
        )}
        <div className="h-5 w-5 flex justify-center items-center bg-[#5C5470] rounded-full text-xs">
          <p>0</p>
        </div>
      </ul>
    </div>
  );
}
