import { defaultLocale, isLocale, type Locale } from './config';
import { ui, type UiKey } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  return isLocale(segment) ? segment : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[locale][key];
}

/** Monta um caminho no idioma informado. O idioma padrão não leva prefixo. */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}

/** Remove o prefixo de idioma, devolvendo o caminho "neutro". */
export function stripLocale(pathname: string): string {
  const [, segment, ...rest] = pathname.split('/');
  if (isLocale(segment) && segment !== defaultLocale) return `/${rest.join('/')}`;
  return pathname;
}

/** Caminho equivalente da página atual em outro idioma. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(stripLocale(pathname), target);
}
