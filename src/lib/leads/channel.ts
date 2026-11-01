/**
 * Canal de entrega de leads. Hoje o único canal é o WhatsApp, mas qualquer
 * outro (CRM via webhook, e-mail) entra implementando esta interface —
 * o formulário não precisa mudar.
 */
export interface LeadChannel {
  send(message: string): void;
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) throw new Error(`Invalid WhatsApp phone: "${phone}"`);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export class WhatsAppChannel implements LeadChannel {
  constructor(
    private readonly phone: string,
    private readonly open: (url: string) => void = (url) => window.open(url, '_blank', 'noopener,noreferrer'),
  ) {}

  send(message: string): void {
    this.open(buildWhatsAppUrl(this.phone, message));
  }
}
