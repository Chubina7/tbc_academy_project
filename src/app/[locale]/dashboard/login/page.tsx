// import LoginForm from "../../../../components/auth/login_page/_LoginForm";
// import ToRegisterAction from "../../../../components/auth/login_page/ToRegisterAction";
// import { useTranslations } from "next-intl";
import Banner from "../../../../components/auth/login_page/banner/Banner";
import LoginCard from "../../../../components/auth/login_page/card/LoginCard";

export default function LoginPage() {
  // const t = useTranslations("Auth");

  return (
    // <main className="w-full h-screen flex flex-col justify-center items-center gap-16 sm:p-14 bg-inherit">
    //   <h1 className="text-4xl sm:text-5xl">{t("login.title")}</h1>
    //   <div className="flex flex-col gap-10 bg-gray-700 p-6 rounded-xl sm:text-xl">
    //     <LoginForm />
    //   </div>
    //   <ToRegisterAction />
    // </main>
    <main className="bg-[#F4F7FF] text-[#2B3674] dark:bg-[#2A2438] dark:text-[#DBD8E3] text-inherit | w-full h-screen flex justify-center items-center">
      <LoginCard />
      <Banner />
    </main>
  );
}
