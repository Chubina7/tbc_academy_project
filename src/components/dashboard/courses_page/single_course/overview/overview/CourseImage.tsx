import Image from "next/image";
import backup_img from "/public/library.jpg";

interface Props {
  data: { image: string | null; course_title: string };
}

export default function CourseImage({ data }: Props) {
  const { course_title, image } = data;
  return (
    <div className="w-full h-full md:max-w-96 flex justify-start items-start">
      <Image
        src={image ? image : backup_img}
        alt={course_title}
        width={720}
        height={540}
        className="rounded-lg"
      />
    </div>
  );
}
