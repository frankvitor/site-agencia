import { describe, expect, it } from 'vitest';
import { getLocaleFromUrl, localizePath, switchLocalePath } from './utils';
import { ui } from './ui';

describe('i18n utils', () => {
  it('detects the locale from the URL', () => {
    expect(getLocaleFromUrl(new URL('https://x.com/en/projects/a/'))).toBe('en');
    expect(getLocaleFromUrl(new URL('https://x.com/projects/a/'))).toBe('pt');
  });

  it('localizes paths without prefixing the default locale', () => {
    expect(localizePath('/', 'pt')).toBe('/');
    expect(localizePath('/', 'en')).toBe('/en/');
    expect(localizePath('/projects/a/', 'en')).toBe('/en/projects/a/');
  });

  it('switches the current path between locales', () => {
    expect(switchLocalePath('/projects/a/', 'en')).toBe('/en/projects/a/');
    expect(switchLocalePath('/en/projects/a/', 'pt')).toBe('/projects/a/');
    expect(switchLocalePath('/en/', 'pt')).toBe('/');
  });

  it('has no empty translations', () => {
    for (const dict of Object.values(ui)) {
      for (const value of Object.values(dict)) expect(value.trim()).not.toBe('');
    }
  });
});
