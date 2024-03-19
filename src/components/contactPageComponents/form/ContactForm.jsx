import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles.formFieldsWrapper}>
      <div className={styles.name_email}>
        <div className={styles.inputField}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div className={styles.subject_message}>
        <div className={styles.inputField}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="question">Question / Message</label>
          <textarea id="question" name="question" required />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
