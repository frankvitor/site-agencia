import { describe, expect, it } from 'vitest';
import { formatLeadMessage, leadSchema } from './lead';

const labels = { greeting: 'Olá!', name: 'Nome', service: 'Serviço', message: 'Mensagem' };

describe('leadSchema', () => {
  it('accepts a valid lead and trims fields', () => {
    const result = leadSchema.parse({ name: '  Ana ', service: 'CRM', message: '' });
    expect(result).toEqual({ name: 'Ana', service: 'CRM', message: '' });
  });

  it('rejects short names and missing service', () => {
    const result = leadSchema.safeParse({ name: 'A', service: '' });
    expect(result.success).toBe(false);
    const paths = result.error?.issues.map((i) => i.path[0]);
    expect(paths).toEqual(expect.arrayContaining(['name', 'service']));
  });

  it('rejects messages over the limit', () => {
    const result = leadSchema.safeParse({ name: 'Ana', service: 'CRM', message: 'x'.repeat(1001) });
    expect(result.success).toBe(false);
  });
});

describe('formatLeadMessage', () => {
  it('omits the message line when empty', () => {
    const text = formatLeadMessage({ name: 'Ana', service: 'CRM', message: '' }, labels);
    expect(text).toBe('Olá!\n\n*Nome:* Ana\n*Serviço:* CRM');
  });

  it('includes the message when present', () => {
    const text = formatLeadMessage({ name: 'Ana', service: 'CRM', message: 'Preciso de ajuda' }, labels);
    expect(text).toContain('*Mensagem:* Preciso de ajuda');
  });
});
