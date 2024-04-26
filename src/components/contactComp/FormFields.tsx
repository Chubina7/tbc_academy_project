import React from "react";

export default function FormFields({ dict }: { dict: ITranslation }) {
  const { name, email, subject, questionOrMessage } = dict.contact.form.labels;
  const { namePh, emailPh, subjectPh, questionOrMessagePh } =
    dict.contact.form.inputs;
  const required = dict.default.required;

  return (
    <form className="w-full flex flex-col p-3 gap-6">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col items-start justify-center ">
          <label htmlFor="name">{name} *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={namePh}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <label htmlFor="email">{email} *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={emailPh}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div>
          <label htmlFor="subject">{subject}</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={subjectPh}
            type="text"
            id="subject"
            name="subject"
          />
        </div>
        <div>
          <label htmlFor="question">{questionOrMessage} *</label>
          <textarea
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={questionOrMessagePh}
            id="question"
            name="question"
            required
          />
          <i>* - {required}</i>
        </div>
      </div>
    </form>
  );
}
