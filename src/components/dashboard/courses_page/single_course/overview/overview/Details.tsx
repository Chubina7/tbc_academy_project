import BottomToTop from "../../../../../ui/framerMotionDivs/directions/BottomToTop";

interface Props {
  data: {
    course_title: string;
    course_description: string;
    created_at: string;
  };
}

export default function Details({ data }: Props) {
  const { course_description, course_title, created_at } = data;

  let date = new Date(created_at);
  let day = String(date.getUTCDate()).padStart(2, "0");
  let month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  let year = date.getUTCFullYear();
  let formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-4">
      <div className="h-full flex flex-col gap-4">
        <h1 className="font-bold text-xl lg:text-4xl">{course_title}</h1>
        <p>{course_description}</p>
      </div>
      <BottomToTop delay={1} className="w-full text-right text-xs lg:text-sm flex-1">
        CREATED AT: {formattedDate}
      </BottomToTop>
    </div>
  );
}
