import { useContext } from "react";
import { UploadNewBookContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function TitleInput() {
  const { data, setData, setError, isLoading } = useContext(ctx);
  const t = useTranslations("dashboard.pages.bookshelf.modal.addTitle");

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="title"
        className={`select-none text-base ${
          isLoading ? "opacity-60" : "opacity-100"
        }`}
      >
        {t("label")}
      </label>
      <input
        className="px-3 py-1 rounded-lg border bg-transparent focus:outline-none disabled:opacity-60"
        id="title"
        name="title"
        type="text"
        placeholder={t("ph")}
        value={data.title || ""}
        onChange={(e) => {
          setData((prev) => ({ ...prev, title: e.target.value }));
          setError("");
        }}
        disabled={isLoading}
      />
    </div>
  );
}
