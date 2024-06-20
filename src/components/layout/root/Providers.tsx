import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import NotificationsProvider from "../../../context/providers/NotificationsProvider";

interface Props {
  children: React.ReactNode;
  intlProp: AbstractIntlMessages;
}

export default function Providers({ children, intlProp }: Props) {
  return (
    <NotificationsProvider>
      <NextIntlClientProvider messages={intlProp}>
        {children}
      </NextIntlClientProvider>
    </NotificationsProvider>
  );
}
