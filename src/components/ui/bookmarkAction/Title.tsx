import React from "react";

export default function Title({ title }: { title: any }) {
  return <>{title ? "remove from" : "add to"} bookmark</>;
}
