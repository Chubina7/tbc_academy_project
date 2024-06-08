import Categories from "./Categories";
import CoverPicture from "./CoverPicture";
import DeleteRoom from "./DeleteRoom";
import Information from "./Information";

export default function Setting() {
  return (
    <div className="w-full sm:h-full flex flex-col justify-start items-center gap-5">
      <Information />
      <Categories />
      <CoverPicture />
      <DeleteRoom />
    </div>
  );
}
