import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { supportedLocales } from './lib/variables';

export default getRequestConfig(async ({ locale }) => {
  if (!supportedLocales.includes(locale as string)) notFound();

  return {
    messages: (await import(`../dictionaries/${locale}.json`)).default
  };
});