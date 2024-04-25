import "server-only";

const dictionaries: Record<string, () => Promise<ITranslation>> = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  ka: () =>
    import("../../dictionaries/ka.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  dictionaries[locale]();