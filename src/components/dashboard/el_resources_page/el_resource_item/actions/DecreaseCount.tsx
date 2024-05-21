"use client";

import { actDecreaseCount } from "../../../../../lib/actions";

export default function DecreaseCount({ id }: { id: string }) {
  return (
    <button
      className="border border-gray-300 p-2 rounded-lg"
      onClick={() => actDecreaseCount(id)}
    >
      - 1
    </button>
  );
}
