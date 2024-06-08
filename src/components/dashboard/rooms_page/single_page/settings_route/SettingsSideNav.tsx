const settings = ["Information", "Cover picture", "Categories", "Delete Room"];

export default function SettingsSideNav() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | sm:h-full sm:w-64 hidden sm:flex sm:flex-col gap-6">
      <ul className="flex sm:flex-col sm:justify-center sm:items-start gap-4">
        {settings.map((item, idx) => (
          <li key={idx} className="inline-block text-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
