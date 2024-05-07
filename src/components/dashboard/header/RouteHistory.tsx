"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function RouteHistory() {
  const path = usePathname();
  const routeHistory = path
    .split("/")
    .splice(1)
    .map((item) => `/${item}`)
    .slice(1);

  return (
    <div className="text-xs flex justify-center items-center gap-3">
      <Link href={"/dashboard"}>
        <p>Dashboard</p>
      </Link>
      {routeHistory.map((route, idx) => (
        <div key={idx} className="flex justify-center items-center gap-3">
          <p className="cursor-default">/</p>
          <Link
            href={`/dashboard${routeHistory
              .slice(0, routeHistory.indexOf(route) + 1)
              .join("")}`}
          >
            <p>{`${route.charAt(1).toUpperCase()}${route.substring(2)}`}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
