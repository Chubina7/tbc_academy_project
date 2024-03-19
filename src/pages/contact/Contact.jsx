import React from "react";
import ContactForm from "../../components/contactPageComponents/form/ContactForm";
import ContactInfo from "../../components/contactPageComponents/info/ContactInfo";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPageWrapper}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
