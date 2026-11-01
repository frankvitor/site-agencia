import type { Locale } from './config';

/**
 * Textos de interface. O dicionário `pt` é a fonte da verdade:
 * o tipo garante que `en` tenha exatamente as mesmas chaves.
 */
const pt = {
  'meta.title': 'Soluções digitais que geram resultado',
  'meta.description':
    'Sites de alta performance, automação de atendimento, CRM personalizado e tráfego pago para empresas que querem crescer.',

  'nav.services': 'Serviços',
  'nav.process': 'Processo',
  'nav.projects': 'Projetos',
  'nav.contact': 'Contato',
  'nav.cta': 'Fale conosco',
  'nav.skip': 'Pular para o conteúdo',
  'nav.menu': 'Menu',

  'hero.title': 'Tecnologia que revela a verdadeira essência da sua marca',
  'hero.subtitle':
    'Construímos a infraestrutura digital que transforma visitantes em clientes — do site ao atendimento automatizado.',
  'hero.cta': 'Iniciar um projeto',
  'hero.secondary': 'Ver projetos',
  'hero.card.title': 'PRONTO PARA O FUTURO',
  'hero.card.text': 'IA, automação e design de alto nível para manter sua marca à frente.',
  'hero.card.cta': 'Consultoria',

  'services.eyebrow': 'Serviços',
  'services.title': 'Soluções completas, do primeiro clique ao cliente fiel',
  'services.more': 'Quero esse serviço',

  'process.eyebrow': 'Processo',
  'process.title': 'Como trabalhamos',
  'process.1.title': 'Diagnóstico',
  'process.1.text': 'Entendemos seu negócio, público e metas antes de qualquer linha de código.',
  'process.2.title': 'Estratégia',
  'process.2.text': 'Definimos escopo, tecnologia e métricas de sucesso.',
  'process.3.title': 'Execução',
  'process.3.text': 'Design e desenvolvimento em ciclos curtos, com entregas visíveis.',
  'process.4.title': 'Evolução',
  'process.4.text': 'Medimos, otimizamos e escalamos o que traz resultado.',

  'projects.eyebrow': 'Portfólio',
  'projects.title': 'Projetos entregues',
  'projects.view': 'Ver case',
  'projects.back': 'Voltar aos projetos',
  'projects.client': 'Cliente',
  'projects.year': 'Ano',
  'projects.services': 'Serviços',
  'projects.results': 'Resultados',

  'contact.eyebrow': 'Contato',
  'contact.title': 'Vamos construir algo juntos?',
  'contact.subtitle':
    'Conte um pouco sobre o seu projeto. Você será direcionado ao nosso WhatsApp com a mensagem pronta.',
  'contact.name': 'Seu nome',
  'contact.service': 'Serviço de interesse',
  'contact.service.placeholder': 'Selecione um serviço',
  'contact.message': 'Sobre o projeto (opcional)',
  'contact.submit': 'Enviar pelo WhatsApp',
  'contact.error.name': 'Informe seu nome (mínimo 2 caracteres).',
  'contact.error.service': 'Selecione um serviço.',
  'contact.error.message': 'A mensagem deve ter no máximo 1000 caracteres.',
  'contact.whatsapp.greeting': 'Olá! Vim pelo site.',
  'contact.whatsapp.name': 'Nome',
  'contact.whatsapp.service': 'Serviço',
  'contact.whatsapp.message': 'Mensagem',

  'footer.rights': 'Todos os direitos reservados.',

  'notFound.title': 'Página não encontrada',
  'notFound.back': 'Voltar para o início',
} as const;

type UiKey = keyof typeof pt;

const en: Record<UiKey, string> = {
  'meta.title': 'Digital solutions that drive results',
  'meta.description':
    'High-performance websites, customer service automation, custom CRM and paid traffic for companies ready to grow.',

  'nav.services': 'Services',
  'nav.process': 'Process',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.cta': 'Contact us',
  'nav.skip': 'Skip to content',
  'nav.menu': 'Menu',

  'hero.title': 'Technology that reveals the true essence of your brand',
  'hero.subtitle':
    'We build the digital infrastructure that turns visitors into customers — from your website to automated support.',
  'hero.cta': 'Start a project',
  'hero.secondary': 'See projects',
  'hero.card.title': 'FUTURE-READY',
  'hero.card.text': 'AI, automation and high-end design to keep your brand ahead of the curve.',
  'hero.card.cta': 'Consultation',

  'services.eyebrow': 'Services',
  'services.title': 'End-to-end solutions, from first click to loyal customer',
  'services.more': 'I want this service',

  'process.eyebrow': 'Process',
  'process.title': 'How we work',
  'process.1.title': 'Discovery',
  'process.1.text': 'We understand your business, audience and goals before writing any code.',
  'process.2.title': 'Strategy',
  'process.2.text': 'We define scope, technology and success metrics.',
  'process.3.title': 'Execution',
  'process.3.text': 'Design and development in short cycles with visible deliveries.',
  'process.4.title': 'Growth',
  'process.4.text': 'We measure, optimize and scale what drives results.',

  'projects.eyebrow': 'Portfolio',
  'projects.title': 'Delivered projects',
  'projects.view': 'View case',
  'projects.back': 'Back to projects',
  'projects.client': 'Client',
  'projects.year': 'Year',
  'projects.services': 'Services',
  'projects.results': 'Results',

  'contact.eyebrow': 'Contact',
  'contact.title': 'Shall we build something together?',
  'contact.subtitle': "Tell us a bit about your project. You'll be redirected to our WhatsApp with the message ready.",
  'contact.name': 'Your name',
  'contact.service': 'Service of interest',
  'contact.service.placeholder': 'Select a service',
  'contact.message': 'About the project (optional)',
  'contact.submit': 'Send via WhatsApp',
  'contact.error.name': 'Please enter your name (at least 2 characters).',
  'contact.error.service': 'Please select a service.',
  'contact.error.message': 'Message must be at most 1000 characters.',
  'contact.whatsapp.greeting': 'Hi! I came from your website.',
  'contact.whatsapp.name': 'Name',
  'contact.whatsapp.service': 'Service',
  'contact.whatsapp.message': 'Message',

  'footer.rights': 'All rights reserved.',

  'notFound.title': 'Page not found',
  'notFound.back': 'Back to home',
};

export const ui: Record<Locale, Record<UiKey, string>> = { pt, en };
export type { UiKey };
