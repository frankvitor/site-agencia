/**
 * Configuração central da marca. Trocar o nome, contatos e redes aqui
 * reflete em todo o site — nenhum outro arquivo deve ter esses dados fixos.
 */
export const siteConfig = {
  name: 'STRUCT',
  url: 'https://www.seudominio.com.br',
  whatsapp: {
    /** Somente dígitos, com DDI + DDD (formato exigido pelo wa.me). */
    phone: '5511984689461',
  },
  socials: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
} as const;

export type SiteConfig = typeof siteConfig;
