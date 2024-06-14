interface Props {
  segmentParam: string;
}

export default function Segment({ segmentParam }: Props) {
  switch (segmentParam) {
    case "delete_acc":
      return (
        <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
          <h1>Delete account</h1>
        </div>
      );
    case "payment_details":
      return (
        <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
          <h1>Payment information</h1>
        </div>
      );
    case "auth_details":
      return (
        <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
          <h1>Credentials information</h1>
        </div>
      );
    case "personal_info":
      return (
        <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
          <h1>Personal information</h1>
        </div>
      );
    default:
      return;
  }
}
