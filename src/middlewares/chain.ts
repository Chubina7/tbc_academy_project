import { NextMiddleware, NextResponse } from "next/server";

export default function chain(functions: MiddlewareFactory[], index = 0): NextMiddleware {
  const curr = functions[index];

  if (curr) {
    const next = chain(functions, index + 1);
    return curr(next);
  }

  return () => NextResponse.next();
}
