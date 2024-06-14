import Navigation from "./nav/Navigation";
import Segment from "./Segment";

interface Props {
  searchParam: string;
}

export default function LoginedUserUi({ searchParam }: Props) {
  return (
    <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-end px-3 md:px-7 py-3 gap-5">
      <Segment segmentParam={searchParam} />
      <Navigation />
    </div>
  );
}
