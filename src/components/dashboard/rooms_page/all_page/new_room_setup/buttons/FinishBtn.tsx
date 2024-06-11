import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../context/ctx";
import { useRouter } from "next/navigation";

export default function FinishBtn() {
  const { steps, data } = useContext(ctx);
  const router = useRouter();

  if (steps.activeIdx !== 3) return null;

  const handleSubmition = () => {
    const { categories, members } = data;
    const description = data.description.trim();
    const title = data.title.trim();
    const coverPicture = data.coverPicture.trim();

    // validate
    if (
      categories.length < 1 ||
      coverPicture === "" ||
      description === "" ||
      members.length < 1 ||
      title === ""
    ) {
      // throw error message
      console.error("Empty values detected!");
      // ...
      return;
    }
    // ...

    // save in db
    // თუ ბაზას ჩაწერილი რელაციის ოთახის აიდი დავაბრუნებინეთ, მაშინ router.replace(-რუმის აიდი-) და გამოიტანოს success მესიჯი
    // ...

    // redirect
    router.replace("/dashboard/");
    // ...
    console.log({ categories, coverPicture, description, members, title });
  };

  return (
    <button
      className={`w-full px-12 py-1 rounded-xl bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] transition-all duration-300`}
      onClick={handleSubmition}
    >
      FINISH
    </button>
  );
}
