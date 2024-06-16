import Item from "./Item";

interface Props {
  data: Array<IRoomTeacherAvgs> | null;
}

export default function List({ data }: Props) {
  if (!data) return null;
  
  return (
    <>
      {data.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-full text-start sm:px-3">Student</th>
              <th className="sm:px-3 text-nowrap">
                Grade <span className="text-xs">(avg.)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <Item key={item.user_id} data={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="w-full h-full text-center">No student found</p>
      )}
    </>
  );
}
