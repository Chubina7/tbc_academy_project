import React from "react";
import Heading from "./Heading";
import VariantsList from "../../../../../ui/framerMotionDivs/variants/VariantsList";
import AnnouncementItem from "./AnnouncementItem";
import Switcher from "./Switcher";
import Appear from "../../../../../ui/framerMotionDivs/Appear";

interface Props {
  data: Array<AnnouncementComponentType>;
}

export default function Contact({ data }: Props) {
  return (
    <Appear className="w-full h-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-colors duration-300 | flex flex-col gap-3 shadow-custom">
      <Heading />
      <Switcher />
      <VariantsList className="w-full h-full flex flex-col gap-3 overflow-hid">
        {data.length >= 1 ? (
          data
            .slice(0, 4)
            .map((announcement) => (
              <AnnouncementItem
                key={announcement.announcement_id}
                data={announcement}
              />
            ))
        ) : (
          <p className="w-full text-center pb-3">
            No announcements yet. Start writing new!
          </p>
        )}
      </VariantsList>
    </Appear>
  );
}
