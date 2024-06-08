import React from "react";

export default function Info() {
  return (
    <>
      <h1 className="w-full font-bold text-2xl">Remove user</h1>
      <p className="text-sm">
        Are you sure you want to remove NAME SURNAME? All related data will be
        <span className="font-bold"> permanently</span> deleted.
      </p>
    </>
  );
}
