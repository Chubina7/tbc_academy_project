import ProfileLoadingStateProvider from "../../../../../context/providers/ProfileLoadingStateProvider";
// import AuthDetails from "../auth_details/AuthDetails";
import DeleteAcc from "../delete_acc/DeleteAcc";
import PaymentDetails from "../payment_details/PaymentDetails";
import Personalinfo from "../personal_info/Personalinfo";
import Navigation from "./nav/Navigation";

interface Props {
  searchParam: string;
}

export default function LoginedUserUi({ searchParam }: Props) {
  const segment = () => {
    switch (searchParam) {
      case "personal_info":
        return <Personalinfo />;
      // case "auth_details":
      //   return <AuthDetails />;
      case "payment_details":
        return <PaymentDetails />;
      case "delete_acc":
        return <DeleteAcc />;
      default:
        return <Personalinfo />;
    }
  };
  return (
    <ProfileLoadingStateProvider>
      <div className="w-full flex flex-col-reverse lg:flex-row justify-end px-3 md:px-7 py-3 pb-6 gap-5">
        {segment()}
        <Navigation />
      </div>
    </ProfileLoadingStateProvider>
  );
}
