import Item from "./Item";

const dataToBeReturned = [
  {
    user_id: "U0001",
    username: "name",
    surname: "surname",
    student_avg_grade: 12,
  },
  {
    user_id: "U0001",
    username: "name",
    surname: "surname",
    student_avg_grade: 13,
  },
  {
    user_id: "U0001",
    username: "name",
    surname: "surname",
    student_avg_grade: 17,
  },
  {
    user_id: "U0001",
    username: "name",
    surname: "surname",
    student_avg_grade: 98,
  },
  {
    user_id: "U0001",
    username: "name",
    surname: "surname",
    student_avg_grade: 74,
  },
];

interface Props {
  room_id: string;
}

export default function List({ room_id }: Props) {
  console.log(room_id);
  // fetch data
  // ...

  return (
    <>
      {dataToBeReturned.length > 0 ? (
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
            {dataToBeReturned.map((item) => (
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
