import React from "react";
import Heading from "./Heading";
import VariantsList from "../../../../../ui/framerMotionDivs/variants/VariantsList";
import AnnouncementItem from "./AnnouncementItem";
import Switcher from "./Switcher";

const test_announcement_list = [
  {
    user_id: "asd",
    author_username: "tope",
    announcement:
      "test anouncement anouafsjakn jslgn ajsnrgjang;kja lmg;k amtkm baetbknaet bjktbn 'rnoncmasfojan oan onadfjasfasf oa ",
    created_at: "YYYY/MM/DD",
  },
  {
    user_id: "asfafs",
    author_username: "dtope",
    announcement:
      "test anouncement anouncma afs  afafgadfaf a as adg ad ad sfsaf asf sf a gwrrg e ggrgrgrgrgr gr gr oqaejf lkanf ewjk  qenfl nwadipg,mwsdgopl sfojan oan onadfjoa ",
    created_at: "YYYY/MM/DD",
  },
  {
    user_id: "asasfasfad",
    author_username: "maradona",
    announcement: "test anouncement ano  asfasf aadfuncmasfojan oan onadfjoa ",
    created_at: "YYYY/MM/DD",
  },
];

export default function Connections() {
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-colors duration-300 | flex flex-col gap-3">
      <Heading />
      <Switcher />
      <VariantsList className="w-full h-full flex flex-col gap-3 overflow-hid">
        {test_announcement_list.map((item) => (
          <AnnouncementItem key={item.user_id} data={item} />
        ))}
      </VariantsList>
    </div>
  );
}
