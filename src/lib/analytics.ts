/**
 * Ponto único de rastreamento. Envia eventos para o dataLayer (GTM),
 * que distribui para GA4 / Meta Pixel. Sem GTM carregado, é um no-op.
 */
type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, params: EventParams = {}): void {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
