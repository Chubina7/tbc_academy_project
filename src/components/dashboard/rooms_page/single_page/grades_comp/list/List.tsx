import Item from "./Item";

export default function List() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="w-full text-start sm:px-3">Student</th>
          <th className="sm:px-3">Grade</th>
        </tr>
      </thead>
      <tbody>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </tbody>
    </table>
  );
}
