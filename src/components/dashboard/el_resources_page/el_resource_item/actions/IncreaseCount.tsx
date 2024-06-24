"use client";

import { actIncreaseCount } from "../../../../../lib/helpers/server_act_funcs/actions";

export default function IncreaseCount({ id }: { id: string }) {
  return (
    <button
      className="border border-gray-300 p-2 rounded-lg"
      onClick={() => actIncreaseCount(id)}
    >
      + 1
    </button>
  );
}
