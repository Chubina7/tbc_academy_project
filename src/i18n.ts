import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { supportedLocales } from './lib/variables';

export default getRequestConfig(async ({ locale }) => {
  const baseLocal = new Intl.Locale(locale).baseName
  if (!supportedLocales.includes(baseLocal)) notFound();

  return {
    messages: (await import(`../dictionaries/${locale}.json`)).default
  };
});