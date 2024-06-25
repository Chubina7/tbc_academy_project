import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import standingHuman from "/public/standing-10.svg";
import sittingHuman from "/public/sitting-8.svg";
import Link from "next/link";
interface Props {
  params: IParams;
}

export default function HomePage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="w-full h-minusHeader flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-start gap-4 px-6">
        <h1 className="w-text-center font-bold text-9xl">Skill UP</h1>
        <div>
          <p className="opacity-60 font-semibold ">
            Teach with us <u>smarter</u>, Learn with us <u>better</u>
          </p>
        </div>
        <Link
          className="px-5 py-1 border border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg font-bold"
          href={"/dashboard/login"}
        >
          Get Started
        </Link>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-2">
        <Image
          src={standingHuman}
          alt=""
          width={980}
          height={512}
          className="w-96 h-96 object-cover"
        />
        <Image
          src={sittingHuman}
          alt=""
          width={980}
          height={512}
          className="w-96 h-96 object-cover"
        />
      </div>
    </div>
  );
}
