import Assignment from "./item/Assignment";

interface Props {
  data: Array<{
    assignment_id: string;
    assignment_title: string;
    assignment_description: string;
    assignment_status: boolean;
    created_at: string;
    assignment_past_due: string;
  }>;
}

export default function List({ data }: Props) {
  return (
    <div className="w-full 2xl:max-h-60 overflow-scroll scroll-hidden flex flex-col justify-start items-start">
      {data.length > 0 ? (
        data.map((item) => <Assignment key={item.assignment_id} data={item} />)
      ) : (
        <p className="w-full text-center">No active assignments</p>
      )}
    </div>
  );
}
