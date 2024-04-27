import React from "react";

export default function FormFields() {
  return (
    <form className="w-full flex flex-col p-3 gap-6">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col items-start justify-center ">
          <label htmlFor="name">{"dict.contact.form.labels.name"} *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={"dict.contact.form.inputs.namePh"}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <label htmlFor="email">{"dict.contact.form.labels.email"} *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={"dict.contact.form.inputs.emailPh"}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div>
          <label htmlFor="subject">{"dict.contact.form.labels.subject"}</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={"dict.contact.form.inputs.subjectPh"}
            type="text"
            id="subject"
            name="subject"
          />
        </div>
        <div>
          <label htmlFor="question">
            {"dict.contact.form.labels.questionOrMessage"} *
          </label>
          <textarea
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={"dict.contact.form.inputs.questionOrMessagePh"}
            id="question"
            name="question"
            required
          />
          <i>* - {"dict.default.required"}</i>
        </div>
      </div>
    </form>
  );
}
