import { useTranslations } from "next-intl";

interface Props {
  state: [string, React.Dispatch<React.SetStateAction<string>>];
  handleSubmit: () => void;
  isDisabled: boolean;
  errorState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Input({
  state,
  handleSubmit,
  isDisabled,
  errorState,
}: Props) {
  const [value, setValue] = state;
  const t = useTranslations("dashboard.pages.announcements.singlePage");

  return (
    <textarea
      name="announcement_new_comment"
      id="announcement_new_comment"
      placeholder={t("ph")}
      rows={5}
      className="w-full bg-transparent border-2 rounded-lg focus:outline-none p-3 resize-none"
      value={value}
      onChange={(e) => {
        errorState(false);
        setValue(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSubmit();
        }
      }}
      disabled={isDisabled}
    />
  );
}
