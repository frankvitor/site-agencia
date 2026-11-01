import { z } from 'zod';

export const LEAD_MESSAGE_MAX = 1000;

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  service: z.string().trim().min(1).max(80),
  message: z.string().trim().max(LEAD_MESSAGE_MAX).optional().default(''),
});

export type Lead = z.infer<typeof leadSchema>;

export interface LeadMessageLabels {
  greeting: string;
  name: string;
  service: string;
  message: string;
}

export function formatLeadMessage(lead: Lead, labels: LeadMessageLabels): string {
  const lines = [labels.greeting, '', `*${labels.name}:* ${lead.name}`, `*${labels.service}:* ${lead.service}`];
  if (lead.message) lines.push(`*${labels.message}:* ${lead.message}`);
  return lines.join('\n');
}
