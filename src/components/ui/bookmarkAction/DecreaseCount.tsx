"use client";
import { actDecreaseCount } from "../../../lib/actions";

export default function DecreaseCount({
  resource_id,
}: {
  resource_id: string;
}) {
  const handleDecreaseCount = () => {
    actDecreaseCount({ resource_id });
  };

  return (
    <button
      className="border border-gray-300 p-2 rounded-lg"
      onClick={handleDecreaseCount}
    >
      -1
    </button>
  );
}
