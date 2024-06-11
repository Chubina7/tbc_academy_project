"use client";

import { ReactNode, useState } from "react";
import { AddNewRoomContext } from "../ctx";

interface Props {
  children: ReactNode;
}

export default function AddNewRoomProvider({ children }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const [categories, setCategories] = useState<Array<string>>([]);
  const [members, setMembers] = useState<Array<any>>([]);

  const steps = {
    activeIdx,
    setActiveIdx,
  };

  const data = {
    title,
    description,
    coverPicture,
    categories,
    members,
  };

  const setters = {
    setTitle,
    setDescription,
    setCoverPicture,
    setCategories,
    setMembers,
  };

  return (
    <AddNewRoomContext.Provider value={{ steps, data, setters }}>
      {children}
    </AddNewRoomContext.Provider>
  );
}
