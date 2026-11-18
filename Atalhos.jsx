import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, MessageSquareQuote, ShieldCheck, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const ATALHOS = [
  {
    to: '/protocolo',
    icon: ShieldCheck,
    title: 'Protocolo escolar',
    text: 'A Lei 10.639/03, as diretrizes pedagógicas e o passo a passo de atuação diante de casos de racismo.',
  },
  {
    to: '/personalidades',
    icon: Users,
    title: 'Personalidades negras',
    text: 'De Zumbi dos Palmares a Rebeca Andrade: dez trajetórias de superação e excelência.',
  },
  {
    to: '/dicas',
    icon: BookOpen,
    title: 'Dicas antirracistas',
    text: 'O “Pequeno Manual” em prática: microagressões, leituras, apoio real e desconstrução de preconceitos.',
  },
  {
    to: '/depoimentos',
    icon: MessageSquareQuote,
    title: 'Mural de vozes',
    text: 'O espaço da comunidade escolar para registrar relatos, aprendizados e compromissos.',
  },
];

export default function Atalhos() {
  return (
    <section className="site-container py-16 lg:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Explore o projeto"
          title="Um caminho para cada pergunta"
          description="O conteúdo está organizado em páginas curtas, para ler com calma e voltar quando precisar."
        />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {ATALHOS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="panel card-lift group flex items-start gap-4 p-6"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="flex items-center justify-between gap-3">
                <span className="font-heading text-lg text-foreground">{item.title}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{item.text}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
