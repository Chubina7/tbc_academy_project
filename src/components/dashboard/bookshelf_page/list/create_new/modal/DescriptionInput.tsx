import { useContext } from "react";
import { UploadNewBookContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function DescriptionInput() {
  const { data, setData, setError, isLoading } = useContext(ctx);
  const t = useTranslations("dashboard.pages.bookshelf.modal.addTitle");

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="description"
        className={`select-none text-base ${
          isLoading ? "opacity-60" : "opacity-100"
        }`}
      >
        {t("label")}
      </label>
      <textarea
        id="description"
        name="description"
        className="px-3 py-1 rounded-lg border bg-transparent resize-none focus:outline-none disabled:opacity-60"
        placeholder={t("label")}
        rows={4}
        value={data.description}
        onChange={(e) => {
          setData((prev) => ({ ...prev, description: e.target.value }));
          setError("");
        }}
        disabled={isLoading}
      />
    </div>
  );
}
