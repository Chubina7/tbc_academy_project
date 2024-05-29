export default function CreatedDate({ data }: { data: string }) {
  let date = new Date(data);
  let day = String(date.getUTCDate()).padStart(2, "0");
  let month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  let year = date.getUTCFullYear();
  let formattedDate = `${day}/${month}/${year}`;

  return (
    <p className="text-sm cursor-default">
      {data ? formattedDate : "DD/MM/YYYY"}
    </p>
  );
}
