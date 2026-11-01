export const locales = ['pt', 'en'] as const;
export const defaultLocale = 'pt' satisfies Locale;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  pt: { label: 'PT', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  en: { label: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
