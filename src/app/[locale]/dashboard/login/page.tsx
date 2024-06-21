// import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Banner from "../../../../components/auth/login_page/banner/Banner";
import LoginCard from "../../../../components/auth/login_page/card/LoginCard";

interface Props {
  params: IParams;
}

export default function LoginPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  
  return (
    <main className="bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] text-inherit | w-full h-screen flex justify-center items-center">
      <LoginCard />
      <Banner />
    </main>
  );
}
