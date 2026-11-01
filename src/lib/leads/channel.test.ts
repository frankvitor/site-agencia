import { describe, expect, it, vi } from 'vitest';
import { WhatsAppChannel, buildWhatsAppUrl } from './channel';

describe('buildWhatsAppUrl', () => {
  it('strips non-digits and encodes the message', () => {
    expect(buildWhatsAppUrl('+55 (11) 98468-9461', 'Olá & tchau')).toBe(
      'https://wa.me/5511984689461?text=Ol%C3%A1%20%26%20tchau',
    );
  });

  it('throws on an invalid phone', () => {
    expect(() => buildWhatsAppUrl('123', 'x')).toThrow();
  });
});

describe('WhatsAppChannel', () => {
  it('opens the WhatsApp URL through the injected opener', () => {
    const open = vi.fn();
    new WhatsAppChannel('5511984689461', open).send('oi');
    expect(open).toHaveBeenCalledWith('https://wa.me/5511984689461?text=oi');
  });
});
