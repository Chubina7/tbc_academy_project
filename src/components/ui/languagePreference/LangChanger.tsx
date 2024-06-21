import LangChangerUi from "./LangChangerUi";
import { cookies } from "next/headers";

export default async function LangChanger() {
  const cookie = cookies().get("NEXT_LOCALE")?.value || "ka";

  return <LangChangerUi storedLang={cookie} />;
}
