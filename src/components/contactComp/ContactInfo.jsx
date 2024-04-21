import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

export default function ContactInfo({ dict }) {
  const { title, info } = dict.contact.contactInfo;
  const { address, phone, email, website } = info;

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 py-8 px-5 bg-slate-500 md:max-w-screen-sm md:mt-20">
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <GrLocation size={20} />
          <strong>{address.name}:</strong>
        </div>
        <p>{address.value}</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <IoCallOutline size={20} />
          <strong>{phone.name}:</strong>
        </div>
        <p>{phone.value}</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <MdOutlineEmail size={20} />
          <strong>{email.name}:</strong>
        </div>
        <p>{email.value}</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <IoIosGlobe size={20} />
          <strong>{website.name}:</strong>
        </div>
        <p>{website.value}</p>
      </div>
    </div>
  );
}
