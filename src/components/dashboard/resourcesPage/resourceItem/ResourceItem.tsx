import Image from "next/image";
import libraryImage from "/public/test.jpg";
import React from "react";
import Actions from "./actions/Actions";

export default function ResourceItem({ item }: { item: any }) {
  return (
    <div className="px-6 py-4 h-full bg-[#FFFFFF] dark:bg-[#352F44] flex flex-col justify-between rounded-lg">
      <div className="flex flex-col gap-2">
        <Image
          src={libraryImage}
          width={300}
          height={200}
          alt="Old computers"
          className="w-full rounded-md mb-2"
        />
        <h1 className="font-bold text-xl text-[#3D52A1] dark:text-[#FFFFFF] mb-2 ">
          {item.title}
        </h1>
        <p className="text-gray-700 text-base dark:text-[#DBD8E3]">
          {item.description}
        </p>
      </div>
      <div className="pt-4 pb-2">
        <Actions resource_id={item.resource_id} />
      </div>
    </div>
  );
}
