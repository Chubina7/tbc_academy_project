import React from "react";
import ContactInfo from "../../../../components/contactComp/ContactInfo";
import FormFields from "../../../../components/contactComp/FormFields";
import { getDictionary } from "../../../../lib/dictionary";

export default async function Contact({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="h-full flex flex-col justify-start items-start md:flex-row-reverse ">
      <ContactInfo dict={dictionary} />
      <FormFields dict={dictionary} />
    </div>
  );
}
