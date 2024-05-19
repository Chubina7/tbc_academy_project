'use client';

import Image from "next/image";
import libraryImage from "/public/test.jpg";
import AddToBookmark from "../../ui/bookmarkAction/AddToBookmark";
import DecreaseCount from "../../ui/bookmarkAction/DecreaseCount";
import DeleteBookmarks from "../../ui/bookmarkAction/DeleteBookmarks";
import IncreaseCount from "../../ui/bookmarkAction/IncreaseCount";
import React, { useState } from "react";

export default function ResourceItem({item}: {item:any}) {
    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
      setIsHidden(prevState => !prevState);
    };

    return (
        <>
            <div>
              <div className="px-6 py-4 w-[300px] h-[500px] bg-[#FFFFFF] dark:bg-[#352F44] flex flex-col justify-between rounded-lg">
                <Image src={libraryImage} width={300} height={200} alt="Old computers" className="rounded-md mb-2"/>
                <div className="font-bold text-xl text-[#3D52A1] dark:text-[#FFFFFF] mb-2 ">
                  {item.title}
                </div>
                <p className="text-gray-700 h-[120px] overflow-y-auto text-base dark:text-[#DBD8E3]">{item.description}</p>
                <div className="px-6 pt-4 pb-2">
                  <AddToBookmark dataOfItem={item} toggleVisibility={toggleVisibility} isHidden={isHidden}/>
                  <p className="hidden">{item.resource_id} random</p>
                  <span className={`gap-6 py-2 ${isHidden ? 'hidden' : 'flex'}`}>
                    <DecreaseCount resource_id={item.resource_id} />
                    <IncreaseCount resource_id={item.resource_id} />
                    <DeleteBookmarks />
                  </span>
                </div>
              </div>
            </div>
        </>
    )
}
