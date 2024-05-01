import React from "react";
import LangChangerUi from "./LangChangerUi";
import { readCookieForClient } from "../../../lib/actions";

async function LangChanger() {
  const cookie = await readCookieForClient("NEXT_LOCALE");

  return (
    <>
      <LangChangerUi storedLang={cookie} />
    </>
  );
}

export default LangChanger;
