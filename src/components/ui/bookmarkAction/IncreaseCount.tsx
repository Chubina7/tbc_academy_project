"use client";
import { actIncreaseCount } from "../../../lib/actions";

export default function IncreaseCount({
  resource_id,
}: {
  resource_id: string;
}) {
  const handleIncreaseCount = () => {
    actIncreaseCount({ resource_id });
  };

  return (
    <button
      className="border border-gray-300 p-2 rounded-lg"
      onClick={handleIncreaseCount}
    >
      +1
    </button>
  );
}
