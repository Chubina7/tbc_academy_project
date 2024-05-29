import Link from "next/link";
import Appear from "../../../ui/framerMotionDivs/Appear";
import Image from "next/image";
import backup_img from "/public/library.jpg";

interface Props {
  data: { course_id: string; image: string };
}

export default function ImageLink({ data }: Props) {
  const { course_id, image } = data;

  return (
    <Link href={`/dashboard/courses/${course_id}`}>
      <Appear delay={0.5}>
        <Image
          src={image ? image : backup_img}
          alt=""
          className="w-full object-cover rounded-lg"
        />
      </Appear>
    </Link>
  );
}
