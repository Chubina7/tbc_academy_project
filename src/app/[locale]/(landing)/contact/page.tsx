import React from "react";
import ContactInfo from "../../../../components/contactComp/ContactInfo";
import FormFields from "../../../../components/contactComp/FormFields";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

export default async function ContactPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <div className="h-full flex flex-col justify-start items-start md:flex-row-reverse ">
      <ContactInfo />
      <FormFields />
    </div>
  );
}
