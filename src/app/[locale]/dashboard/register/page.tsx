// import { useTranslations } from "next-intl";
import Banner from "../../../../components/auth/register_page/banner/Banner";
import RegisterCard from "../../../../components/auth/register_page/card/RegisterCard";
import RegistrationProvider from "../../../../context/providers/RegistrationProvider";

export default function RegisterPage() {
  // const t = useTranslations("Auth.register");

  return (
    <RegistrationProvider>
      <main className="bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] text-inherit | w-full h-screen flex justify-center items-center">
        <Banner />
        <RegisterCard />
      </main>
    </RegistrationProvider>
  );
}
