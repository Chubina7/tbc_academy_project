// import { useTranslations } from "next-intl";
import Banner from "../../../../components/auth/login_page/banner/Banner";
import LoginCard from "../../../../components/auth/login_page/card/LoginCard";

export default function LoginPage() {
  return (
    <main className="bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] text-inherit | w-full h-screen flex justify-center items-center">
      <LoginCard />
      <Banner />
    </main>
  );
}
