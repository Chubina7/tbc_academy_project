import React from "react";

export default function FormFields() {
  return (
    <form className="w-full flex flex-col p-3 gap-6">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col items-start justify-center ">
          <label htmlFor="name">Name *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder="Example Example"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <label htmlFor="email">Email *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder="example@email.com"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder="Write what you want to talk about"
            type="text"
            id="subject"
            name="subject"
          />
        </div>
        <div>
          <label htmlFor="question">Question / Message *</label>
          <textarea
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder="Dear developer..."
            id="question"
            name="question"
            required
          />
          <i>* - REQUIRED</i>
        </div>
      </div>
    </form>
  );
}
