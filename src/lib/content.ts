import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/config';

/** Slug sem o prefixo de idioma: "pt/meu-case" → "meu-case". */
export function entrySlug(entry: { id: string }): string {
  return entry.id.split('/').slice(1).join('/');
}

function byOrder<T extends { data: { order: number } }>(a: T, b: T): number {
  return a.data.order - b.data.order;
}

export async function getServices(locale: Locale): Promise<CollectionEntry<'services'>[]> {
  const entries = await getCollection('services', ({ id }) => id.startsWith(`${locale}/`));
  return entries.sort(byOrder);
}

export async function getCases(locale: Locale): Promise<CollectionEntry<'cases'>[]> {
  const entries = await getCollection(
    'cases',
    ({ id, data }) => id.startsWith(`${locale}/`) && !(import.meta.env.PROD && data.draft),
  );
  return entries.sort(byOrder);
}

export async function getProjectPaths(locale: Locale) {
  const cases = await getCases(locale);
  return cases.map((entry) => ({ params: { slug: entrySlug(entry) }, props: { entry } }));
}
