import React from "react";
import ContactInfo from "../../components/contactComp/ContactInfo";
import FormFields from "../../components/contactComp/FormFields";

const Contact = () => {
  return (
    <div className="h-full flex flex-col justify-start items-start md:flex-row-reverse ">
      <ContactInfo />
      <FormFields />
    </div>
  );
};

export default Contact;
