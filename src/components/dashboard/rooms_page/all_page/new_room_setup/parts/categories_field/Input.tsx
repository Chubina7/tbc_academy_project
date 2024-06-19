"use client";

import { useContext, useState } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../../context/ctx";

export default function Input() {
  const { data, setters } = useContext(ctx);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  const addCategory = () => {
    if (category.trim() === "") return;
    if (category.trim().length < 3) {
      setError("Category should include minimum 3 chars.");
      return;
    }
    if (
      data.categories.some(
        (ctg) =>
          ctg.trim().toLocaleLowerCase() === category.trim().toLocaleLowerCase()
      )
    ) {
      setCategory("");
      setError("Category already exists.");
      return;
    }
    setters.setCategories((prev) => [...prev, category.trim().toLowerCase()]);
    setError("");
    setCategory("");
  };

  return (
    <>
      <div className="w-full flex justify-center items-center gap-5">
        <input
          type="text"
          placeholder="Search categories.."
          className="w-full text-lg rounded-lg border focus:outline-none bg-transparent px-3 py-1"
          value={category}
          onChange={(e) => setCategory(e.target.value.replace(/[^a-zA-Z]/g, ""))}
          onKeyDown={(e) => {
            if (e.key === "Enter") addCategory();
          }}
        />
        <button
          className="px-4 py-1 bg-red-400 rounded-lg"
          onClick={addCategory}
        >
          Add
        </button>
      </div>
      {error.trim() !== "" && <p className="text-red-600">{error}</p>}
    </>
  );
}
