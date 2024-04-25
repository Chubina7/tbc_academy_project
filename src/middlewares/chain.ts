import { NextResponse } from "next/server";

export default function chain(functions, index = 0) {
  const curr = functions[index];

  if (curr) {
    const next = chain(functions, index + 1);
    return curr(next);
  }

  return () => NextResponse.next();
}
