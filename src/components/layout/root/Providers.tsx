import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import NotificationsProvider from "../../../context/providers/NotificationsProvider";
import Notification from "../../dashboard/notifications/Notification";

interface Props {
  children: React.ReactNode;
  intlProp: AbstractIntlMessages;
}

export default function Providers({ children, intlProp }: Props) {
  return (
    <NotificationsProvider>
      <Notification />
      <NextIntlClientProvider messages={intlProp}>
        {children}
      </NextIntlClientProvider>
    </NotificationsProvider>
  );
}
