import Heading from "./Heading";
import Information from "./Information";
import ProfilePicture from "./ProfilePicture";

export default function UserInformation() {
  return (
    <section className="w-full flex flex-col gap-2">
      <Heading />
      <div className="w-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl p-3 transition-colors duration-300 | flex flex-col md:flex-row justify-start items-center gap-3 md:gap-11">
        <ProfilePicture />
        <Information />
      </div>
    </section>
  );
}
