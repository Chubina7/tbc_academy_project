import Image from "next/image";
import anonym_user from "/public/anonym_user.webp";

export default function ProfilePage() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <section className="w-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 transition-colors duration-300">
          <Image
            src={anonym_user}
            alt=""
            width={270}
            height={270}
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full border-2 border-[#5C5470]"
          />
          <h1>USERNAME</h1>
          <h1>SURNAME</h1>
        </section>
        <section className="w-full lg:w-[40%] bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 transition-colors duration-300">
          <h1>test</h1>
        </section>
      </div>
      <div>
        <h1>TEST</h1>
      </div>
    </div>
  );
}
