import Item from "./Item";

export default function List() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="w-full text-start sm:px-3">
            Student <span className="text-xs">(TOP 5)</span>
          </th>
          <th className="sm:px-3 text-nowrap">
            Grade <span className="text-xs">(avg.)</span>
          </th>
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
