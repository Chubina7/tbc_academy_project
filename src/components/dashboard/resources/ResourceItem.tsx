import Image from "next/image";
import libraryImage from "/public/test.jpg";
import AddToBookmark from "../../ui/bookmarkAction/AddToBookmark";
import DecreaseCount from "../../ui/bookmarkAction/DecreaseCount";
import IncreaseCount from "../../ui/bookmarkAction/IncreaseCount";
import React from "react";
import ItemCount from "../../ui/bookmarkAction/ItemCount";

export default function ResourceItem({ item }: { item: any }) {
  return (
    <div className="px-6 py-4 w-[300px] h-[500px] bg-[#FFFFFF] dark:bg-[#352F44] flex flex-col justify-between rounded-lg">
      <Image
        src={libraryImage}
        width={300}
        height={200}
        alt="Old computers"
        className="rounded-md mb-2"
      />
      <h1 className="font-bold text-xl text-[#3D52A1] dark:text-[#FFFFFF] mb-2 ">
        {item.title}
      </h1>
      <p className="text-gray-700 h-[120px] overflow-y-auto text-base dark:text-[#DBD8E3]">
        {item.description}
      </p>
      <div className="px-6 pt-4 pb-2">
        <p>the id: {item.resource_id}</p>
        <AddToBookmark id={item.resource_id} />
        <DecreaseCount id={item.resource_id} />
        <IncreaseCount id={item.resource_id} />
        <ItemCount id={item.resource_id} />
      </div>
    </div>
  );
}
